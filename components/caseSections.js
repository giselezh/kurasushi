// Strategic Case Study Sections Dynamic Renderer & Interactive Controls
import { caseContent } from '../data/translations.js';
import { sfx } from '../utils/audio.js';

let currentLang = 'zh';

export function renderCaseStudy(lang) {
  currentLang = lang;
  
  // 1. Text Blocks
  document.getElementById('summary-content').innerHTML = caseContent[currentLang].summary;
  document.getElementById('intro-text').innerHTML = caseContent[currentLang].intro;
  document.getElementById('value-chain-container').innerHTML = caseContent[currentLang].chain;
  document.getElementById('challenges-container').innerHTML = caseContent[currentLang].challenges;
  document.getElementById('conclusion-content').innerHTML = caseContent[currentLang].conclusion;

  // 2. Complex Interactive Widgets
  renderPestelAccordion();
  renderPorterForcesRadar();
  renderVrioMatrixTable();
  initAnsoffMatrix();
  renderReferencesList();
}

// ----------------------------------------------------
// PESTEL Accordion
// ----------------------------------------------------
function renderPestelAccordion() {
  const container = document.getElementById('pestel-accordion-container');
  if (!container) return;
  container.innerHTML = "";

  const items = caseContent[currentLang].pestel;

  items.forEach((item, index) => {
    const accItem = document.createElement('div');
    accItem.className = `pestel-item ${index === 0 ? 'active' : ''}`;
    
    // Custom icons for PESTEL
    let iconName = "activity";
    if (item.id === 'p') iconName = "landmark";
    if (item.id === 'e') iconName = "coins";
    if (item.id === 's') iconName = "users";
    if (item.id === 't') iconName = "cpu";
    if (item.id === 'env') iconName = "leaf";
    if (item.id === 'l') iconName = "gavel";

    accItem.innerHTML = `
      <button class="pestel-header" aria-expanded="${index === 0 ? 'true' : 'false'}">
        <span class="header-title-wrapper">
          <i data-lucide="${iconName}" class="pestel-icon"></i>
          <span class="pestel-title">${item.title}</span>
        </span>
        <i data-lucide="chevron-down" class="pestel-chevron"></i>
      </button>
      <div class="pestel-body">
        <p class="case-text">${item.desc}</p>
      </div>
    `;
    container.appendChild(accItem);
  });

  lucide.createIcons();

  // Accordion Toggle logic
  const headers = container.querySelectorAll('.pestel-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      sfx.click();
      const parent = header.parentElement;
      const isActive = parent.classList.contains('active');
      
      // Close all
      container.querySelectorAll('.pestel-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.pestel-header').setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        parent.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ----------------------------------------------------
// Porter's Five Forces Radar Visual (Interactive SVG)
// ----------------------------------------------------
function renderPorterForcesRadar() {
  const radarContainer = document.getElementById('porter-radar');
  if (!radarContainer) return;

  const data = caseContent[currentLang].porter;
  
  // Custom hand-drawn high-fidelity interactive SVG representing Porter's Forces
  radarContainer.innerHTML = `
    <svg viewBox="0 0 400 400" width="100%" height="100%" class="radar-svg">
      <!-- Background pentagonal grid rings -->
      <polygon points="200,60 333,157 282,313 118,313 67,157" class="radar-ring r5"/>
      <polygon points="200,88 306,165 265,290 135,290 94,165" class="radar-ring r4"/>
      <polygon points="200,116 280,174 249,267 151,267 120,174" class="radar-ring r3"/>
      <polygon points="200,144 253,183 232,243 168,243 147,183" class="radar-ring r2"/>
      <polygon points="200,172 227,191 216,220 184,220 173,191" class="radar-ring r1"/>
      
      <!-- Axis lines from center -->
      <line x1="200" y1="200" x2="200" y2="40" class="radar-axis"/>
      <line x1="200" y1="200" x2="350" y2="150" class="radar-axis"/>
      <line x1="200" y1="200" x2="290" y2="330" class="radar-axis"/>
      <line x1="200" y1="200" x2="110" y2="330" class="radar-axis"/>
      <line x1="200" y1="200" x2="50" y2="150" class="radar-axis"/>
      
      <!-- Interactive Data Plot Area (Vibrant semi-transparent fill) -->
      <!-- Points calculated based on scores out of 5:
           - Rivalry (top): 4.8/5 => Y = 200 - 4.8*28 = 65.6
           - Entrants (top-right): 4.0/5 => 200 + cos(axis)*score => (295, 131)
           - Substitutes (bottom-right): 4.5/5 => (273, 290)
           - Suppliers (bottom-left): 2.5/5 => (160, 250)
           - Buyers (top-left): 3.5/5 => (95, 150)
      -->
      <polygon points="200,65 306,131 266,290 160,250 95,150" class="radar-data-polygon"/>
      
      <!-- Interactive Node Targets -->
      <!-- Threat of New Entrants (Entrants) -->
      <circle cx="306" cy="131" r="10" class="radar-node" data-force="entrants"/>
      <text x="316" y="125" class="radar-label label-tr"> entrants </text>

      <!-- Threat of Substitutes (Substitutes) -->
      <circle cx="266" cy="290" r="10" class="radar-node" data-force="substitutes"/>
      <text x="276" y="305" class="radar-label label-br"> substitutes </text>

      <!-- Bargaining Power of Suppliers (Suppliers) -->
      <circle cx="160" cy="250" r="10" class="radar-node" data-force="suppliers"/>
      <text x="110" y="265" class="radar-label label-bl"> suppliers </text>

      <!-- Bargaining Power of Buyers (Buyers) -->
      <circle cx="95" cy="150" r="10" class="radar-node" data-force="buyers"/>
      <text x="30" y="145" class="radar-label label-tl"> buyers </text>

      <!-- Industry Rivalry (Rivalry) -->
      <circle cx="200" cy="65" r="10" class="radar-node" data-force="rivalry"/>
      <text x="200" y="30" class="radar-label label-top"> rivalry </text>
    </svg>
  `;

  // Bind clicks to radar nodes
  const nodes = radarContainer.querySelectorAll('.radar-node');
  const detailsPane = document.getElementById('porter-details-pane');

  nodes.forEach(node => {
    node.addEventListener('click', (e) => {
      sfx.click();
      
      // Highlight node
      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');

      const forceKey = node.getAttribute('data-force');
      const forceData = data[forceKey];
      
      if (detailsPane && forceData) {
        detailsPane.innerHTML = `
          <div class="porter-detail-card animated-fade">
            <div class="detail-header">
              <h4 class="force-title">${forceData.title}</h4>
              <span class="force-score-badge">${forceData.score} / 5.0</span>
            </div>
            <div class="rating-meter">
              <div class="meter-bar" style="width: ${(forceData.score / 5) * 100}%"></div>
            </div>
            <p class="force-desc">${forceData.desc}</p>
          </div>
        `;
      }
    });
  });

  // Pre-click Rivalry node to show content immediately
  const rivalryNode = radarContainer.querySelector('[data-force="rivalry"]');
  if (rivalryNode) {
    rivalryNode.dispatchEvent(new Event('click'));
  }
}

// ----------------------------------------------------
// VRIO Matrix Table
// ----------------------------------------------------
function renderVrioMatrixTable() {
  const tbody = document.getElementById('vrio-table-body');
  if (!tbody) return;
  tbody.innerHTML = "";

  const rows = caseContent[currentLang].vrio;

  rows.forEach(row => {
    const tr = document.createElement('tr');
    tr.className = 'vrio-tr';
    tr.innerHTML = `
      <td class="vrio-td-resource">
        <strong>${row.resource}</strong>
      </td>
      <td class="center vrio-indicator-cell highlight-v">${row.v}</td>
      <td class="center vrio-indicator-cell highlight-r">${row.r}</td>
      <td class="center vrio-indicator-cell highlight-i">${row.i}</td>
      <td class="center vrio-indicator-cell highlight-o">${row.o}</td>
      <td class="vrio-td-implication">
        <span class="implication-pill ${row.implication.toLowerCase().includes('sustainable') ? 'sustainable' : 'parity'}">
          ${row.implication}
        </span>
        <div class="vrio-hover-details">${row.details}</div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// ----------------------------------------------------
// Ansoff Growth Matrix
// ----------------------------------------------------
function initAnsoffMatrix() {
  const quadrants = document.querySelectorAll('.ansoff-quadrant');
  const detailsCard = document.getElementById('ansoff-details');
  const data = caseContent[currentLang].ansoff;

  if (quadrants.length === 0 || !detailsCard) return;

  quadrants.forEach(quad => {
    quad.addEventListener('click', () => {
      sfx.click();

      // Deactivate all
      quadrants.forEach(q => q.classList.remove('active'));
      quad.classList.add('active');

      const quadrantKey = quad.getAttribute('data-quadrant');
      const quadData = data[quadrantKey];

      if (quadData) {
        detailsCard.innerHTML = `
          <div class="ansoff-detail-content animated-fade">
            <h4>${quadData.title}</h4>
            <p>${quadData.desc}</p>
          </div>
        `;
      }
    });
  });

  // Pre-click Market Development quadrant to show content immediately
  const devQuad = document.querySelector('[data-quadrant="market"]');
  if (devQuad) {
    devQuad.dispatchEvent(new Event('click'));
  }
}

// ----------------------------------------------------
// APA References List
// ----------------------------------------------------
function renderReferencesList() {
  const container = document.getElementById('references-list-content');
  if (!container) return;
  container.innerHTML = "";

  const refs = caseContent[currentLang].references;

  refs.forEach(ref => {
    const li = document.createElement('li');
    li.className = 'reference-item';
    li.innerHTML = `
      <i data-lucide="bookmark" class="ref-icon"></i>
      <span class="ref-text">${ref}</span>
    `;
    container.appendChild(li);
  });

  lucide.createIcons();
}
