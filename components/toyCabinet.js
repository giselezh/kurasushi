// Capsule Toys Collection Cabinet Component
import { capsuleToys } from '../data/menuData.js';
import { sfx } from '../utils/audio.js';

let currentLanguage = 'zh';
let unlockedToysList = [];

export function renderToyCabinet(lang, unlockedList) {
  currentLanguage = lang;
  unlockedToysList = unlockedList;
  
  const shelvesContainer = document.getElementById('toy-cabinet-shelves');
  const countSpan = document.getElementById('cabinet-count');
  
  if (!shelvesContainer) return;
  shelvesContainer.innerHTML = "";

  if (countSpan) {
    countSpan.textContent = unlockedToysList.length;
  }

  // Render 6 standard toy spots
  capsuleToys.forEach(toy => {
    const isUnlocked = unlockedToysList.some(ut => ut.id === toy.id);
    const spot = document.createElement('div');
    spot.className = `toy-spot-card ${isUnlocked ? 'unlocked animated-scale' : 'locked'}`;
    
    if (isUnlocked) {
      spot.innerHTML = `
        <div class="toy-mini-glow" style="background: radial-gradient(circle, ${toy.iconColor}33, transparent 70%);"></div>
        <div class="toy-icon-wrapper">
          <svg viewBox="0 0 100 100" class="cabinet-toy-svg">
            <circle cx="50" cy="50" r="35" fill="${toy.svgColor}"/>
            <!-- Mini icon representation -->
            <rect x="35" y="42" width="30" height="15" rx="3" fill="${toy.iconColor}"/>
            <rect x="32" y="57" width="36" height="8" rx="2" fill="#FFF"/>
          </svg>
        </div>
        <span class="toy-spot-name">${currentLanguage === 'zh' ? toy.nameZh : toy.nameEn}</span>
      `;
      // Click details popover
      spot.addEventListener('click', () => {
        sfx.click();
        showToyDetailsPopup(toy);
      });
    } else {
      spot.innerHTML = `
        <div class="toy-icon-wrapper locked-icon">
          <i data-lucide="lock" class="padlock-icon"></i>
        </div>
        <span class="toy-spot-name locked-name">${currentLanguage === 'zh' ? '尚未解鎖' : 'Locked'}</span>
      `;
    }
    
    shelvesContainer.appendChild(spot);
  });
  
  lucide.createIcons();
}

function showToyDetailsPopup(toy) {
  const overlay = document.createElement('div');
  overlay.className = 'prize-modal-overlay active';
  overlay.innerHTML = `
    <div class="prize-card-glass animated-scale">
      <div class="prize-glow" style="background: radial-gradient(circle, ${toy.iconColor}55, transparent 70%);"></div>
      <div class="prize-card-header">
        <span class="prize-rarity-pill unlocked-pill">COLLECTED</span>
        <h3 class="prize-card-name">${currentLanguage === 'zh' ? toy.nameZh : toy.nameEn}</h3>
      </div>
      <div class="prize-toy-art">
        <svg viewBox="0 0 100 100" width="120" height="120">
          <circle cx="50" cy="50" r="40" fill="${toy.svgColor}" opacity="0.3" stroke="${toy.iconColor}" stroke-width="2"/>
          <circle cx="50" cy="45" r="20" fill="${toy.iconColor}"/>
          <rect x="35" y="60" width="30" height="12" rx="4" fill="#FFF"/>
        </svg>
      </div>
      <p class="prize-card-desc">${currentLanguage === 'zh' ? toy.descriptionZh : toy.descriptionEn}</p>
      <button class="btn-primary" id="btn-close-toy-detail">
        <span>${currentLanguage === 'zh' ? '關閉' : 'Close'}</span>
      </button>
    </div>
  `;

  document.body.appendChild(overlay);
  lucide.createIcons();

  const closeBtn = document.getElementById('btn-close-toy-detail');
  closeBtn.addEventListener('click', () => {
    sfx.click();
    overlay.remove();
  });
}
