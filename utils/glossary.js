// Glossary Catalog and Interactive Utility for Kura Sushi Taiwan SPA
import { sfx } from './audio.js';

export const glossaryTerms = {
  zh: {
    "VRIO": {
      title: "VRIO 矩陣架構",
      desc: "企業內部資源分析工具，評估資源是否具備：價值性 (Value)、稀有性 (Rarity)、難以模仿性 (Inimitability) 及組織整合性 (Organization)。若四者皆具，即能構築『持續性競爭優勢』。"
    },
    "PESTEL": {
      title: "PESTEL 總體環境分析",
      desc: "分析外部總體環境的六大力量：政治 (Political)、經濟 (Economic)、社會 (Social)、技術 (Technological)、環境 (Environmental) 及法律 (Legal)，協助企業判別外部機會與威脅。"
    },
    "Porter": {
      title: "波特五力分析 (Porter's Five Forces)",
      desc: "由哈佛商學院麥可·波特提出，評估行業競爭激烈度與獲利吸引力的指標，包括：新進入者威脅、購買者議價力、供應商議價力、替代品威脅及產業內部競爭激烈度。"
    },
    "Ansoff": {
      title: "安索夫成長矩陣 (Ansoff Matrix)",
      desc: "產品/市場擴張矩陣，劃分為：市場滲透（現有產品/現有市場）、產品開發（新產品/現有市場）、市場開發（現有產品/新市場）及多角化（新產品/新市場）四大策略象限。"
    },
    "BikkuraPon": {
      title: "Bikkura Pon (びっくらポン) 扭蛋系統",
      desc: "藏壽司首創的專利餐桌行銷系統。顧客每吃完 5 盤壽司並將餐盤投入桌邊槽，系統會播放趣味短片。若幸運中獎，上方機台便會自動掉落限量的聯名扭蛋玩具。"
    },
    "Shari": {
      title: "舍利 (醋飯 / Shari)",
      desc: "壽司底部的醋飯，日本壽司界的專業術語。藏壽司強調其舍利原料選用高品質米，並嚴格遵循無化學添加物調和醋之傳統日式比例。"
    },
    "Edomae": {
      title: "江戸前壽司 (Edo-mae Sushi)",
      desc: "源自日本江戶時代（東京舊稱江戶）的傳統壽司流派。當時因為缺乏冷藏設備，漁獲多以鹽醃、醋漬或醬油浸泡處理以利保存並帶出極致鮮味，是現代握壽司的鼻祖。"
    },
    "Kaizen": {
      title: "改善 (Kaizen / 企業持續改進)",
      desc: "源於日本豐田生產方式的經營管理哲學，意指由下而上、每天進行細微的工作流程改善。藏壽司導入大量自動化 IE 工程（如水流洗碗）即是『改善』精神的體現。"
    }
  },
  en: {
    "VRIO": {
      title: "VRIO Framework",
      desc: "An internal analysis tool measuring resource attributes: Value, Rarity, Inimitability, and Organization. Achieving all four criteria delivers a Sustainable Competitive Advantage."
    },
    "PESTEL": {
      title: "PESTEL Analysis",
      desc: "A strategic tool analyzing macro-environmental forces shaping businesses: Political, Economic, Social, Technological, Environmental, and Legal."
    },
    "Porter": {
      title: "Porter's Five Forces",
      desc: "Developed by Michael E. Porter to determine industry profit potential, analyzing: Threat of New Entrants, Buyer Power, Supplier Power, Threat of Substitutes, and Internal Rivalry."
    },
    "Ansoff": {
      title: "Ansoff Matrix",
      desc: "A strategic planning grid mapping four growth strategies based on combinations of existing/new products and existing/new markets."
    },
    "BikkuraPon": {
      title: "Bikkura Pon (びっくらポン)",
      desc: "Kura Sushi's patented table game system. Inserting 5 empty plates into a slot fires a random touchscreen game, giving guests a chance to win limited-edition capsule toys."
    },
    "Shari": {
      title: "Shari (Sushi Rice)",
      desc: "The seasoned vinegar rice serving as the foundation of premium sushi. Kura Sushi's shari uses high-grade rice prepared without any artificial flavorings or chemical additives."
    },
    "Edomae": {
      title: "Edo-mae Sushi",
      desc: "A classic sushi style originating in Edo (ancient Tokyo). Because ice was rare, chefs cured fish in salt, vinegar, or soy sauce, creating complex flavors that birthed modern nigiri."
    },
    "Kaizen": {
      title: "Kaizen (Continuous Improvement)",
      desc: "A Japanese business philosophy emphasizing incremental, bottom-up efficiency tweaks. Kura's massive automation systems (like water chutes) are core examples of Kaizen."
    }
  }
};

let currentLang = 'zh';

// Setup Glossary Drawer & Search Interactivity
export function initGlossary(lang) {
  currentLang = lang;
  renderGlossaryDrawer();
  bindGlossaryEvents();
  attachInlineGlossaryTooltips();
}

function renderGlossaryDrawer(filterQuery = "") {
  const listContainer = document.getElementById('glossary-drawer-list');
  if (!listContainer) return;
  listContainer.innerHTML = "";

  const terms = glossaryTerms[currentLang];
  let hasResults = false;

  for (const [key, term] of Object.entries(terms)) {
    if (
      filterQuery &&
      !term.title.toLowerCase().includes(filterQuery.toLowerCase()) &&
      !term.desc.toLowerCase().includes(filterQuery.toLowerCase())
    ) {
      continue;
    }
    
    hasResults = true;

    const termItem = document.createElement('div');
    termItem.className = 'glossary-drawer-item';
    termItem.innerHTML = `
      <h4>${term.title} <span class="term-key-badge">${key}</span></h4>
      <p>${term.desc}</p>
    `;
    listContainer.appendChild(termItem);
  }

  if (!hasResults) {
    listContainer.innerHTML = `
      <div class="glossary-no-results">
        <i data-lucide="search-code"></i>
        <p>${currentLang === 'zh' ? '無相符的專有名詞' : 'No matching terms found'}</p>
      </div>
    `;
    lucide.createIcons();
  }
}

function bindGlossaryEvents() {
  const searchInput = document.getElementById('glossary-search-input');
  if (searchInput) {
    // Clean input listener
    searchInput.addEventListener('input', (e) => {
      renderGlossaryDrawer(e.target.value);
    });
  }

  const toggleBtn = document.getElementById('glossary-toggle');
  const closeBtn = document.getElementById('glossary-close');
  const drawer = document.getElementById('glossary-drawer');
  const overlay = document.getElementById('drawer-overlay');

  if (toggleBtn && drawer && overlay) {
    toggleBtn.addEventListener('click', () => {
      sfx.click();
      drawer.classList.add('open');
      overlay.classList.add('active');
    });
  }

  if (closeBtn && drawer && overlay) {
    const closeDrawer = () => {
      sfx.click();
      drawer.classList.remove('open');
      overlay.classList.remove('active');
    };
    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);
  }
}

// Scans strategic text panels and wraps glossary keywords with dynamic hover cards
export function attachInlineGlossaryTooltips() {
  // Select all .case-text paragraphs that contain keywords
  const paragraphs = document.querySelectorAll('.case-text, .step-desc, .challenge-desc');
  const terms = glossaryTerms[currentLang];

  paragraphs.forEach(p => {
    let html = p.innerHTML;
    let modified = false;

    // To prevent infinite replacement or breaking tags, we locate exact keyword occurrences
    for (const [key, term] of Object.entries(terms)) {
      // Find term.title in Chinese, or key (e.g. PESTEL) in text, but ignore already wrapped terms
      const regex = new RegExp(`(?<!class="glossary-term-link"[^>]*)(VRIO|PESTEL|波特五力|安索夫成長矩陣|鮮度君|Bikkura Pon|舍利|江戸前|改善)(?![^<]*>)`, 'g');
      
      html = html.replace(regex, (match) => {
        // Map the localized match to its glossary key
        let matchedKey = key;
        if (match === '波特五力') matchedKey = 'Porter';
        if (match === '安索夫成長矩陣') matchedKey = 'Ansoff';
        if (match === '鮮度君') matchedKey = 'VRIO'; // links to VRIO
        
        modified = true;
        return `<span class="glossary-term-link" data-term-key="${matchedKey}">${match}</span>`;
      });
    }

    if (modified) {
      p.innerHTML = html;
    }
  });

  // Attach hover card event listeners to all links
  const links = document.querySelectorAll('.glossary-term-link');
  links.forEach(link => {
    link.addEventListener('mouseenter', showTooltip);
    link.addEventListener('mouseleave', hideTooltip);
  });
}

let activeTooltip = null;

function showTooltip(e) {
  const key = e.target.getAttribute('data-term-key');
  const term = glossaryTerms[currentLang][key];
  if (!term) return;

  // Create absolute positioned tooltip element
  const tooltip = document.createElement('div');
  tooltip.className = 'glossary-tooltip-bubble';
  tooltip.innerHTML = `
    <h5>${term.title}</h5>
    <p>${term.desc}</p>
    <div class="tooltip-arrow"></div>
  `;

  document.body.appendChild(tooltip);
  activeTooltip = tooltip;

  // Position tooltip relative to hovered element
  const rect = e.target.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  
  const topPosition = rect.top + window.scrollY - tooltipRect.height - 10;
  const leftPosition = rect.left + window.scrollX + (rect.width - tooltipRect.width) / 2;

  tooltip.style.top = `${topPosition}px`;
  tooltip.style.left = `${Math.max(10, leftPosition)}px`; // Avoid clipping off-screen
  
  // Transition animate
  setTimeout(() => tooltip.classList.add('visible'), 20);
}

function hideTooltip() {
  if (activeTooltip) {
    const tooltipToRemove = activeTooltip;
    tooltipToRemove.classList.remove('visible');
    setTimeout(() => {
      if (tooltipToRemove.parentNode) {
        tooltipToRemove.parentNode.removeChild(tooltipToRemove);
      }
    }, 200);
    activeTooltip = null;
  }
}
