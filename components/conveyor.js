// Endless Conveyor Belt Sushi Loop Component
import { menuItems } from '../data/menuData.js';
import { sfx } from '../utils/audio.js';

let currentLanguage = 'zh';
let onPlateEatenCallback = null;

export function initConveyorBelt(lang, onPlateEaten) {
  currentLanguage = lang;
  onPlateEatenCallback = onPlateEaten;
  
  const lane = document.getElementById('regular-lane');
  if (!lane) return;
  
  lane.innerHTML = "";
  
  // Build continuous line of plates (initially 8 plates evenly spaced)
  const plateCount = 8;
  for (let i = 0; i < plateCount; i++) {
    const item = getRandomSushiItem();
    const plateEl = createPlateElement(item, i * (100 / plateCount));
    lane.appendChild(plateEl);
  }
}

function getRandomSushiItem() {
  // Select standard sushi or gunkan items for the belt
  const sushiItems = menuItems.filter(item => item.category === 'sushi' || item.category === 'gunkan');
  return sushiItems[Math.floor(Math.random() * sushiItems.length)];
}

function createPlateElement(item, startPositionPercentage) {
  const plate = document.createElement('div');
  plate.className = 'conveyor-plate';
  plate.style.left = `${startPositionPercentage}%`;
  
  // Custom High-Fidelity SVG of Sushi under Mr.Fresh dome cover!
  plate.innerHTML = `
    <div class="sushi-visual-wrapper">
      <!-- Patented Mr.Fresh transparent dome cover -->
      <div class="mr-fresh-dome"></div>
      
      <!-- The Dish Plate -->
      <div class="ceramic-plate"></div>
      
      <!-- The Shari (Rice) -->
      <div class="sushi-shari" style="background: ${item.accentColor};"></div>
      
      <!-- The Neta (Topping) -->
      <div class="sushi-neta" style="background: ${item.svgColor};"></div>
      
      <!-- Detail highlights for Gunkan seaweed wraps -->
      ${item.category === 'gunkan' ? `<div class="gunkan-seaweed"></div>` : ''}
    </div>
    <div class="plate-tooltip">
      <span class="plate-name">${currentLanguage === 'zh' ? item.nameZh : item.nameEn}</span>
      <span class="plate-price">NT$ ${item.price}</span>
    </div>
  `;
  
  // Click Handler to "eat" the sushi!
  plate.addEventListener('click', (e) => {
    e.stopPropagation();
    eatSushi(plate, item);
  });
  
  // CSS horizontal loop animation logic driven by JS intervals for precise offsets
  let position = startPositionPercentage;
  const speed = 0.05; // Scroll speed
  
  function step() {
    if (!plate.parentNode) return; // Terminate if eaten
    
    position -= speed;
    if (position < -15) {
      position = 105; // Respawn at the far right
      // Switch item for random variety upon respawning
      const newItem = getRandomSushiItem();
      updatePlateItem(plate, newItem);
    }
    plate.style.left = `${position}%`;
    requestAnimationFrame(step);
  }
  
  requestAnimationFrame(step);
  return plate;
}

function updatePlateItem(plateEl, item) {
  plateEl.querySelector('.sushi-neta').style.background = item.svgColor;
  plateEl.querySelector('.sushi-shari').style.background = item.accentColor;
  
  const seaweed = plateEl.querySelector('.gunkan-seaweed');
  if (seaweed) {
    if (item.category !== 'gunkan') {
      seaweed.remove();
    }
  } else {
    if (item.category === 'gunkan') {
      const container = plateEl.querySelector('.sushi-visual-wrapper');
      const sw = document.createElement('div');
      sw.className = 'gunkan-seaweed';
      container.appendChild(sw);
    }
  }
  
  plateEl.querySelector('.plate-name').textContent = currentLanguage === 'zh' ? item.nameZh : item.nameEn;
  plateEl.querySelector('.plate-price').textContent = `NT$ ${item.price}`;
  
  // Re-bind click event with the new item data
  const newPlate = plateEl.cloneNode(true);
  plateEl.parentNode.replaceChild(newPlate, plateEl);
  newPlate.addEventListener('click', (e) => {
    e.stopPropagation();
    eatSushi(newPlate, item);
  });
}

function eatSushi(plateEl, item) {
  sfx.eat();
  
  // Sparkle/eating burst effect
  createEatingSplashEffect(plateEl);
  
  // Add eaten class for clean scale down fadeout
  plateEl.classList.add('eaten');
  
  // Trigger global callbacks to notify plate addition
  if (onPlateEatenCallback) {
    onPlateEatenCallback(item);
  }
  
  // Remove from conveyor belt DOM after animation finishes
  setTimeout(() => {
    if (plateEl.parentNode) {
      const parent = plateEl.parentNode;
      plateEl.remove();
      
      // Spawn a new plate from far right 1.5 seconds later to maintain density
      setTimeout(() => {
        if (!parent) return;
        const newItem = getRandomSushiItem();
        const newPlate = createPlateElement(newItem, 105);
        parent.appendChild(newPlate);
      }, 1500);
    }
  }, 400);
}

function createEatingSplashEffect(parentEl) {
  const rect = parentEl.getBoundingClientRect();
  const container = document.getElementById('regular-lane');
  const beltRect = container.getBoundingClientRect();
  
  const clickX = rect.left - beltRect.left + rect.width / 2;
  const clickY = rect.top - beltRect.top + rect.height / 2;

  for (let i = 0; i < 6; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'eat-bubble-particle';
    bubble.style.left = `${clickX}px`;
    bubble.style.top = `${clickY}px`;
    
    const angle = (i * 60 * Math.PI) / 180;
    const distance = 40 + Math.random() * 20;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    
    bubble.style.setProperty('--tx', `${tx}px`);
    bubble.style.setProperty('--ty', `${ty}px`);
    
    container.appendChild(bubble);
    setTimeout(() => bubble.remove(), 600);
  }
}
