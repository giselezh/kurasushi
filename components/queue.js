// Taiwan Flagship Branches Virtual Booking & Ticket Queue Assistant
import { sfx } from '../utils/audio.js';

let currentLanguage = 'zh';
let activeTicketTimer = null;

const branchesData = {
  zh: [
    { id: "kaohsiung_global", name: "高雄時代大道全球旗艦店", waitMin: 75, storesCount: 288, label: "全球最大旗艦店 / 佐藤可士和設計" },
    { id: "taichung_shizheng", name: "台中市政路土藏店", waitMin: 40, storesCount: 160, label: "獨立土藏造造型 / 中台灣核心" },
    { id: "taipei_main", name: "台北館前店 (站前旗艦)", waitMin: 90, storesCount: 220, label: "台北核心交通樞紐 / 排隊人潮最多" },
    { id: "tainan_fuqian", name: "台南府前路土藏店", waitMin: 15, storesCount: 140, label: "府城熱門美食新指標" }
  ],
  en: [
    { id: "kaohsiung_global", name: "Kaohsiung Kaisyuan Global Flagship", waitMin: 75, storesCount: 288, label: "World's largest store, Kashiwa Sato design" },
    { id: "taichung_shizheng", name: "Taichung Shizheng Road Tuzang Store", waitMin: 40, storesCount: 160, label: "Standalone warehouse architecture" },
    { id: "taipei_main", name: "Taipei Station Flagship", waitMin: 90, storesCount: 220, label: "Major urban transit hub / Highest peak crowd" },
    { id: "tainan_fuqian", name: "Tainan Fuqian Road Tuzang Store", waitMin: 15, storesCount: 140, label: "Latest culinary landmark in Tainan" }
  ]
};

export function initQueueAssistant(lang) {
  currentLanguage = lang;
  populateBranchSelect();
  bindQueueEvents();
}

function populateBranchSelect() {
  const select = document.getElementById('queue-branch-select');
  if (!select) return;
  select.innerHTML = "";

  const list = branchesData[currentLanguage];
  list.forEach(branch => {
    const opt = document.createElement('option');
    opt.value = branch.id;
    opt.textContent = branch.name;
    select.appendChild(opt);
  });

  updateBranchStatusCard(list[0].id);
}

function updateBranchStatusCard(branchId) {
  const infoPane = document.getElementById('branch-status-info');
  if (!infoPane) return;

  const branch = branchesData[currentLanguage].find(b => b.id === branchId);
  if (!branch) return;

  infoPane.innerHTML = `
    <div class="branch-status-details animated-fade">
      <h4>${branch.name}</h4>
      <p class="branch-meta-desc">${branch.label}</p>
      <div class="status-metrics-row">
        <span class="status-meta">
          <i data-lucide="users"></i> 
          <span>${currentLanguage === 'zh' ? `席位數: ${branch.storesCount} 席` : `Seats: ${branch.storesCount}`}</span>
        </span>
        <span class="status-meta status-wait-pill ${branch.waitMin > 60 ? 'congested' : 'smooth'}">
          <i data-lucide="clock"></i>
          <span>${currentLanguage === 'zh' ? `估計等候: ${branch.waitMin} 分鐘` : `Wait Time: ${branch.waitMin} mins`}</span>
        </span>
      </div>
    </div>
  `;
  lucide.createIcons();
}

function bindQueueEvents() {
  const select = document.getElementById('queue-branch-select');
  if (select) {
    // Re-bind change
    const newSelect = select.cloneNode(true);
    select.parentNode.replaceChild(newSelect, select);
    
    newSelect.addEventListener('change', (e) => {
      sfx.click();
      updateBranchStatusCard(e.target.value);
    });
  }

  const drawBtn = document.getElementById('btn-draw-ticket');
  if (drawBtn) {
    const newBtn = drawBtn.cloneNode(true);
    drawBtn.parentNode.replaceChild(newBtn, drawBtn);
    
    newBtn.addEventListener('click', () => {
      const activeBranchId = document.getElementById('queue-branch-select').value;
      generateQueueTicket(activeBranchId);
    });
  }
}

function generateQueueTicket(branchId) {
  sfx.win(); // Fanfare!

  const branch = branchesData[currentLanguage].find(b => b.id === branchId);
  if (!branch) return;

  const idlePrompt = document.getElementById('ticket-idle-prompt');
  const activeContent = document.getElementById('ticket-active-content');
  if (!idlePrompt || !activeContent) return;

  idlePrompt.style.display = 'none';
  activeContent.style.display = 'block';
  activeContent.innerHTML = "";

  // Generates randomized unique Ticket Number (e.g. K-105)
  const prefix = branch.id.startsWith('kaohsiung') ? 'K' : branch.id.startsWith('taichung') ? 'TC' : branch.id.startsWith('taipei') ? 'TP' : 'TN';
  const num = Math.floor(100 + Math.random() * 900);
  const ticketNumber = `${prefix}-${num}`;

  // Reset any active timers
  if (activeTicketTimer) {
    clearInterval(activeTicketTimer);
  }

  // Count down from branch.waitMin (in seconds for fast simulation demo)
  // Let's set it to count down from 300 seconds (5 minutes) for a fast-ticking demo!
  let timeLeft = 300; 

  activeContent.innerHTML = `
    <div class="active-ticket-layout animated-scale">
      <div class="ticket-header-strip">
        <span class="ticket-brand-txt">KURA SUSHI TAIWAN</span>
        <span class="ticket-no-badge">ONLINE</span>
      </div>
      
      <div class="ticket-main-body">
        <div class="ticket-store">${branch.name}</div>
        
        <div class="ticket-number-display">
          <span class="ticket-lbl">${currentLanguage === 'zh' ? '您的預約號碼' : 'YOUR NUMBER'}</span>
          <span class="ticket-num glow-txt">${ticketNumber}</span>
        </div>
        
        <div class="ticket-countdown-timer">
          <span class="timer-lbl">${currentLanguage === 'zh' ? '預計到店倒數' : 'ESTIMATED ARRIVAL COUNTDOWN'}</span>
          <span class="timer-clock" id="ticket-countdown-clock">05:00</span>
        </div>

        <div class="ticket-barcodes-wrapper">
          <!-- Stylized CSS barcode -->
          <div class="css-barcode">
            <div class="bar s"></div><div class="bar m"></div><div class="bar l"></div>
            <div class="bar s"></div><div class="bar l"></div><div class="bar s"></div>
            <div class="bar m"></div><div class="bar m"></div><div class="bar l"></div>
            <div class="bar s"></div><div class="bar l"></div><div class="bar m"></div>
          </div>
          <span class="barcode-number">2754-202605-KURA</span>
        </div>
      </div>
    </div>
  `;

  const clockEl = document.getElementById('ticket-countdown-clock');
  
  function updateClock() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    clockEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    if (timeLeft <= 0) {
      clearInterval(activeTicketTimer);
      clockEl.textContent = currentLanguage === 'zh' ? '請速進店！' : 'GO TO DESK!';
      clockEl.classList.add('urgent-glow');
    }
    timeLeft--;
  }

  updateClock();
  activeTicketTimer = setInterval(updateClock, 1000);
}
