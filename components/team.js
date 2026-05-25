// Team Members Showcase and D-ID Video Theater Player Controller
import { sfx } from '../utils/audio.js';

export const teamData = {
  zh: [
    {
      id: "sophia",
      name: "林曉美 (Sophia Lin)",
      role: "MBA 專案組長 / 品牌行銷策略",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250",
      desc: "專修跨國餐飲整合行銷與消費者體驗工程。主導藏壽司『飲食 × 娛樂』之行銷綜效整合與公司簡案研究。",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Mock high-quality video
      captions: [
        { time: 0, text: "大家好，我是林曉美。今天我將代表團隊為大家介紹台灣藏壽司的個案摘要。" },
        { time: 4, text: "藏壽司成功打破了平價壽司的傳統框框，將『Delicious, Safe, and Fun』三大支柱完美融合。" },
        { time: 9, text: "特別是其獨特的 Bikkura Pon 聯名玩具，更成功創造了極高的社群曝光與顧客到店黏著度。" },
        { time: 14, text: "接下來，我的組員們將深入剖析其外部 PESTEL、波特五力與內部 VRIO 競爭壁壘。" }
      ]
    },
    {
      id: "david",
      name: "陳志偉 (David Chen)",
      role: "MBA 核心研究員 / 智慧物流供應鏈",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=250",
      desc: "專注於現代工業工程（IE）與冷鏈物流排程。負責本個案中自動除盤、水流漂送回收系統與外部總體環境分析。",
      videoUrl: "https://www.w3schools.com/html/movie.mp4", // Mock high-quality video
      captions: [
        { time: 0, text: "各位教授好，我是陳志偉。由我來為大家解析藏壽司的外部總體環境與價值鏈運作。" },
        { time: 5, text: "在面臨台灣餐飲業巨大缺工潮與食材通膨的雙重衝擊下，藏壽司的智慧化物流發揮了關鍵作用。" },
        { time: 10, text: "其前台餐盤水流回收系統與自動洗碗專利，大幅省去了外場35%以上的清盤人力。" },
        { time: 14, text: "這套將工業工程思維導入餐飲服務的模式，正是其最穩固的護城河之一。" }
      ]
    },
    {
      id: "ray",
      name: "黃冠宇 (Ray Huang)",
      role: "MBA 核心研究員 / 數位轉型策略",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=250",
      desc: "專攻服務業數位轉型（DX）與商業開發。主導本研究之內部 VRIO 競爭優勢分析與安索夫成長矩陣拓張評估。",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Mock high-quality video
      captions: [
        { time: 0, text: "大家好，我是黃冠宇。我負責闡述藏壽司的 VRIO 核心壁壘與安索夫擴張策略。" },
        { time: 5, text: "經過 VRIO 分析，我們判定鮮度君半自動保鮮蓋與智慧扭蛋機擁有可持續的競爭優勢。" },
        { time: 10, text: "安索夫成長矩陣顯示，其在大都市周邊設立巨型獨立『土藏造街邊店』是極佳的市場開發策略。" },
        { time: 15, text: "這種獨立街邊店型，完全擺脫了百貨公司的抽成制約，樹立了全新的日系品牌高標。" }
      ]
    }
  ],
  
  en: [
    {
      id: "sophia",
      name: "Sophia Lin",
      role: "Project Leader / Marketing Strategy",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250",
      desc: "Specialized in food-service marketing and experience design. Led the research on Kura's gamified marketing and brand values.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      captions: [
        { time: 0, text: "Hello everyone, I'm Sophia Lin. I am honored to present the executive summary of Kura Sushi Taiwan." },
        { time: 5, text: "Kura Sushi successfully redefined casual sushi by fusing Tasty, Safe, and Fun into a powerful ecosystem." },
        { time: 10, text: "Its Bikkura Pon capsule games create tremendous social media exposure and locked-in client loyalty." },
        { time: 15, text: "Next, my teammates will guide you through PESTEL, Porter's, and deep VRIO matrix barriers." }
      ]
    },
    {
      id: "david",
      name: "David Chen",
      role: "MBA Researcher / Operations & Logistics",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=250",
      desc: "Focused on Industrial Engineering (IE) and supply chain logistics. Analyzed Kura's automated disposal tracks and PESTEL.",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
      captions: [
        { time: 0, text: "Greetings professors, I'm David Chen. I will deconstruct Kura's macro-environment and value chain." },
        { time: 5, text: "Confronted by Taiwan's severe service labor shortage, Kura's smart logistics play a pivotal role." },
        { time: 10, text: "Their patented plate water waterways and dishwasher integration slash floor labor by over 35 percent." },
        { time: 15, text: "This integration of manufacturing logic into hospitality creates a highly robust competitive shield." }
      ]
    },
    {
      id: "ray",
      name: "Ray Huang",
      role: "MBA Researcher / Digital Strategy",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=250",
      desc: "Specialized in service sector Digital Transformation (DX). Conducted the VRIO Matrix assessment and Ansoff Growth study.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      captions: [
        { time: 0, text: "Hello everyone, I'm Ray Huang. I am going to analyze the VRIO matrix and Ansoff growth strategies." },
        { time: 5, text: "Through VRIO, we proved that 'Mr. Fresh' and the Bikkura Pon system secure long-term advantages." },
        { time: 10, text: "The Ansoff matrix illustrates that establishing freestanding 'Tuzang' street-side flagships is an excellent expansion tool." },
        { time: 15, text: "These independent stores free the brand from retail mall commissions while building an immersive brand image." }
      ]
    }
  ]
};

let currentLang = 'zh';
let activeCaptions = [];

export function renderTeamSection(lang) {
  currentLang = lang;
  const container = document.getElementById('team-members-container');
  if (!container) return;
  container.innerHTML = "";

  const members = teamData[currentLang];

  members.forEach(member => {
    const card = document.createElement('div');
    card.className = 'team-member-card card';
    card.innerHTML = `
      <div class="member-photo-area">
        <img src="${member.avatar}" alt="${member.name}" class="member-avatar">
        <div class="member-pulse-ring"></div>
      </div>
      <div class="member-info-area">
        <h3 class="member-name">${member.name}</h3>
        <span class="member-role">${member.role}</span>
        <p class="member-desc">${member.desc}</p>
        <button class="btn-play-did" data-member-id="${member.id}">
          <i data-lucide="play-circle"></i>
          <span>${currentLang === 'zh' ? '觀看 D-ID 影音報告 v2' : 'Watch D-ID Presentation v2'}</span>
        </button>
      </div>
    `;
    container.appendChild(card);
  });

  lucide.createIcons();
  bindTeamEvents();
}

function bindTeamEvents() {
  const playButtons = document.querySelectorAll('.btn-play-did');
  playButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const memberId = btn.getAttribute('data-member-id');
      openVideoTheater(memberId);
    });
  });

  const closeBtn = document.getElementById('theater-close');
  const theater = document.getElementById('video-theater');
  const overlay = document.getElementById('theater-overlay');
  const videoElement = document.getElementById('did-video-element');

  if (closeBtn && theater && overlay && videoElement) {
    const closeTheater = () => {
      sfx.click();
      videoElement.pause();
      videoElement.src = "";
      theater.classList.remove('open');
      overlay.classList.remove('active');
      document.body.style.overflow = ''; // Unlock page scroll
    };

    closeBtn.addEventListener('click', closeTheater);
    overlay.addEventListener('click', closeTheater);
  }
}

function openVideoTheater(memberId) {
  sfx.click();

  const members = teamData[currentLang];
  const member = members.find(m => m.id === memberId);
  if (!member) return;

  const theater = document.getElementById('video-theater');
  const overlay = document.getElementById('theater-overlay');
  const videoElement = document.getElementById('did-video-element');
  const titleElement = document.getElementById('theater-member-name');
  const captionOverlay = document.getElementById('did-caption-overlay');

  if (!theater || !overlay || !videoElement || !titleElement) return;

  titleElement.textContent = `${member.name} - ${currentLang === 'zh' ? '策略個案簡報 V2 (D-ID)' : 'Strategic Presentation V2'}`;
  videoElement.src = member.videoUrl;
  
  // Set up captions data for this playback
  activeCaptions = member.captions;
  captionOverlay.textContent = activeCaptions[0] ? activeCaptions[0].text : "";
  captionOverlay.style.display = 'block';

  // Toggle scrolling lock on background page
  document.body.style.overflow = 'hidden';

  theater.classList.add('open');
  overlay.classList.add('active');

  // Trigger auto play
  videoElement.load();
  videoElement.play().catch(err => console.log("Auto-play blocked by browser. Awaiting user click."));

  // Track video time to update captions dynamically
  videoElement.ontimeupdate = () => {
    const currentTime = videoElement.currentTime;
    
    // Find current active caption block
    let activeText = "";
    for (let i = 0; i < activeCaptions.length; i++) {
      if (currentTime >= activeCaptions[i].time) {
        activeText = activeCaptions[i].text;
      }
    }
    
    captionOverlay.textContent = activeText;
  };

  // Caption toggle controller
  const captionsToggle = document.getElementById('btn-toggle-captions');
  if (captionsToggle) {
    // Re-bind click
    const newToggle = captionsToggle.cloneNode(true);
    captionsToggle.parentNode.replaceChild(newToggle, captionsToggle);
    
    newToggle.addEventListener('click', () => {
      sfx.click();
      if (captionOverlay.style.display === 'none') {
        captionOverlay.style.display = 'block';
        newToggle.classList.remove('disabled');
      } else {
        captionOverlay.style.display = 'none';
        newToggle.classList.add('disabled');
      }
    });
  }
}
