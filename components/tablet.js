// High-Tech Ordering Tablet Console Emulator
import { menuItems } from '../data/menuData.js';
import { sfx } from '../utils/audio.js';

let currentLanguage = 'zh';
let currentCategory = 'sushi';
let billTotal = 0;
let orderedItemsList = [];
let onPlateOrderedCallback = null;

export function initOrderTablet(lang, onPlateOrdered) {
  currentLanguage = lang;
  onPlateOrderedCallback = onPlateOrdered;
  renderTabletScreen();
}

function renderTabletScreen() {
  const container = document.getElementById('tablet-content-area');
  if (!container) return;

  // Modern layout with Category Sidebar + Item Grid
  container.innerHTML = `
    <div class="tablet-layout">
      <!-- Sidebar Categories -->
      <div class="tablet-sidebar">
        <button class="tab-category-btn ${currentCategory === 'sushi' ? 'active' : ''}" data-cat="sushi">
          <i data-lucide="fish"></i>
          <span>${currentLanguage === 'zh' ? '握壽司' : 'Nigiri'}</span>
        </button>
        <button class="tab-category-btn ${currentCategory === 'gunkan' ? 'active' : ''}" data-cat="gunkan">
          <i data-lucide="pocket"></i>
          <span>${currentLanguage === 'zh' ? '軍艦卷' : 'Gunkan'}</span>
        </button>
        <button class="tab-category-btn ${currentCategory === 'side' ? 'active' : ''}" data-cat="side">
          <i data-lucide="soup"></i>
          <span>${currentLanguage === 'zh' ? '副餐/湯' : 'Sides'}</span>
        </button>
        <button class="tab-category-btn ${currentCategory === 'dessert' ? 'active' : ''}" data-cat="dessert">
          <i data-lucide="ice-cream"></i>
          <span>${currentLanguage === 'zh' ? '甜點/飲' : 'Dessert'}</span>
        </button>
      </div>

      <!-- Main Display Screen Grid -->
      <div class="tablet-main-grid">
        <div class="tablet-grid-header">
          <span class="tablet-billing-indicator">
            <i data-lucide="banknote"></i> 
            <span>${currentLanguage === 'zh' ? '累計消費' : 'Total Bill'}: <strong class="glow-txt">NT$ ${billTotal}</strong></span>
          </span>
          <span class="tablet-orders-count">
            <i data-lucide="shopping-bag"></i>
            <span>${currentLanguage === 'zh' ? '已加點' : 'Orders'}: <strong>${orderedItemsList.length}</strong></span>
          </span>
        </div>
        
        <div class="tablet-items-viewport" id="tablet-items-grid">
          <!-- Grid items dynamically rendered -->
        </div>
      </div>
    </div>
  `;

  lucide.createIcons();
  bindTabletEvents();
  renderCategoryItems();
}

function bindTabletEvents() {
  const sidebarButtons = document.querySelectorAll('.tab-category-btn');
  sidebarButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.click();
      currentCategory = btn.getAttribute('data-cat');
      sidebarButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCategoryItems();
    });
  });
}

function renderCategoryItems() {
  const grid = document.getElementById('tablet-items-grid');
  if (!grid) return;
  grid.innerHTML = "";

  const items = menuItems.filter(item => item.category === currentCategory);

  items.forEach(item => {
    const itemCard = document.createElement('div');
    itemCard.className = 'tablet-item-card';
    itemCard.innerHTML = `
      <div class="tablet-item-pic" style="background: linear-gradient(135deg, ${item.svgColor}33, ${item.svgColor}66);">
        <!-- Stylized vector representations inside -->
        <div class="mini-plate-art" style="background: ${item.svgColor}; border: 3px solid ${item.accentColor};"></div>
      </div>
      <div class="tablet-item-name">${currentLanguage === 'zh' ? item.nameZh : item.nameEn}</div>
      <div class="tablet-item-footer">
        <span class="tablet-item-price">NT$ ${item.price}</span>
        <button class="btn-order-item" data-item-id="${item.id}">
          <i data-lucide="plus"></i>
          <span>${currentLanguage === 'zh' ? '加點' : 'Order'}</span>
        </button>
      </div>
    `;
    grid.appendChild(itemCard);
  });

  lucide.createIcons();

  const orderButtons = grid.querySelectorAll('.btn-order-item');
  orderButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const itemId = btn.getAttribute('data-item-id');
      const selectedItem = menuItems.find(i => i.id === itemId);
      if (selectedItem) {
        orderMenuItem(selectedItem);
      }
    });
  });
}

function orderMenuItem(item) {
  sfx.click();
  billTotal += item.price;
  orderedItemsList.push(item);

  // Update billing tags instantly
  renderTabletScreen();

  // Run the express shinkansen train delivery animation!
  triggerExpressDelivery(item);
}

function triggerExpressDelivery(item) {
  const expressLane = document.getElementById('express-lane');
  const bulletTrain = document.getElementById('bullet-train');
  if (!expressLane || !bulletTrain) return;

  // Clear previous contents
  bulletTrain.innerHTML = "";

  // Render express bullet train SVG carrying the ordered plate
  bulletTrain.innerHTML = `
    <div class="train-locomotive">
      <div class="train-nose"></div>
      <div class="train-cabin"></div>
    </div>
    <div class="train-flatbed">
      <div class="conveyor-plate delivered-plate" id="delivered-plate-id">
        <div class="sushi-visual-wrapper">
          <div class="mr-fresh-dome"></div>
          <div class="ceramic-plate"></div>
          <div class="sushi-shari" style="background: ${item.accentColor};"></div>
          <div class="sushi-neta" style="background: ${item.svgColor};"></div>
          ${item.category === 'gunkan' ? `<div class="gunkan-seaweed"></div>` : ''}
        </div>
        <div class="plate-label-glow">${currentLanguage === 'zh' ? '特快配送' : 'Express'}</div>
      </div>
    </div>
  `;

  // Start Slide in animation
  bulletTrain.className = 'bullet-train slide-in';
  
  // Alert sound after 0.5s when train is close
  setTimeout(() => {
    sfx.win(); // Cheerful arpeggio alert!
  }, 600);

  // Set up click action to "eat" the delivered sushi!
  setTimeout(() => {
    const deliveredPlate = document.getElementById('delivered-plate-id');
    if (deliveredPlate) {
      deliveredPlate.addEventListener('click', () => {
        sfx.eat();
        deliveredPlate.classList.add('eaten');
        
        if (onPlateOrderedCallback) {
          onPlateOrderedCallback(item);
        }

        // Return train to kitchen immediately
        setTimeout(() => {
          bulletTrain.className = 'bullet-train slide-out';
        }, 300);
      });
    }
  }, 1000);

  // Fallback: If user doesn't click after 6 seconds, train slides out automatically
  setTimeout(() => {
    if (bulletTrain.classList.contains('slide-in')) {
      bulletTrain.className = 'bullet-train slide-out';
    }
  }, 6500);
}
