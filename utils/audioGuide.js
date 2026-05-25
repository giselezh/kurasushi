// Case Section Speech Synthesis Narrator (Web Speech API)
// Fully bilingual support mapping local high-fidelity voices.
import { sfx } from './audio.js';

let currentUtterance = null;
let currentBtn = null;
let currentLanguage = 'zh';

const sectionSpeeches = {
  zh: {
    team: "學術研究團隊介紹。本研究小組結合企業管理研究所頂尖成員，運用數位虛擬雙生人技術進行深度個案簡報。請點擊小組成員的大頭照以開啟高畫質簡報影音。",
    summary: "執行摘要部分。本研究以台灣藏壽司為核心，透析其首創的飲食與娛樂商業模式，揭示其智慧科技物流管理以及扭蛋行銷整合所產生的商業價值。",
    intro: "公司與品牌簡介。藏壽司成立於日本，堅持美味、安全與娛樂三大核心價值。進軍台灣後，以高科技休閒平台自居，全面推動無接觸餐飲流程。",
    external: "外部與產業環境分析。透過總體環境 PESTEL 架構與波特五力產業力量分析，我們評估了台灣面臨的通膨、人口老化及競爭對手如壽司郎的嚴峻包圍網。",
    internal: "內部資源與競爭力分析。本章詳細剖析藏壽司特殊的價值鏈活動，並透過 VRIO 矩陣深度評估其專利鮮度君、水流回收輸送管道等核心競爭優勢。",
    growth: "企業成長策略與未來挑戰。我們使用安索夫成長矩陣對其開設街邊全球旗艦店進行解讀，並點明台灣餐飲業缺工及生鮮供應鏈價格上漲的重大威脅。",
    conclusion: "個案分析結論。總結指出，藏壽司的成功是自動化工業工程與體驗式行銷的究極融合，並為其長期永續發展提出了三大策略建議。"
  },
  en: {
    team: "Research team introduction. Our group incorporates top members of the Graduate School of Business. We use advanced D-ID AI avatars for visual strategic presentations. Please click on any avatar to open the media player.",
    summary: "Executive Summary. This case study examines Kura Sushi Taiwan, deconstructing its proprietary 'Food times Entertainment' business model and analyzing the synergies created by its smart technological logistics.",
    intro: "Company and Brand Introduction. Kura Sushi originated in Osaka, adhering to Tasty, Safe, and Fun. It positions itself as a high-tech entertainment dining platform, breaking traditional barriers in Taiwan.",
    external: "External and Industry Analysis. Utilizing PESTEL and Porter's Five Forces, we analyze macro-forces like labor inflation and aging populations alongside the fierce industry rivalry with Sushiro.",
    internal: "Internal Resources and Competencies. This section analyzes Kura's primary value chain activities and maps out its VRIO matrix, proving how its patented 'Mr. Fresh' and water chutes secure long-term competitive advantages.",
    growth: "Corporate Growth Strategy and Challenges. We apply the Ansoff Growth Grid to deconstruct its street-side flagship store expansion and discuss severe systemic labor shortages and food supply chain risks.",
    conclusion: "Case Study Conclusion. Kura Sushi's success is a perfect synergy of Industrial Engineering and Experiential Marketing. The research team recommends upgrading AI forecasting and driving ESG green transitions."
  }
};

export function initAudioGuides(lang) {
  currentLanguage = lang;
  
  // Stop any active speech if language flips
  stopCurrentSpeech();

  const playButtons = document.querySelectorAll('.btn-audio-guide');
  playButtons.forEach(btn => {
    // Remove existing event listener if re-initializing
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);

    newBtn.addEventListener('click', () => {
      const section = newBtn.getAttribute('data-section');
      toggleSectionAudio(section, newBtn);
    });
  });
}

function toggleSectionAudio(section, btn) {
  sfx.click();

  if (currentBtn === btn) {
    // If clicking same active playing button, toggle pause
    if (window.speechSynthesis.speaking) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        setButtonState(btn, 'playing');
      } else {
        window.speechSynthesis.pause();
        setButtonState(btn, 'paused');
      }
      return;
    }
  }

  // Stop previous speech
  stopCurrentSpeech();

  const textToRead = sectionSpeeches[currentLanguage][section];
  if (!textToRead) return;

  const utterance = new SpeechSynthesisUtterance(textToRead);
  
  // Configure Voice based on selected language
  const voices = window.speechSynthesis.getVoices();
  let preferredVoice = null;

  if (currentLanguage === 'zh') {
    // Target high-quality Mandarin voices (Google/Microsoft Taiwan)
    preferredVoice = voices.find(v => v.lang.includes('zh-TW') || v.lang.includes('zh-HK') || v.lang.includes('zh-CN'));
    utterance.rate = 1.0;
  } else {
    // Target English voices
    preferredVoice = voices.find(v => v.lang.startsWith('en-'));
    utterance.rate = 1.05;
  }

  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  utterance.onend = () => {
    setButtonState(btn, 'idle');
    clearCurrentState();
  };

  utterance.onerror = () => {
    setButtonState(btn, 'idle');
    clearCurrentState();
  };

  currentUtterance = utterance;
  currentBtn = btn;

  setButtonState(btn, 'playing');
  window.speechSynthesis.speak(utterance);
}

function setButtonState(btn, state) {
  const icon = btn.querySelector('[data-lucide]');
  const textSpan = btn.querySelector('span');

  if (state === 'playing') {
    btn.classList.add('active-playing');
    if (icon) {
      icon.setAttribute('data-lucide', 'pause');
      lucide.createIcons();
    }
    if (textSpan) {
      textSpan.textContent = currentLanguage === 'zh' ? '播放中...' : 'Reading...';
    }
  } else if (state === 'paused') {
    btn.classList.remove('active-playing');
    btn.classList.add('active-paused');
    if (icon) {
      icon.setAttribute('data-lucide', 'play');
      lucide.createIcons();
    }
    if (textSpan) {
      textSpan.textContent = currentLanguage === 'zh' ? '已暫停' : 'Paused';
    }
  } else {
    btn.classList.remove('active-playing', 'active-paused');
    if (icon) {
      icon.setAttribute('data-lucide', 'volume-2');
      lucide.createIcons();
    }
    if (textSpan) {
      textSpan.textContent = currentLanguage === 'zh' ? '語音導讀' : 'Audio Narrator';
    }
  }
}

function stopCurrentSpeech() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  if (currentBtn) {
    setButtonState(currentBtn, 'idle');
  }
  clearCurrentState();
}

function clearCurrentState() {
  currentUtterance = null;
  currentBtn = null;
}

// Make sure speech cancels if window is closed or refreshed
window.addEventListener('beforeunload', () => {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
});
