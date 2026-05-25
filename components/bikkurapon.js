// Patented Bikkura Pon (びっくらポン) Gachapon Machine & Mini-Games Simulator
import { capsuleToys } from '../data/menuData.js';
import { sfx } from '../utils/audio.js';

let currentLanguage = 'zh';
let insertedPlates = 0;
let onToyUnlockedCallback = null;
let unlockedToysList = [];

export function initBikkuraPon(lang, initialPlatesCount, onToyUnlocked, unlockedToys) {
  currentLanguage = lang;
  insertedPlates = initialPlatesCount;
  onToyUnlockedCallback = onToyUnlocked;
  unlockedToysList = unlockedToys;

  updateInsertedPlatesDisplay();
  bindBikkuraPonEvents();
}

export function updateInsertedPlatesDisplay() {
  const platesCountSpan = document.getElementById('current-inserted-plates');
  const insertBtn = document.getElementById('btn-insert-five');
  
  if (platesCountSpan) {
    platesCountSpan.textContent = insertedPlates;
  }
  
  if (insertBtn) {
    // Every 5 plates unlocks the "Insert 5 Plates" button!
    if (insertedPlates >= 5) {
      insertBtn.removeAttribute('disabled');
      insertBtn.classList.add('glow-btn');
    } else {
      insertBtn.setAttribute('disabled', 'true');
      insertBtn.classList.remove('glow-btn');
    }
  }
}

function bindBikkuraPonEvents() {
  const insertBtn = document.getElementById('btn-insert-five');
  if (insertBtn) {
    // Clone to remove old listeners
    const newBtn = insertBtn.cloneNode(true);
    insertBtn.parentNode.replaceChild(newBtn, insertBtn);
    
    newBtn.addEventListener('click', () => {
      if (insertedPlates >= 5) {
        insertedPlates -= 5;
        updateInsertedPlatesDisplay();
        triggerBikkuraPonGame();
      }
    });
  }
}

function triggerBikkuraPonGame() {
  sfx.insert();
  
  // Slide a plate into the virtual slot
  const plateSlide = document.getElementById('plate-slide');
  if (plateSlide) {
    plateSlide.classList.add('slide-active');
    setTimeout(() => {
      plateSlide.classList.remove('slide-active');
    }, 800);
  }

  // Switch Machine screen state to Game
  const idleState = document.getElementById('screen-idle-state');
  const gameState = document.getElementById('screen-game-state');
  if (!idleState || !gameState) return;

  idleState.style.display = 'none';
  gameState.style.display = 'block';
  gameState.innerHTML = "";

  // Randomly select Game 1 (Ninja Battle) or Game 2 (Sushi Slots)
  const gameType = Math.random() > 0.5 ? 'ninja' : 'slots';
  
  if (gameType === 'ninja') {
    runNinjaBattleGame(gameState);
  } else {
    runSushiSlotsGame(gameState);
  }
}

// ----------------------------------------------------
// Game 1: Sushi Ninja Battle (壽司忍者大作戰)
// ----------------------------------------------------
function runNinjaBattleGame(screenEl) {
  screenEl.innerHTML = `
    <div class="game-view ninja-game">
      <div class="ninja-actor" id="game-ninja"></div>
      <div class="monster-actor" id="game-monster"></div>
      <div class="combat-log" id="game-log">${currentLanguage === 'zh' ? '戰鬥開始！' : 'Battle Start!'}</div>
    </div>
  `;
  
  const ninja = document.getElementById('game-ninja');
  const monster = document.getElementById('game-monster');
  const log = document.getElementById('game-log');
  
  // Sounds loop
  setTimeout(() => sfx.roll(), 300);

  // Animation Step 1: Charging
  setTimeout(() => {
    if (ninja && monster && log) {
      ninja.classList.add('charging');
      log.textContent = currentLanguage === 'zh' ? '小新忍者集氣中...' : 'Ninja gathering power...';
    }
  }, 1000);

  // Animation Step 2: Clash
  setTimeout(() => {
    if (ninja && monster && log) {
      ninja.classList.remove('charging');
      ninja.classList.add('slashing');
      monster.classList.add('hit');
      log.textContent = currentLanguage === 'zh' ? '吃我一記抹茶十字斬！' : 'Matcha Cross Slash!';
      sfx.insert(); // Click clash sound
    }
  }, 2200);

  // Step 3: Game Outcome
  setTimeout(() => {
    // 35% Win probability
    const win = Math.random() < 0.35;
    resolveGameOutcome(win, screenEl);
  }, 3800);
}

// ----------------------------------------------------
// Game 2: Sushi Slots Machine (壽司幸運拉霸)
// ----------------------------------------------------
function runSushiSlotsGame(screenEl) {
  screenEl.innerHTML = `
    <div class="game-view slots-game">
      <div class="slots-reels-row">
        <div class="reel" id="reel-1">🍣</div>
        <div class="reel" id="reel-2">🥚</div>
        <div class="reel" id="reel-3">🦐</div>
      </div>
      <div class="combat-log" id="game-log">${currentLanguage === 'zh' ? '轉動拉霸...' : 'Spinning...'}</div>
    </div>
  `;
  
  const reel1 = document.getElementById('reel-1');
  const reel2 = document.getElementById('reel-2');
  const reel3 = document.getElementById('reel-3');
  const log = document.getElementById('game-log');
  
  // Spinning animation classes
  reel1.classList.add('spinning');
  reel2.classList.add('spinning');
  reel3.classList.add('spinning');
  sfx.roll();

  // Stop reel 1
  setTimeout(() => {
    reel1.classList.remove('spinning');
    reel1.textContent = '🍣';
    sfx.click();
  }, 1000);

  // Stop reel 2
  setTimeout(() => {
    reel2.classList.remove('spinning');
    // For visual consistency, let's stop on matching or distinct items
    reel2.textContent = '🍣';
    sfx.click();
  }, 1800);

  // Stop reel 3 & outcome
  setTimeout(() => {
    reel3.classList.remove('spinning');
    
    // 35% Win probability
    const win = Math.random() < 0.35;
    
    if (win) {
      reel3.textContent = '🍣';
    } else {
      reel3.textContent = '🥚'; // Sad mismatch
    }
    sfx.click();
    
    setTimeout(() => {
      resolveGameOutcome(win, screenEl);
    }, 600);
  }, 2600);
}

// ----------------------------------------------------
// Game Outcome Resolver
// ----------------------------------------------------
function resolveGameOutcome(win, screenEl) {
  if (win) {
    sfx.win();
    screenEl.innerHTML = `
      <div class="game-outcome win-outcome animated-bounce">
        <div class="outcome-stars"></div>
        <div class="outcome-badge win-badge">當選</div>
        <div class="outcome-txt">${currentLanguage === 'zh' ? '恭喜中獎！' : 'YOU WIN!'}</div>
      </div>
    `;
    
    // Animate Capsule dome shaking
    shakeCapsuleDome();

    // Dispense Capsule Toy
    setTimeout(() => {
      dispenseCapsuleToy();
    }, 1500);
    
  } else {
    sfx.lose();
    screenEl.innerHTML = `
      <div class="game-outcome lose-outcome">
        <div class="outcome-badge lose-badge">殘念</div>
        <div class="outcome-txt">${currentLanguage === 'zh' ? '下次再努力！' : 'TRY AGAIN'}</div>
      </div>
    `;
  }

  // Restore screen to idle after 4 seconds
  setTimeout(() => {
    const idleState = document.getElementById('screen-idle-state');
    if (idleState && screenEl) {
      screenEl.style.display = 'none';
      idleState.style.display = 'flex';
      updateInsertedPlatesDisplay();
    }
  }, 4500);
}

function shakeCapsuleDome() {
  const dome = document.getElementById('capsule-dome');
  if (dome) {
    dome.classList.add('shake-active');
    setTimeout(() => {
      dome.classList.remove('shake-active');
    }, 1000);
  }
}

function dispenseCapsuleToy() {
  const capsule = document.getElementById('dispensed-capsule-prize');
  if (!capsule) return;

  // Choose a random capsule toy that the user hasn't collected yet if possible
  const uncollected = capsuleToys.filter(t => !unlockedToysList.some(ut => ut.id === t.id));
  const selectedToy = uncollected.length > 0 
    ? uncollected[Math.floor(Math.random() * uncollected.length)]
    : capsuleToys[Math.floor(Math.random() * capsuleToys.length)];

  // Capsule rolling sound
  sfx.roll();

  // Dynamic capsule sphere background color based on toy details
  capsule.style.background = `radial-gradient(circle at 30% 30%, ${selectedToy.svgColor}, #000000)`;
  capsule.classList.add('dispensed-active');

  // Bind click event to "Open" the capsule prize
  const newCapsule = capsule.cloneNode(true);
  capsule.parentNode.replaceChild(newCapsule, capsule);

  newCapsule.addEventListener('click', () => {
    sfx.win();
    newCapsule.classList.remove('dispensed-active');
    showPrizePopup(selectedToy);
  });
}

function showPrizePopup(toy) {
  // Create gorgeous high-fidelity glassy popup card for the prize
  const overlay = document.createElement('div');
  overlay.className = 'prize-modal-overlay active';
  overlay.innerHTML = `
    <div class="prize-card-glass animated-scale">
      <div class="prize-glow" style="background: radial-gradient(circle, ${toy.iconColor}55, transparent 70%);"></div>
      <div class="prize-card-header">
        <span class="prize-rarity-pill">SPECIAL</span>
        <h3 class="prize-card-name">${currentLanguage === 'zh' ? toy.nameZh : toy.nameEn}</h3>
      </div>
      <div class="prize-toy-art">
        <svg viewBox="0 0 100 100" width="120" height="120">
          <circle cx="50" cy="50" r="40" fill="${toy.svgColor}" opacity="0.3" stroke="${toy.iconColor}" stroke-width="2"/>
          <!-- Decorative SVGs inside -->
          <circle cx="50" cy="45" r="20" fill="${toy.iconColor}"/>
          <rect x="35" y="60" width="30" height="12" rx="4" fill="#FFF"/>
        </svg>
      </div>
      <p class="prize-card-desc">${currentLanguage === 'zh' ? toy.descriptionZh : toy.descriptionEn}</p>
      <button class="btn-primary" id="btn-collect-toy">
        <i data-lucide="award"></i>
        <span>${currentLanguage === 'zh' ? '放入收藏閣' : 'Add to Collection'}</span>
      </button>
    </div>
  `;

  document.body.appendChild(overlay);
  lucide.createIcons();

  const collectBtn = document.getElementById('btn-collect-toy');
  collectBtn.addEventListener('click', () => {
    sfx.click();
    overlay.remove();
    
    // Unlock callback to update cabinet shelves
    if (onToyUnlockedCallback) {
      onToyUnlockedCallback(toy);
    }
  });
}
