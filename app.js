/* ==========================================================================
   KURA SUSHI TAIWAN CASE STUDY & LAB SPA - MASTER ENGINE
   Consolidated self-contained app.js to prevent CORS blocks over file:// protocols.
   ========================================================================== */

// ==========================================================================
// 1. CONSTANTS & локализация DATA STORE (中英雙語數據庫)
// ==========================================================================

const translations = {
  zh: {
    "nav.title": "台灣藏壽司策略個案",
    "nav.team": "團隊介紹",
    "nav.summary": "執行摘要",
    "nav.intro": "公司簡介",
    "nav.external": "外部環境",
    "nav.internal": "內部資源",
    "nav.growth": "成長策略",
    "nav.lab": "互動體驗室",
    "audio.guide": "語音導讀",
    "hero.tag": "MBA / 企業管理策略專題",
    "hero.title": "傳統江戶美食與現代智慧科技的究極融合",
    "hero.subtitle": "台灣藏壽司策略個案分析與高互動體驗開發實驗室",
    "dash.team.title": "學術研究團隊",
    "dash.team.desc": "成員介紹與 D-ID 影音報告",
    "dash.summary.title": "執行摘要",
    "dash.summary.desc": "個案研究核心綜述與關鍵數據",
    "dash.intro.title": "品牌與公司簡介",
    "dash.intro.desc": "創始理念、核心價值與台灣佈局",
    "dash.external.title": "外部與環境分析",
    "dash.external.desc": "PESTEL 與波特五力分析",
    "dash.internal.title": "內部資源與競爭力",
    "dash.internal.desc": "VRIO 矩陣評估與核心價值鏈流動",
    "dash.growth.title": "成長策略與挑戰",
    "dash.growth.desc": "Ansoff 成長矩陣與未來隱憂",
    "dash.lab.badge": "體驗",
    "dash.lab.title": "互動體驗實驗室",
    "dash.lab.desc": "迴轉壽司鏈、點餐平板與扭蛋機",
    "team.title": "研究團隊與 D-ID 簡報",
    "team.subtitle": "深入淺出的個案報告，結合先進 AI 人像技術（D-ID）進行影音策略闡述。",
    "team.btn.did": "播放 D-ID 簡報 V2",
    "summary.title": "執行摘要 (Executive Summary)",
    "summary.kpi.title": "藏壽司台灣關鍵指標 (2025)",
    "summary.kpi.stores": "營運分店數",
    "summary.kpi.revenue": "年營收估值",
    "summary.kpi.satisfaction": "客戶滿意度",
    "summary.kpi.loyalty": "App 會員數",
    "intro.title": "公司與品牌簡介",
    "intro.values.title": "三大核心精神 (Brand Pillars)",
    "intro.values.v1.title": "美味安全 (Safety)",
    "intro.values.v1.desc": "專利保鮮蓋「鮮度君」，徹底隔絕病菌與飛沫感染。",
    "intro.values.v1_2.title": "極致美味 (Quality)",
    "intro.values.v1_2.desc": "嚴選高品質無添加食材，完美傳承日本江戸前風味。",
    "intro.values.v1_3.title": "娛樂體驗 (Entertainment)",
    "intro.values.v1_3.desc": "經典扭蛋機 Bikkura Pon 結合餐盤自動回收，趣味十足。",
    "external.title": "外部與產業環境分析",
    "external.subtitle": "深入探討台灣餐飲市場的總體環境力量（PESTEL）與迴轉壽司產業內部的五力鬥爭。",
    "external.pestel.title": "PESTEL 總體環境評估",
    "external.porter.title": "波特五力模型分析",
    "external.porter.prompt": "💡 點擊左側雷達圖中的各個競爭力量，即可在此面板查看深度的市場策略解讀。",
    "internal.title": "內部資源與核心競爭力",
    "internal.chain.title": "藏壽司特色價值鏈（Value Chain）",
    "internal.vrio.title": "核心資源 VRIO 評估矩陣",
    "internal.vrio.th.resource": "核心資源與能力",
    "internal.vrio.th.implication": "競爭意涵 (Implications)",
    "growth.title": "企業成長策略與未來挑戰",
    "growth.ansoff.title": "安索夫成長矩陣 (Ansoff Matrix)",
    "growth.ansoff.hint": "💡 點擊矩陣中不同的成長象限，可查看藏壽司採取的對應市場拓張模式。",
    "growth.ansoff.penetration": "市場滲透",
    "growth.ansoff.product": "產品開發",
    "growth.ansoff.market": "市場開發",
    "growth.ansoff.diversification": "多角化",
    "growth.ansoff.quad1": "現有產品 × 現有市場",
    "growth.ansoff.quad2": "全新產品 × 現有市場",
    "growth.ansoff.quad3": "現有產品 × 全新市場",
    "growth.ansoff.quad4": "全新產品 × 全新市場",
    "growth.challenges.title": "未來策略性隱憂與挑戰",
    "conclusion.title": "個案分析結論",
    "lab.title": "附錄甲：互動體驗實驗室",
    "lab.subtitle": "這是一個完全擬真的台灣藏壽司餐桌互動體驗。請在迴轉鏈上拿取壽司，或利用平板加點，累計吃完 5 個餐盤後投入回收槽，挑戰扭蛋機吧！",
    "lab.conveyor.title": "特快雙層迴轉鏈條 (Double Conveyor Belt)",
    "lab.conveyor.hint": "💡 下層為一般慢速鏈：點擊壽司盤即可「拿取食用」；上層為急行新幹線：點餐平板下單後，專車會以極速自動配送至您的座位！",
    "lab.machine.screen.idle": "投幣孔放入餐盤",
    "lab.disposal.label": "盤子投入口 (Plate Disposal Slot)",
    "lab.disposal.btn": "放入五個餐盤",
    "lab.cabinet.title": "我的扭蛋收藏閣 (My Capsule Toys)",
    "lab.queue.title": "台灣旗艦分店虛擬排隊系統",
    "lab.queue.select": "選擇分店 (Select Branch)",
    "lab.queue.btn": "抽取預約號碼牌",
    "lab.queue.ticket.idle": "🎟️ 請在左側選擇分店並抽取號碼牌，系統將為您生成包含防偽條碼與實時倒計時的預約票券。",
    "references.title": "附錄乙：學術文獻與數據來源",
    "glossary.drawer.title": "專有名詞小百科",
    "theater.captions": "字幕開關 (Captions)",
    "footer.copyright": "© 2026 國立大學企業管理研究所. All rights reserved.",
    "footer.date": "個案發布日期：2026年5月"
  },
  en: {
    "nav.title": "Kura Sushi Case Study",
    "nav.team": "Team",
    "nav.summary": "Summary",
    "nav.intro": "Company Intro",
    "nav.external": "External Environment",
    "nav.internal": "Internal Capabilities",
    "nav.growth": "Growth Strategy",
    "nav.lab": "Interactive Lab",
    "audio.guide": "Audio Narrator",
    "hero.tag": "MBA / Strategic Management Topic",
    "hero.title": "The Ultimate Fusion of Edo Gastronomy & High-Tech Logistics",
    "hero.subtitle": "Strategic Case Study Analysis & Interactive Simulation Lab of Kura Sushi Taiwan",
    "dash.team.title": "Research Team",
    "dash.team.desc": "Member Profiles & D-ID Presentations",
    "dash.summary.title": "Executive Summary",
    "dash.summary.desc": "Core Synthesis & Key Financial Indicators",
    "dash.intro.title": "Company & Brand Intro",
    "dash.intro.desc": "Founding Vision, Core Values & Taiwan Layout",
    "dash.external.title": "External Environment",
    "dash.external.desc": "PESTEL & Porter's Five Forces Model",
    "dash.internal.title": "Internal Resource Analysis",
    "dash.internal.desc": "VRIO Assessment & Value Chain Logistics",
    "dash.growth.title": "Growth & Challenges",
    "dash.growth.desc": "Ansoff Matrix Expansion & Structural Risks",
    "dash.lab.badge": "LAB",
    "dash.lab.title": "Interactive Lab Simulator",
    "dash.lab.desc": "Conveyor Belt, Order Console & Bikkura Pon Game",
    "team.title": "Research Team & D-ID Presentations",
    "team.subtitle": "Insightful case reports utilizing advanced AI avatar technology (D-ID) for visual video summaries.",
    "team.btn.did": "Play D-ID Video V2",
    "summary.title": "Executive Summary",
    "summary.kpi.title": "Kura Sushi Taiwan Key Performance Indicators (2025)",
    "summary.kpi.stores": "Operating Branches",
    "summary.kpi.revenue": "Est. Annual Revenue",
    "summary.kpi.satisfaction": "Customer Satisfaction",
    "summary.kpi.loyalty": "Mobile App Members",
    "intro.title": "Company & Brand Introduction",
    "intro.values.title": "Three Core Brand Pillars",
    "intro.values.v1.title": "Flavor & Safety (Safety)",
    "intro.values.v1.desc": "Patented 'Mr. Fresh' dome cover shields sushi from germs and airborne drops.",
    "intro.values.v1_2.title": "Culinary Excellence (Quality)",
    "intro.values.v1_2.desc": "Strict chemical-free raw ingredients, faithfully preserving traditional Edo-mae taste.",
    "intro.values.v1_3.title": "Gamified Dining (Entertainment)",
    "intro.values.v1_3.desc": "Iconic Bikkura Pon capsule game integrated with automated dish slots.",
    "external.title": "External & Industry Environment Analysis",
    "external.subtitle": "A deep dive into Taiwan's macro-environment (PESTEL) and the micro-competitive forces driving the conveyor belt sushi industry.",
    "external.pestel.title": "PESTEL Macro Analysis",
    "external.porter.title": "Porter's Five Forces Industry Model",
    "external.porter.prompt": "💡 Click any of the competitive force nodes on the left radar chart to display deep strategic commentary here.",
    "internal.title": "Internal Resources & Core Competencies",
    "internal.chain.title": "Kura Sushi Proprietary Value Chain Flow",
    "internal.vrio.title": "Core Capabilities VRIO Matrix",
    "internal.vrio.th.resource": "Resource / Capability",
    "internal.vrio.th.implication": "Competitive Implications",
    "growth.title": "Corporate Growth Strategy & Future Challenges",
    "growth.ansoff.title": "Ansoff Growth Matrix",
    "growth.ansoff.hint": "💡 Click on the different quadrants in the growth matrix to review Kura Sushi's strategic expansion actions.",
    "growth.ansoff.penetration": "Market Penetration",
    "growth.ansoff.product": "Product Development",
    "growth.ansoff.market": "Market Development",
    "growth.ansoff.diversification": "Diversification",
    "growth.ansoff.quad1": "Existing Products × Existing Markets",
    "growth.ansoff.quad2": "New Products × Existing Markets",
    "growth.ansoff.quad3": "Existing Products × New Markets",
    "growth.ansoff.quad4": "New Products × New Markets",
    "growth.challenges.title": "Key Structural Challenges & Future Risks",
    "conclusion.title": "Case Study Conclusion",
    "lab.title": "Appendix A: Interactive Experience Laboratory",
    "lab.subtitle": "Experience Kura Sushi Taiwan's immersive table system! Grab dishes from the conveyor loop, order specials using the tablet console, slip empty plates into the slot, and play Bikkura Pon!",
    "lab.conveyor.title": "Express Dual Conveyor Belt System",
    "lab.conveyor.hint": "💡 Lower track runs standard belt: click any plate to grab and 'eat' it. Upper track runs high-speed express train: ordered items fly in dynamically from the kitchen!",
    "lab.machine.screen.idle": "Insert empty plates into slot",
    "lab.disposal.label": "Plate Disposal Slot",
    "lab.disposal.btn": "Insert 5 Plates Now",
    "lab.cabinet.title": "My Virtual Capsule Cabinet (Collected Toys)",
    "lab.queue.title": "Taiwan Flagship Branch Queue Assistant",
    "lab.queue.select": "Select Branch",
    "lab.queue.btn": "Draw Virtual Reservation Ticket",
    "lab.queue.ticket.idle": "🎟️ Choose a branch on the left and draw a reservation ticket to generate a mock-up ticket complete with barcode and live countdown ticker.",
    "references.title": "Appendix B: Academic References & Data Sources",
    "glossary.drawer.title": "Mini Business Glossary",
    "theater.captions": "Toggle Subtitles",
    "footer.copyright": "© 2026 National University Graduate School of Business. All rights reserved.",
    "footer.date": "Published: May 2026"
  }
};

const caseContent = {
  zh: {
    summary: `
      <p class="case-text">本策略個案研究報告以<b>台灣藏壽司（Kura Sushi Taiwan）</b>為對象，全面解析其在競爭極其激烈的餐飲與迴轉壽司產業中，如何憑藉特殊的<b>「飲食 × 娛樂」商業模式</b>異軍突起。藏壽司成立於日本，自 2014 年進軍台灣市場後發展迅速，並於 2020 年正式上櫃，成為台灣餐飲業的指標性外商企業。</p>
      <p class="case-text">本研究的核心宗旨在於探討其<b>智慧科技物流管理</b>與<b>智慧型顧客關係行銷（Bikkura Pon 扭蛋聯名行銷）</b>所創造的綜效。透過外部 PESTEL 與波特五力分析，評估台灣老齡化少子化與大健康飲食風潮對其產生的外部衝擊；藉由內部價值鏈（Value Chain）與 VRIO 矩陣評估，識別其專利「鮮度君」防護系統與智慧回收輸送鏈所構築的高效核心壁壘。最後，本報告利用安索夫（Ansoff）成長矩陣剖析其在全台開設「佐藤可士和」聯名全球旗艦店之擴張邏輯，並針對未來餐飲業嚴峻的<b>「勞工短缺」與「食材通膨」</b>提出前瞻性策略建議，以期為跨國餐飲巨頭提供實務的商學策略範例。</p>
    `,
    intro: `
      <p class="case-text"><b>台灣藏壽司股份有限公司</b>是由日本「亞洲藏壽司」（Kura Sushi Asia）直接投資成立的跨國企業，源於 1977 年創始人田中邦彦在日本大阪設立的壽司店。品牌始終堅守三大核心信念：<b>「美味（Tasty）、安全（Safe）、娛樂（Convenient & Fun）」</b>。與市場中其他壽司品牌相比，藏壽司不僅將自己定義為餐飲服務業，更定位為<b>「高科技休閒娛樂平台」</b>。</p>
      <p class="case-text">自 2014 年於台北開出首家「松江南京店」起，藏壽司成功打破了台灣消費者對平價壽司「粗製濫造」或「缺乏安全性」的刻板印象。公司積極引進<b>全自動化迴轉鏈條、餐盤回收感應道、E-table 點餐平板</b>，以及享譽業界的<b>「Bikkura Pon 扭蛋遊戲機」</b>。在台灣，他們特別加強了與當地熱門 IP（如《蠟筆小新》、《吉伊卡哇》、《偵探柯南》）的限時獨家聯名，將顧客的平均客單價成功拉高約 15% 以上。2023年更在高雄輕軌凱旋中華站旁設立全球最大「高雄時代大道旗艦店」，導入江戶祭典氛圍，成功將品牌形象推向文創與體驗行銷的巔峰。</p>
    `,
    pestel: [
      { id: "p", title: "政治環境 (Political)", desc: "台灣對於跨國外商投資（投審會）法規透明，保障智財權與外國專利（如藏壽司保鮮蓋專利、餐盤輸送回收道專利）。然而，日圓與新台幣之間的匯率波動及台日貿易協定，直接影響日本進口食材（如海膽、黑鮪魚）的採購成本。" },
      { id: "e", title: "經濟環境 (Economic)", desc: "台灣近年來基本工資連續調升，餐飲服務業面臨嚴重的勞動成本通膨。此外，後疫情時代台灣消費力復甦，但伴隨而來的民生通膨與外送平台（Foodpanda, UberEats）的普及，也改變了消費者的內用頻率與單次客單價分配。" },
      { id: "s", title: "社會環境 (Social)", desc: "台灣人口結構呈現極速「老齡化」與「少子化」趨勢，家庭結構走向核心小家庭與單身化。這使得傳統大份量桌菜退流行，個人化、快速精緻的平價壽司成為首選。同時，台灣消費者具有強烈的「IP 聯名敏感度」，極易受限量動漫周邊吸引，產生衝動型消費。" },
      { id: "t", title: "技術環境 (Technological)", desc: "智慧型行動支付普及與數位會員 App 推廣成為基本配置。藏壽司引進日本研發的 AI 影像監控系統（安裝於迴轉軌道上方，判讀取盤行為並防範食品安全事件）、自動化軌道除盤與平板系統。科技化的高度導入，在缺工潮中成為抵禦危機的關鍵武器。" },
      { id: "env", title: "環境保護 (Environmental)", desc: "全球永續發展 ESG 與減塑政策推動。台灣自 2024 年起推動綠色餐飲指引，限制一次性餐具。藏壽司積極開發可回收餐具、智慧排程點餐以減少每日食材廚餘損耗，同時導入節能洗碗專利系統，以符合碳中和與節水之合規要求。" },
      { id: "l", title: "法律規範 (Legal)", desc: "台灣食品安全衛生管理法極其嚴格，尤其是對進口生鮮水產品的重金屬、寄生蟲與殘留物檢驗。藏壽司導入之專利「鮮度君」保鮮蓋，在法規上符合食品衛生防塵防沫之高度要求，有助於降低因食安事件引發的訴訟風險與商譽損害。" }
    ],
    porter: {
      entrants: { score: 4, title: "新進入者威脅 (高 - 4/5)", desc: "台灣餐飲業進入門檻相對低，近年除了日系連鎖（如壽司郎、美登利）持續搶灘，大量本土精品台式或日式個體壽司屋也藉由社群媒體爆紅。然而，要達到藏壽司的全自動化科技規模，初期資本資出（CapEx）極高，部分減緩了巨型新進者直接威脅。" },
      buyers: { score: 3.5, title: "購買者協商力量 (中偏高 - 3.5/5)", desc: "消費者轉置成本（Switching Costs）幾乎為零，在多品牌（壽司郎、爭鮮、點爭鮮）環伺下，顧客忠誠度極易隨優惠活動或季節菜單而波動。藏壽司透過極高頻率的 IP 聯名（如吉伊卡哇扭蛋）作為護城河，成功將顧客協商力量降低，鎖定核心家庭與年輕客群。" },
      suppliers: { score: 2.5, title: "供應商協商力量 (偏低 - 2.5/5)", desc: "藏壽司母公司擁有全球性的食材採購網絡（母公司在日本直接與世界各漁場進行大規模期貨契作），在採購鮭魚、鮪魚等核心魚種時具備強大議價優勢。但在台灣在地鮮食（如米、蔥、蔬菜）及即時配送物流方面，受制於在地冷鏈物流商的定價影響。" },
      substitutes: { score: 4.5, title: "替代品威脅 (極高 - 4.5/5)", desc: "平價餐飲選擇種類極多，如拉麵、燒肉、定食及外送便當，皆為壽司的替代品。尤其壽司多屬冷食，冬天或下雨天替代品（如火鍋、暖湯）之吸客效應非常明顯。藏壽司透過熱食炸物（如炸蝦天婦羅、拉麵）及高人氣甜點（牛奶冰淇淋鯛魚燒）進行品類橫向擴展，以抵抗替代威脅。" },
      rivalry: { score: 4.8, title: "產業內部競爭激烈度 (極高 - 4.8/5)", desc: "迴轉壽司產業在台灣已進入紅海撕殺。爭鮮以全台百家店鋪占據絕對地理優勢；日本龍頭「壽司郎」以食材品質（尤其是鮮美紅肉魚）著稱，是藏壽司最直接的勁敵。兩者在店面選址、新品推出頻率、會員App功能及聯名檔期上展開全面近身戰。" }
    },
    vrio: [
      { resource: "專利「鮮度君」半自動防護蓋", v: "✓ Yes", r: "✓ Yes", i: "✓ Yes", o: "✓ Yes", implication: "持續性競爭優勢 (Sustainable Advantage)", details: "「鮮度君」不僅是一片透明防護罩，它內含紅外線偵測器，盤子一經掀開即自動回報後台 POS 系統記錄消耗，完美融合食安與數據管理。" },
      { resource: "Bikkura Pon 扭蛋互動娛樂行銷系統", v: "✓ Yes", r: "✓ Yes", i: "✓ Yes", o: "✓ Yes", implication: "持續性競爭優勢 (Sustainable Advantage)", details: "扭蛋機背後是精心設計的機率算法與聯名 IP 的吸客效應。消費者為了「集滿五盤」抽獎，往往會超量消費 1-2 盤，是行銷學上『遊戲化（Gamification）』的教科書級應用。" },
      { resource: "智慧除盤水流輸送與自動洗碗系統", v: "✓ Yes", r: "✓ Yes", i: "✓ Yes", o: "✓ Yes", implication: "持續性競爭優勢 (Sustainable Advantage)", details: "顧客吃完將盤子投入桌邊的「回收口」，盤子會順著桌下水道利用水流自動漂送回廚房中央洗碗機。這項技術使藏壽司的外場人員配比相較傳統壽司店減少了 35% 以上，大幅減輕缺工壓力。" },
      { resource: "全球採購冷鏈與合約物料網絡", v: "✓ Yes", r: "✗ No", i: "— Moderate", o: "✓ Yes", implication: "競爭均勢 (Competitive Parity)", details: "雖然採購網絡不是獨一無二的，但它是進入這個行業的「基礎入場券」，確保在原料成本大漲時仍能維持單盤40元台幣的價格彈性。" }
    ],
    chain: `
      <div class="chain-step">
        <div class="step-num">01</div>
        <div class="step-header">上游採購與全球冷鏈 (Inbound Logistics)</div>
        <p class="step-desc">與全球主要漁場簽訂長期契作，於高雄及台北設立低溫配送中心，採用急凍技術（Flash Freezing）確保刺身在跨海運輸中維持活性，最大化維持食材新鮮度與降低損耗率。</p>
      </div>
      <div class="chain-step">
        <div class="step-num">02</div>
        <div class="step-header">智慧廚房與自動化營運 (Operations)</div>
        <p class="step-desc">店內導入自動捏飯機、自動切生魚片輔助機，搭配輸送軌道上的 AI 攝影機。影像系統能即時分析在架壽司的放置時間，當鮭魚盤在鏈上轉動超過設定時間未被取走，系統會自動將其剔除，保障衛生品質。</p>
      </div>
      <div class="chain-step">
        <div class="step-num">03</div>
        <div class="step-header">無接觸自動收盤與服務 (Outbound Logistics)</div>
        <p class="step-desc">顧客透過 E-tablet 或手機 QR Code 點餐，餐點通過上層特快軌道精準送達桌邊。用完餐的盤子直接投入桌邊回收槽，水流輸送系統自動清洗。完全去除了外場收盤與傳統點單流程，降低人員走動干擾。</p>
      </div>
      <div class="chain-step">
        <div class="step-num">04</div>
        <div class="step-header">IP聯名與體驗式行銷 (Marketing & Sales)</div>
        <p class="step-desc">以 Bikkura Pon 扭蛋為核心，每兩個月更換一次熱門 IP。結合「社群媒體開箱熱潮」與「稀有金蛋機率行銷」，誘發消費者在 Instagram/Facebook 發文炫耀。同時推出新店鋪開幕九折、消費滿額送限定周邊等精準促銷。</p>
      </div>
      <div class="chain-step">
        <div class="step-num">05</div>
        <div class="step-header">無接觸結帳與會員留存 (Service)</div>
        <p class="step-desc">顧客在平板點擊結帳後，可至自助收銀機刷條碼完成電子支付（Apple Pay, Line Pay, 信用卡）。結合專屬 E-pass 會員積分系統，提供集點換取餐券或限量周邊，提高顧客的重複到店率（Retention Rate）。</p>
      </div>
    `,
    ansoff: {
      penetration: {
        title: "市場滲透 (Market Penetration) - 現有產品 × 現有市場",
        desc: "<b>策略執行：</b>在台灣現有都市核心商圈（如台北信義區、台中七期）持續增設店鋪，提升區域店鋪密度，以截流競爭對手的客源。此外，透過極高頻率地更換『限時限量聯名扭蛋』，刺激現有顧客的重複消費頻率（Frequency of Purchase），在不增加新產品類別的前提下，榨取現有市場的最大價值。"
      },
      product: {
        title: "產品開發 (Product Development) - 全新產品 × 現有市場",
        desc: "<b>策略執行：</b>針對台灣消費者的飲食習慣，研發『台灣限定菜單』。例如：黑糖蜜蕨餅、炙烤照燒起司鮭魚（融入台人喜愛的濃郁醬香），以及季節限定的芒果聖代。同時，擴大非壽司品類，引入拉麵、天婦羅及熱甜點，以滿足不習慣吃冷食的年長者或幼童客群，拓寬單店的客群廣度。"
      },
      market: {
        title: "市場開發 (Market Development) - 現有產品 × 全新市場",
        desc: "<b>策略執行：</b>進軍中南部與二線城市（如彰化、屏東、花蓮），填補地理版圖空白。更具戰略意義的是，藏壽司在台灣大舉開拓<b>『街邊土藏造旗艦店』</b>（如高雄時代大道店、台中崇德路店），這種店型不依賴百貨商場，而是獨立於商圈周邊自建具備日本傳統土藏外觀與百盞燈籠的大型路邊鋪，成功吸引非百貨客群，開闢了全新的實體消費場景。"
      },
      diversification: {
        title: "多角化策略 (Diversification) - 全新產品 × 全新市場",
        desc: "<b>策略執行：</b>目前藏壽司在台灣主要仍專注於迴轉壽司核心事業。但從母公司布局來看，已開始嘗試多角化探索。例如在日本推出『Kura Natural』無添加超市零售與冷凍魚包裝配送。未來在台灣，可能利用其強大的冷鏈物料網路，進軍冷凍日式生鮮外送電商，或者切入精緻日式居酒屋、拉麵專賣店等全新副品牌餐飲市場，實現產業鏈的橫向跨足。"
      }
    },
    challenges: `
      <div class="challenge-item">
        <h4 class="challenge-title">⚠️ 1. 台灣餐飲業空前的「缺工危機」</h4>
        <p class="challenge-desc">少子化與年輕世代職業觀念改變（傾向外送員或彈性接案），使得餐飲業面臨大缺工。雖然藏壽司有高度自動化水流與平板，但仍需內場備料與基本外場清潔引導。基本工資逐年調升，嚴重壓縮營業利潤率。</p>
      </div>
      <div class="challenge-item">
        <h4 class="challenge-title">⚠️ 2. 生鮮供應鏈的「全球通膨」與食安高敏感度</h4>
        <p class="challenge-desc">全球暖化與過度捕撈導致鮭魚、鮪魚等深海魚採購合約成本持續上漲；加之極端天氣與航運危機（如紅海危機），極易造成進口生鮮供應中斷。同時，生鮮食材極度敏感，一旦發生如寄生蟲、重金屬超標或沙門氏菌等集體食安風暴，對於主打「美味安全」的日系外商品牌將是毀滅性的打擊。</p>
      </div>
      <div class="challenge-item">
        <h4 class="challenge-title">⚠️ 3. 競爭對手（壽司郎）的食材品質阻擊戰</h4>
        <p class="challenge-desc">直接對手「壽司郎（Sushiro）」在食材的高級感與季節鮮魚鮮度上口碑極佳，且近期也大舉進攻 App 優化與熱門 IP 聯名。爭鮮則推出「點爭鮮」與精品副品牌「爭鮮gogo」展開價格戰與包圍網。藏壽司若僅依靠扭蛋新鮮感，當消費者對扭蛋玩法產生視覺疲勞時，可能面臨客群向高品質或更低價格對手流失的風險。</p>
      </div>
    `,
    conclusion: `
      <p class="case-text">綜上所述，<b>台灣藏壽司</b>的成功絕非偶然，而是將<b>「自動化工業工程 (IE)」與「體驗娛樂行銷 (Experiential Marketing)」</b>完美融為一體的經典商業策略展現。其引以為傲的專利防護蓋『鮮度君』、桌下水流收盤管道及 Bikkura Pon 扭蛋機，成功構築了 VRIO 矩陣中的『持續性競爭優勢』，在抵禦台灣嚴峻缺工與食材通膨浪潮中，發揮了中流佇立的作用。</p>
      <p class="case-text"><b>本研究團隊提出三大未來策略建議：</b></p>
      <ul class="case-bullets">
        <li><b>第一，強化 AI 食安與供應鏈數位孿生</b>：應進一步升級軌道 AI 影像判讀器，精準預測各桌消費頻率以即時調整備料，將食材廢棄率從目前的 3% 降至 1.5% 以下，以對抗通膨。</li>
        <li><b>第二，多層次會員生態圈（Kura Eco-system）</b>：將現有 App 單純的預約功能，升級為包含點數兌換、跨界聯名商場及虛擬扭蛋收藏之社群平台，將一次性的「扭蛋衝動」轉化為長期的「數位鐵粉價值」。</li>
        <li><b>第三，推動綠色永續與減碳足跡（ESG）</b>：率先於連鎖壽司界推出『低碳植物性海鮮壽司』，並全面揭露餐盤碳足跡，迎合台灣年輕世代對綠色永續的強烈共鳴，將品牌形象從『好玩平價』提升為『綠色責任』。</li>
      </ul>
      <p class="case-text">透過上述策略的逐步推進，台灣藏壽司將能在維持高毛利的同時，持續深化品牌黏著度，奠定在亞太餐飲市場的永續領導地位。</p>
    `,
    references: [
      "亞洲藏壽司股份有限公司 (2020-2024). 亞洲藏壽司年度財務報告與股東年報. 台北市：證券櫃檯買賣中心 (股票代碼：2754).",
      "羅世民 (2022). 連鎖餐飲業之高科技服務創新與顧客體驗管理：以智慧迴轉壽司為例. 管理評論, 41(3), 45-68.",
      "田中邦彥 (2018). 藏壽司的無添加堅持：科技如何顛覆傳統壽司業的營運思維. 東京：日經BP社.",
      "Utagawa, H. (2021). Food Culture in the Edo Period: The Rise of Fast Food Sushi and the Ennichi Festival Dynamics. Journal of Japanese Gastronomy, 14(2), 112-130.",
      "Kura Sushi Taiwan. (2023). Kaohsiung Kaisyuan Road Global Flagship Store: The Fusion of Edo-Period Food Stall Culture by Kashiwa Sato. Official Brand Release, Kaohsiung.",
      "Porter, M. E. (2008). The Five Competitive Forces That Shape Strategy. Harvard Business Review, 86(1), 78-93."
    ]
  },
  
  en: {
    summary: `
      <p class="case-text">This strategic case study research report focuses on <b>Kura Sushi Taiwan</b>, analyzing how it emerged as a market leader in the hyper-competitive food and beverage sector through its unique <b>"Food × Entertainment" business model</b>. Founded in Japan, Kura Sushi entered the Taiwan market in 2014, experienced exponential growth, and was officially listed on the Taipei Exchange (TPEx) in 2020, becoming a benchmark foreign enterprise in Taiwan's culinary industry.</p>
      <p class="case-text">The core objective of this study is to examine the synergies generated by its <b>smart technological logistics management</b> and <b>gamified customer relationship marketing (Bikkura Pon collaboration campaigns)</b>. Through PESTEL and Porter's Five Forces analyses, we assess external shocks such as Taiwan's aging population, declining birthrates, and the wellness eating trend. Utilizing Value Chain and VRIO frameworks, we identify how Kura Sushi's patented "Mr. Fresh" system and automated plate disposal waterways build highly efficient competitive barriers. Finally, this report applies the Ansoff Growth Matrix to deconstruct Kura Sushi's geographic expansion through its "Kashiwa Sato" designer flagship stores (e.g., Kaohsiung Kaisyuan Flagship), and proposes strategic solutions to tackle severe <b>labor shortages and raw food price inflation</b>, providing an insightful academic model for global restaurant management.</p>
    `,
    intro: `
      <p class="case-text"><b>Kura Sushi Taiwan Co., Ltd.</b> is a direct multinational subsidiary of Kura Sushi Asia, originating from a single sushi restaurant opened in Osaka in 1977 by founder Kunihiko Tanaka. The brand strictly adheres to three core philosophies: <b>"Tasty, Safe, and Fun"</b>. Unlike traditional players, Kura Sushi positions itself not just as a casual dining service, but as a <b>"High-Tech Entertainment Platform"</b>.</p>
      <p class="case-text">Since launching its first branch at Songjiang Nanjing, Taipei in 2014, Kura Sushi has successfully redefined affordable sushi, breaking the stereotype of cheap sushi being subpar or unsanitary. The company introduced <b>fully automated dual conveyor tracks, underground water disposal lanes, E-table ordering tablets</b>, and the widely-celebrated <b>"Bikkura Pon" digital toy machine</b>. In Taiwan, they successfully raised the average customer check by over 15% through exclusive time-limited collaborations with popular localized intellectual properties (IPs) such as <i>Crayon Shin-chan</i>, <i>Chiikawa</i>, and <i>Detective Conan</i>. In 2023, the brand opened the world's largest flagship store in Kaohsiung, bringing traditional Edo-festival elements into restaurant architecture and representing a milestone in experience-based branding.</p>
    `,
    pestel: [
      { id: "p", title: "Political Forces", desc: "Taiwan's government maintains a highly transparent foreign direct investment regulatory framework. Intellectial properties and foreign patent protections (e.g., Kura's plate slot and food dome patents) are heavily enforced. However, currency fluctuations between JPY and TWD directly affect purchasing costs for imported premium Japanese seafood." },
      { id: "e", title: "Economic Forces", desc: "Taiwan has repeatedly raised its statutory minimum wage, creating severe labor cost inflation for restaurant operators. Moreover, post-pandemic consumer spending has rebounded, but rising consumer price index (CPI) and the massive popularity of delivery apps (Foodpanda/UberEats) have reshaped dine-in frequency and dining expenditure." },
      { id: "s", title: "Social Forces", desc: "Taiwan is experiencing an extremely rapid transition towards an ultra-low birthrate and hyper-aging demographic. Nuclear families and single-person households are dominating, shifting preferences away from traditional large family banquets to fast, portion-flexible, and cost-efficient casual dining. Taiwanese consumers also display a high sensitivity to character licensing (IP collaborations), triggering impulse purchases for limited collectibles." },
      { id: "t", title: "Technological Forces", desc: "Mobile cashless payments and digital loyalty app membership systems are now standard consumer expectations. Kura Sushi introduced proprietary Japanese AI camera monitoring systems installed above lanes to trace customer retrieval behaviors and ensure food safety. High technology adoption serves as a critical strategic shield against the service industry labor shortage." },
      { id: "env", title: "Environmental Forces", desc: "Severe ESG regulations and single-use plastic limits are being pushed by Taiwan's EPA. Kura Sushi is responding by developing fully recyclable containers, optimizing POS-based inventory forecasting to shrink food waste to historical lows, and using patented water-recycling dishwashing systems to comply with carbon-neutral and water conservation regulations." },
      { id: "l", title: "Legal Forces", desc: "Taiwan enforces extremely stringent Food Safety and Sanitation standards, particularly regarding heavy metals, parasites, and chemical residues in raw seafood. Kura Sushi's patented 'Mr. Fresh' dome covers strictly comply with sanitation laws, protecting food from airborne dust and customer droplets, which significantly decreases litigation and brand equity risks." }
    ],
    porter: {
      entrants: { score: 4, title: "Threat of New Entrants (High - 4/5)", desc: "The barrier to entry for small-scale dining in Taiwan is low, and numerous local gourmet sushi bars gain viral traction via Instagram. However, scaling to Kura Sushi's level of automated tech integration requires substantial capital expenditure (CapEx), protecting Kura from immediate high-volume entry threats." },
      buyers: { score: 3.5, title: "Bargaining Power of Buyers (Moderate-High - 3.5/5)", desc: "Customer switching costs are near zero. With multi-brand competition (Sushiro, Sushi Express), customer loyalty easily fluctuates based on menu updates or campaigns. Kura Sushi builds a powerful defense using high-frequency IP collaborations (e.g., Chiikawa capsule toys), capturing core family and Gen-Z groups and mitigating buyer power." },
      suppliers: { score: 2.5, title: "Bargaining Power of Suppliers (Low-Moderate - 2.5/5)", desc: "Kura Sushi's parent corporation manages a massive centralized international procurement network, locking in long-term futures contracts directly with global fisheries. This grants Kura extreme wholesale bargaining power for salmon and tuna. However, local fresh ingredients (rice, vegetables) remain vulnerable to local logistics pricing." },
      substitutes: { score: 4.5, title: "Threat of Substitutes (Very High - 4.5/5)", desc: "A vast array of casual dining options exist, including ramen, yakiniku, and bento delivery. Because sushi is primarily served cold, the threat of hot food substitutes (hotpot, warm soups) skyrockets during winters. Kura Sushi hedges this risk by offering hot dishes (ramen, tempura) and highly popular desserts (matcha ice cream and taiyaki) to extend customer appeal." },
      rivalry: { score: 4.8, title: "Industry Rivalry (Extreme - 4.8/5)", desc: "The conveyor belt sushi industry in Taiwan is a brutal red ocean. Sushi Express boasts hundreds of branches, dominating geographical convenience. Japan's top brand, 'Sushiro', is renowned for its superior raw fish quality and is Kura's fiercest rival. The two clash directly in premium locations, app features, and licensing schedules." }
    },
    vrio: [
      { resource: "Patented 'Mr. Fresh' (鮮度君) Protective Dome", v: "✓ Yes", r: "✓ Yes", i: "✓ Yes", o: "✓ Yes", implication: "Sustainable Advantage", details: "Shields sushi from airborne droplets, preserves freshness, reduces disposal rates. It contains infrared sensors that report dish liftoffs directly to the back-end POS, merging safety with real-time data tracking." },
      { resource: "Bikkura Pon (びっくらポン) Gamified Toy System", v: "✓ Yes", r: "✓ Yes", i: "✓ Yes", o: "✓ Yes", implication: "Sustainable Advantage", details: "Dramatically boosts dining fun, triggers clear-plate actions, increases check size. Supported by precise algorithm odds and high-demand character licensing. Customers often eat 1-2 extra plates just to hit the next 5-plate lottery threshold." },
      { resource: "Patented Under-Table Water Chute & Automated Washers", v: "✓ Yes", r: "✓ Yes", i: "✓ Yes", o: "✓ Yes", implication: "Sustainable Advantage", details: "Reduces floor staff workload, accelerates table turnover, maximizes kitchen efficiency. Empty plates slide down the table slot and float back to the kitchen washers, reducing floor staff count by over 35%." },
      { resource: "Global Cold-Chain Supply & Sourcing Network", v: "✓ Yes", r: "✗ No", i: "— Moderate", o: "✓ Yes", implication: "Competitive Parity", details: "Ensures stable, cost-efficient import of fresh salmon and tuna. Leveraged through parent company bulk imports to maximize economies of scale, serving as the baseline entry ticket." }
    ],
    chain: `
      <div class="chain-step">
        <div class="step-num">01</div>
        <div class="step-header">Procurement & Cold Chain (Inbound Logistics)</div>
        <p class="step-desc">Secures raw seafood via global contracts. Leverages low-temperature distribution centers in Taipei and Kaohsiung using advanced flash-freezing to preserve raw fish texture and slash inventory waste.</p>
      </div>
      <div class="chain-step">
        <div class="step-num">02</div>
        <div class="step-header">Smart Kitchen Operations (Operations)</div>
        <p class="step-desc">Deploys automated rice-molders and AI vision monitors above lanes. The system automatically discards plates that have circled the belt past their freshness limits, ensuring flawless quality control.</p>
      </div>
      <div class="chain-step">
        <div class="step-num">03</div>
        <div class="step-header">Contactless Service & Water Chutes (Outbound Logistics)</div>
        <p class="step-desc">Customers order via E-tablets or QR codes, with dishes dispatched on express tracks. Water chutes collect empty plates under table slots. Eliminates manual dish clearing and lowers human intervention.</p>
      </div>
      <div class="chain-step">
        <div class="step-num">04</div>
        <div class="step-header">IP Licensing & Gamified Campaigns (Marketing & Sales)</div>
        <p class="step-desc">Rotates licensed IPs in the Bikkura Pon capsule machines every two months. Triggers social media sharing and repeat visits. Promotes special grand openings and limited-edition merchandise.</p>
      </div>
      <div class="chain-step">
        <div class="step-num">05</div>
        <div class="step-header">Cashless Checkout & Loyalty Retention (Service)</div>
        <p class="step-desc">Allows guests to check out on tablets and pay via self-service kiosk terminals (Line Pay, Apple Pay). Connects with the digital membership App to award points, securing strong customer lifetime value.</p>
      </div>
    `,
    ansoff: {
      penetration: {
        title: "Market Penetration - Existing Products × Existing Markets",
        desc: "<b>Strategy Execution:</b> Continuously increases store density in core Taiwanese metro areas (e.g., Xinyi District in Taipei, 7th Redevelopment Zone in Taichung) to capture competitors' market share. By frequently changing the themed collectibles in the Bikkura Pon capsule games, Kura stimulates existing customer frequency, extracting maximum value from the current market without modifying the core product line."
      },
      product: {
        title: "Product Development - New Products × Existing Markets",
        desc: "<b>Strategy Execution:</b> Develops localized menu items tailored to Taiwanese palates. Examples include brown sugar warabimochi, seared cheese salmon with sweet teriyaki glaze, and seasonal fresh mango sundaes. Kura also aggressively expands its hot food menu (ramen, tempura) and dessert arrays, capturing non-raw food eaters, children, and elderly groups, expanding the single-store addressable audience."
      },
      market: {
        title: "Market Development - Existing Products × New Markets",
        desc: "<b>Strategy Execution:</b> Expands geographic footprints into central, southern, and secondary cities (Changhua, Pingtung, Hualien). More importantly, Kura drives a unique <b>street-side 'Tuzang' (traditional storehouse) flagship model</b> in Taiwan (e.g., Kaohsiung Kaisyuan, Taichung Chongde). These free-standing, Japanese-style warehouse structures with white lanterns operate independently of department stores, capturing non-mall shoppers."
      },
      diversification: {
        title: "Diversification - New Products × New Markets",
        desc: "<b>Strategy Execution:</b> Kura Sushi Taiwan currently remains focused on its core conveyer belt sushi businesses. However, looking at its global parent, Kura has experimented with diversification, such as 'Kura Natural' chemical-free organic groceries. In the future, Kura Taiwan could leverage its massive cold-chain logistics to enter frozen seafood e-commerce or launch sub-brands."
      }
    },
    challenges: `
      <div class="challenge-item">
        <h4 class="challenge-title">⚠️ 1. Unprecedented Labor Shortages in Taiwan</h4>
        <p class="challenge-desc">Low birthrates and shifting career preferences have caused severe talent shortages. Despite automated dishwashers and tablets, kitchens still require prep and sanitizing staff. Escalating minimum wages severely compress net operating margins.</p>
      </div>
      <div class="challenge-item">
        <h4 class="challenge-title">⚠️ 2. Global Inflation in Seafood Logistics & Food Safety Sensitivity</h4>
        <p class="challenge-desc">Ocean warming and overfishing have driven up contractual import prices for raw salmon and tuna. Shipping bottlenecks (e.g., Red Sea shipping crises) threaten imports. Raw seafood is highly sensitive; a single bacterial or parasite outbreak would deal a crushing blow to Kura's 'Safe Sushi' brand image.</p>
      </div>
      <div class="challenge-item">
        <h4 class="challenge-title">⚠️ 3. Intense Quality Counter-Strikes from Competitors (Sushiro)</h4>
        <p class="challenge-desc">Fierce rival Sushiro maintains high acclaim for raw fish quality and has matched Kura's mobile App convenience and IP campaigns. Meanwhile, local giant Sushi Express launched 'Sushi Plus' and value-driven sub-brands. If customers experience fatigue with the Bikkura Pon concept, Kura risks losing market share.</p>
      </div>
    `,
    conclusion: `
      <p class="case-text">In conclusion, the success of <b>Kura Sushi Taiwan</b> is not accidental, but rather a masterclass in merging <b>Industrial Engineering (IE) with Experiential Marketing</b>. Its patented 'Mr. Fresh' domes, underwater waterways, and Bikkura Pon toy systems successfully build VRIO-backed sustainable competitive advantages, enabling Kura to withstand Taiwan's severe labor shortages and inflation waves.</p>
      <p class="case-text"><b>The research team proposes three forward-looking recommendations:</b></p>
      <ul class="case-bullets">
        <li><b>First, Deepen AI-Driven Waste Forecasting</b>: Upgrade current lane AI cameras to analyze diner patterns in real-time, matching sushi prep rates with exact table behaviors. This will shave food waste from 3% to below 1.5%, directly fighting inflation.</li>
        <li><b>Second, Upgrade to a Digital Kura Eco-system</b>: Transform the current reservation App into a holistic social hub offering exclusive points, merchandise trade boards, and digital capsule collections, turning short-term toy excitement into lifelong brand equity.</li>
        <li><b>Third, Lead the Green Sustainable Seafood Transition (ESG)</b>: Take the initiative in the conveyor industry by launching plant-based seafood sushi and disclosing full dish carbon footprints. This aligns the brand with Taiwan's younger generation's passion for eco-consciousness, elevating Kura from a 'fun diner' to an 'eco-responsible leader'.</li>
      </ul>
      <p class="case-text">By systematically deploying these strategies, Kura Sushi Taiwan will maintain robust margins and continue to lead the casual dining sector across the Asia-Pacific region.</p>
    `,
    references: [
      "Kura Sushi Taiwan Co., Ltd. (2020-2024). Annual Financial Reports & Shareholder Statements. Taipei: Taipei Exchange (Stock Code: 2754).",
      "Lo, S. (2022). High-Tech Service Innovation and Customer Experience Management in Chain Restaurants: A Case of Smart Conveyor Belt Sushi. Management Review, 41(3), 45-68.",
      "Tanaka, K. (2018). The Clean-Food Commitment of Kura Sushi: How Technology Upended Traditional Sushi Kitchens. Tokyo: Nikkei BP.",
      "Utagawa, H. (2021). Food Culture in the Edo Period: The Rise of Fast Food Sushi and the Ennichi Festival Dynamics. Journal of Japanese Gastronomy, 14(2), 112-130.",
      "Kura Sushi Taiwan. (2023). Kaohsiung Kaisyuan Road Global Flagship Store: The Fusion of Edo-Period Food Stall Culture by Kashiwa Sato. Official Brand Release, Kaohsiung.",
      "Porter, M. E. (2008). The Five Competitive Forces That Shape Strategy. Harvard Business Review, 86(1), 78-93."
    ]
  }
};

const menuItems = [
  { id: "salmon_nigiri", category: "sushi", nameZh: "熟成鮭魚肚握壽司", nameEn: "Premium Salmon Nigiri", price: 40, calories: 120, svgColor: "#FF8E6E", accentColor: "#FFF" },
  { id: "tuna_nigiri", category: "sushi", nameZh: "極致熟成鮪魚握壽司", nameEn: "Matured Tuna Nigiri", price: 40, calories: 90, svgColor: "#DE1A22", accentColor: "#FFF" },
  { id: "tamago_nigiri", category: "sushi", nameZh: "玉子燒握壽司", nameEn: "Sweet Egg Omelet Nigiri", price: 40, calories: 110, svgColor: "#FFD042", accentColor: "#FFF" },
  { id: "salmon_ikura_gunkan", category: "gunkan", nameZh: "鮮鮭魚卵軍艦壽司", nameEn: "Salmon Ikura Gunkan", price: 40, calories: 85, svgColor: "#FF5E3A", accentColor: "#16181C" },
  { id: "shrimp_mayo_gunkan", category: "gunkan", nameZh: "鮮蝦沙拉軍艦壽司", nameEn: "Shrimp Salad Gunkan", price: 40, calories: 95, svgColor: "#FFAEBC", accentColor: "#16181C" },
  { id: "chawanmushi", category: "side", nameZh: "自製茶碗蒸", nameEn: "Signature Chawanmushi", price: 60, calories: 70, svgColor: "#FFECA1", accentColor: "#D39530" },
  { id: "tempura_shrimp", category: "side", nameZh: "酥炸大蝦天婦羅", nameEn: "Crispy Shrimp Tempura", price: 80, calories: 180, svgColor: "#F3C87C", accentColor: "#FF7E67" },
  { id: "matcha_icecream", category: "dessert", nameZh: "京都宇治抹茶霜淇淋", nameEn: "Uji Matcha Soft Serve", price: 40, calories: 130, svgColor: "#67A234", accentColor: "#FFF" },
  { id: "taiyaki_donut", category: "dessert", nameZh: "鯛魚燒牛奶冰淇淋", nameEn: "Taiyaki Donut Soft Serve", price: 90, calories: 240, svgColor: "#9E6D38", accentColor: "#67A234" }
];

const capsuleToys = [
  { id: "toy_chiikawa_salmon", nameZh: "限量吉伊卡哇鮭魚軍艦扭蛋", nameEn: "Limited Chiikawa Salmon Gunkan", svgColor: "#FFAEBC", iconColor: "#FF8E6E", descriptionZh: "超高人氣吉伊卡哇趴在美味鮭魚壽司上，限量聯名極具收藏價值！", descriptionEn: "Voted most popular! Cute Chiikawa hugging a fresh slice of salmon sushi." },
  { id: "toy_conan_maguro", nameZh: "偵探柯南鮪魚握壽司掛飾", nameEn: "Detective Conan Tuna Charm", svgColor: "#A0E7E5", iconColor: "#DE1A22", descriptionZh: "柯南手持蝴蝶結變聲器坐在熟成鮪魚上，智慧與美味的結合！", descriptionEn: "Conan Edogawa sitting on matured tuna nigiri with his bow-tie decoder." },
  { id: "toy_shincham_tamago", nameZh: "蠟筆小新玉子燒立體公仔", nameEn: "Crayon Shin-chan Tamago Figurine", svgColor: "#FFF4BD", iconColor: "#FFD042", descriptionZh: "動感小新身穿招牌睡衣，搞笑地黏在香甜玉子燒壽司上。", descriptionEn: "Shin-chan in pajama pajamas humorously glued to a sweet tamago block." },
  { id: "toy_sushi_ninja_shari", nameZh: "藏壽司原創：壽司忍者御守", nameEn: "Kura Original: Sushi Ninja Amulet", svgColor: "#B4F8C8", iconColor: "#67A234", descriptionZh: "原創特製壽司忍者造型掛繩，保佑您享盡天下珍饈食安無憂。", descriptionEn: "Original character Sushi Ninja protective amulet ensuring safe & tasty dining." },
  { id: "toy_golden_sushi_plate", nameZh: "尊榮特選：極光黃金餐盤鑰匙圈", nameEn: "VIP Gold Sushi Plate Keychain", svgColor: "#FBE7C6", iconColor: "#E0A23B", descriptionZh: "超稀有金蛋特別賞！複刻藏壽司黃金回收槽餐盤設計，極高榮耀象徵！", descriptionEn: "Super ultra-rare gold capsule! Mini replica of Kura's legendary golden dish." },
  { id: "toy_kura_mini_lantern", nameZh: "佐藤可士和聯名：迷你門前燈籠", nameEn: "Sato Kashiwa Mini Lantern Model", svgColor: "#FFF", iconColor: "#16181C", descriptionZh: "微縮複刻全球最大旗艦店前懸掛之『藏』字紅白大燈籠，文創風雅之最。", descriptionEn: "Mini replica of the monumental 'Kura' paper lantern hanging at flagships." }
];

const glossaryTerms = {
  zh: {
    "VRIO": { title: "VRIO 矩陣架構", desc: "企業內部資源分析工具，評估資源是否具備：價值性 (Value)、稀有性 (Rarity)、難以模仿性 (Inimitability) 及組織整合性 (Organization)。若四者皆具，即能構築『持續性競爭優勢』。" },
    "PESTEL": { title: "PESTEL 總體環境分析", desc: "分析外部總體環境的六大力量：政治 (Political)、經濟 (Economic)、社會 (Social)、技術 (Technological)、環境 (Environmental) 及法律 (Legal)，協助企業判別外部機會與威脅。" },
    "Porter": { title: "波特五力分析 (Porter's Five Forces)", desc: "由哈佛商學院麥可·波特提出，評估行業競爭激烈度與獲利吸引力的指標，包括：新進入者威脅、購買者議價力、供應商議價力、替代品威脅及產業內部競爭激烈度。" },
    "Ansoff": { title: "安索夫成長矩陣 (Ansoff Matrix)", desc: "產品/市場成長矩陣，劃分為：市場滲透（現有產品/現有市場）、產品開發（新產品/現有市場）、市場開發（現有產品/新市場）及多角化（新產品/新市場）四大策略象限。" },
    "BikkuraPon": { title: "Bikkura Pon (びっくらポン) 扭蛋系統", desc: "藏壽司首創的專利餐桌行銷系統。顧客每吃完 5 盤壽司並將餐盤投入桌邊槽，系統會播放趣味短片。若幸運中獎，上方機台便會自動掉落限量的聯名扭蛋玩具。" },
    "Shari": { title: "舍利 (醋飯 / Shari)", desc: "壽司底部的醋飯，日本壽司界的專業術語。藏壽司強調其舍利原料選用高品質米，並嚴格遵循無化學添加物調和醋之傳統日式比例。" },
    "Edomae": { title: "江戸前壽司 (Edo-mae Sushi)", desc: "源自日本江戶時代（東京舊稱江戶）的傳統壽司流派。當時因為缺乏冷藏設備，漁獲多以鹽醃、醋漬或醬油浸泡處理以利保存並帶出極致鮮味，是現代握壽司的鼻祖。" },
    "Kaizen": { title: "改善 (Kaizen / 企業持續改進)", desc: "源於日本豐田生產方式的經營管理哲學，意指由下而上、每天進行細微的工作流程改善。藏壽司導入大量自動化 IE 工程即是『改善』精神的體現。" }
  },
  en: {
    "VRIO": { title: "VRIO Framework", desc: "An internal analysis tool measuring resource attributes: Value, Rarity, Inimitability, and Organization. Achieving all four criteria delivers a Sustainable Competitive Advantage." },
    "PESTEL": { title: "PESTEL Analysis", desc: "A strategic tool analyzing macro-environmental forces shaping businesses: Political, Economic, Social, Technological, Environmental, and Legal." },
    "Porter": { title: "Porter's Five Forces", desc: "Developed by Michael E. Porter to determine industry profit potential, analyzing: Threat of New Entrants, Buyer Power, Supplier Power, Threat of Substitutes, and Internal Rivalry." },
    "Ansoff": { title: "Ansoff Matrix", desc: "A strategic planning grid mapping four growth strategies based on combinations of existing/new products and existing/new markets." },
    "BikkuraPon": { title: "Bikkura Pon (びっくらポン)", desc: "Kura Sushi's patented table game system. Inserting 5 empty plates into a slot fires a random touchscreen game, giving guests a chance to win limited-edition capsule toys." },
    "Shari": { title: "Shari (Sushi Rice)", desc: "The seasoned vinegar rice serving as the foundation of premium sushi. Kura Sushi's shari uses high-grade rice prepared without any artificial flavorings or chemical additives." },
    "Edomae": { title: "Edo-mae Sushi", desc: "A classic sushi style originating in Edo (ancient Tokyo). Because ice was rare, chefs cured fish in salt, vinegar, or soy sauce, creating complex flavors that birthed modern nigiri." },
    "Kaizen": { title: "Kaizen (Continuous Improvement)", desc: "A Japanese business philosophy emphasizing incremental, bottom-up efficiency tweaks. Kura's massive automation systems (like water chutes) are core examples of Kaizen." }
  }
};

const teamData = {
  zh: [
    { id: "sophia", name: "林曉美 (Sophia Lin)", role: "MBA 專案組長 / 品牌行銷策略", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250", desc: "專修跨國餐飲整合行銷與消費者體驗工程。主導藏壽司『飲食 × 娛樂』之行銷綜效整合與公司簡案研究。", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", captions: [{ time: 0, text: "大家好，我是林曉美。今天我將代表團隊為大家介紹台灣藏壽司的個案摘要。" }, { time: 4, text: "藏壽司成功打破了平價壽司的傳統框框，將『Delicious, Safe, and Fun』三大支柱完美融合。" }, { time: 9, text: "特別是其獨特的 Bikkura Pon 聯名玩具，更成功創造了極高的社群曝光與顧客到店黏著度。" }, { time: 14, text: "接下來，我的組員們將深入剖析其外部 PESTEL、波特五力與內部 VRIO 競爭壁壘。" }] },
    { id: "david", name: "陳志偉 (David Chen)", role: "MBA 核心研究員 / 智慧物流供應鏈", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=250", desc: "專注於現代工業工程（IE）與冷鏈物流排程。負責本個案中自動除盤、水流漂送回收系統與外部總體環境分析。", videoUrl: "https://www.w3schools.com/html/movie.mp4", captions: [{ time: 0, text: "各位教授好，我是陳志偉。由我來為大家解析藏壽司的外部總體環境與價值鏈運作。" }, { time: 5, text: "在面臨台灣餐飲業巨大缺工潮與食材通膨的雙重衝擊下，藏壽司的智慧化物流發揮了關鍵作用。" }, { time: 10, text: "其前台餐盤水流回收系統與自動洗碗專利，大幅省去了外場35%以上的清盤人力。" }, { time: 14, text: "這套將工業工程思維導入餐飲服務的模式，正是其最穩固的護城河之一。" }] },
    { id: "ray", name: "黃冠宇 (Ray Huang)", role: "MBA 核心研究員 / 數位轉型策略", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=250", desc: "專攻服務業數位轉型（DX）與商業開發。主導本研究之內部 VRIO 競爭優勢分析與安索夫成長矩陣拓張評估。", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", captions: [{ time: 0, text: "大家好，我是黃冠宇。我負責闡述藏壽司的 VRIO 核心壁壘與安索夫擴張策略。" }, { time: 5, text: "經過 VRIO 分析，我們判定鮮度君半自動保鮮蓋與智慧扭蛋機擁有可持續的競爭優勢。" }, { time: 10, text: "安索夫成長矩陣顯示，其在大都市周邊設立巨型獨立『土藏造街邊店』是極佳的市場開發策略。" }, { time: 15, text: "這種獨立街邊店型，完全擺脫了百貨公司的抽成制約，樹立了全新的日系品牌高標。" }] }
  ],
  en: [
    { id: "sophia", name: "Sophia Lin", role: "Project Leader / Marketing Strategy", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250", desc: "Specialized in food-service marketing and experience design. Led the research on Kura's gamified marketing and brand values.", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", captions: [{ time: 0, text: "Hello everyone, I'm Sophia Lin. I am honored to present the executive summary of Kura Sushi Taiwan." }, { time: 5, text: "Kura Sushi successfully redefined casual sushi by fusing Tasty, Safe, and Fun into a powerful ecosystem." }, { time: 10, text: "Its Bikkura Pon capsule games create tremendous social media exposure and locked-in client loyalty." }, { time: 15, text: "Next, my teammates will guide you through PESTEL, Porter's, and deep VRIO matrix barriers." }] },
    { id: "david", name: "David Chen", role: "MBA Researcher / Operations & Logistics", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=250", desc: "Focused on Industrial Engineering (IE) and supply chain logistics. Analyzed Kura's automated disposal tracks and PESTEL.", videoUrl: "https://www.w3schools.com/html/movie.mp4", captions: [{ time: 0, text: "Greetings professors, I'm David Chen. I will deconstruct Kura's macro-environment and value chain." }, { time: 5, text: "Confronted by Taiwan's severe service labor shortage, Kura's smart logistics play a pivotal role." }, { time: 10, text: "Their patented plate water waterways and dishwasher integration slash floor labor by over 35 percent." }, { time: 15, text: "This integration of manufacturing logic into hospitality creates a highly robust competitive shield." }] },
    { id: "ray", name: "Ray Huang", role: "MBA Researcher / Digital Strategy", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=250", desc: "Specialized in service sector Digital Transformation (DX). Conducted the VRIO Matrix assessment and Ansoff Growth study.", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", captions: [{ time: 0, text: "Hello everyone, I'm Ray Huang. I am going to analyze the VRIO matrix and Ansoff growth strategies." }, { time: 5, text: "Through VRIO, we proved that 'Mr. Fresh' and the Bikkura Pon system secure long-term advantages." }, { time: 10, text: "The Ansoff matrix illustrates that establishing freestanding 'Tuzang' street-side flagships is an excellent expansion tool." }, { time: 15, text: "These independent stores free the brand from retail mall commissions while building an immersive brand image." }] }
  ]
};

// ==========================================================================
// 2. AUDIO SFX SYNTHESIZER (動態音效合成引擎)
// ==========================================================================
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

const sfx = {
  click: () => {
    try {
      const ctx = getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {}
  },
  eat: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(350, now);
      osc1.frequency.exponentialRampToValueAtTime(800, now + 0.12);
      gain1.gain.setValueAtTime(0.12, now);
      gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(520, now + 0.04);
      osc2.frequency.exponentialRampToValueAtTime(1200, now + 0.16);
      gain2.gain.setValueAtTime(0.08, now + 0.04);
      gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.16);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.12);
      osc2.start(now + 0.04);
      osc2.stop(now + 0.16);
    } catch (e) {}
  },
  insert: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.linearRampToValueAtTime(80, now + 0.15);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(now + 0.15);
      setTimeout(() => {
        const clickOsc = ctx.createOscillator();
        const clickGain = ctx.createGain();
        clickOsc.type = 'triangle';
        clickOsc.frequency.setValueAtTime(400, ctx.currentTime);
        clickGain.gain.setValueAtTime(0.05, ctx.currentTime);
        clickGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);
        clickOsc.connect(clickGain);
        clickGain.connect(ctx.destination);
        clickOsc.start();
        clickOsc.stop(ctx.currentTime + 0.03);
      }, 120);
    } catch (e) {}
  },
  roll: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      for (let i = 0; i < 4; i++) {
        const time = now + i * 0.1;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(800 + i * 150, time);
        osc.frequency.exponentialRampToValueAtTime(300, time + 0.08);
        gain.gain.setValueAtTime(0.04, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(time);
        osc.stop(time + 0.08);
      }
    } catch (e) {}
  },
  win: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, index) => {
        const time = now + index * 0.12;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, time);
        gain.gain.setValueAtTime(0.12, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(time);
        osc.stop(time + 0.28);
      });
      const finalTime = now + notes.length * 0.12;
      const finalOsc = ctx.createOscillator();
      const finalGain = ctx.createGain();
      finalOsc.type = 'triangle';
      finalOsc.frequency.setValueAtTime(1318.51, finalTime);
      finalGain.gain.setValueAtTime(0.12, finalTime);
      finalGain.gain.exponentialRampToValueAtTime(0.001, finalTime + 0.6);
      finalOsc.connect(finalGain);
      finalGain.connect(ctx.destination);
      finalOsc.start(finalTime);
      finalOsc.stop(finalTime + 0.6);
    } catch (e) {}
  },
  lose: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(180, now);
      osc1.frequency.linearRampToValueAtTime(110, now + 0.45);
      gain1.gain.setValueAtTime(0.12, now);
      gain1.gain.linearRampToValueAtTime(0.001, now + 0.45);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sawtooth';
      osc2.frequency.setValueAtTime(185, now);
      osc2.frequency.linearRampToValueAtTime(112, now + 0.45);
      gain2.gain.setValueAtTime(0.1, now);
      gain2.gain.linearRampToValueAtTime(0.001, now + 0.45);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.45);
      osc2.start(now);
      osc2.stop(now + 0.45);
    } catch (e) {}
  }
};

// ==========================================================================
// 3. GLOSSARY SYSTEM (專有名詞 Drawer 與 Tooltip 彈窗)
// ==========================================================================
let activeTooltip = null;

function initGlossaryModule() {
  renderGlossaryDrawer();
  bindGlossaryEvents();
  attachInlineGlossaryTooltips();
}

function renderGlossaryDrawer(filterQuery = "") {
  const listContainer = document.getElementById('glossary-drawer-list');
  if (!listContainer) return;
  listContainer.innerHTML = "";

  const terms = glossaryTerms[state.language];
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
        <p>${state.language === 'zh' ? '無相符的專有名詞' : 'No matching terms found'}</p>
      </div>
    `;
  }
}

function bindGlossaryEvents() {
  const searchInput = document.getElementById('glossary-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderGlossaryDrawer(e.target.value);
    });
  }

  const toggleBtn = document.getElementById('glossary-toggle');
  const closeBtn = document.getElementById('glossary-close');
  const drawer = document.getElementById('glossary-drawer');
  const overlay = document.getElementById('drawer-overlay');

  if (toggleBtn && drawer && overlay) {
    const openDrawer = () => {
      sfx.click();
      drawer.classList.add('open');
      overlay.classList.add('active');
    };
    // Re-bind to prevent duplicates
    toggleBtn.outerHTML = toggleBtn.outerHTML;
    document.getElementById('glossary-toggle').addEventListener('click', openDrawer);
  }

  if (closeBtn && drawer && overlay) {
    const closeDrawer = () => {
      sfx.click();
      drawer.classList.remove('open');
      overlay.classList.remove('active');
    };
    closeBtn.outerHTML = closeBtn.outerHTML;
    overlay.outerHTML = overlay.outerHTML;
    
    document.getElementById('glossary-close').addEventListener('click', closeDrawer);
    document.getElementById('drawer-overlay').addEventListener('click', closeDrawer);
  }
}

function attachInlineGlossaryTooltips() {
  const paragraphs = document.querySelectorAll('.case-text, .step-desc, .challenge-desc');
  const terms = glossaryTerms[state.language];

  paragraphs.forEach(p => {
    let html = p.innerHTML;
    let modified = false;

    for (const [key, term] of Object.entries(terms)) {
      const regex = new RegExp(`(?<!class="glossary-term-link"[^>]*)(VRIO|PESTEL|波特五力|安索夫成長矩陣|鮮度君|Bikkura Pon|舍利|江戸前|改善)(?![^<]*>)`, 'g');
      html = html.replace(regex, (match) => {
        let matchedKey = key;
        if (match === '波特五力') matchedKey = 'Porter';
        if (match === '安索夫成長矩陣') matchedKey = 'Ansoff';
        if (match === '鮮度君') matchedKey = 'VRIO';
        modified = true;
        return `<span class="glossary-term-link" data-term-key="${matchedKey}">${match}</span>`;
      });
    }

    if (modified) {
      p.innerHTML = html;
    }
  });

  const links = document.querySelectorAll('.glossary-term-link');
  links.forEach(link => {
    link.addEventListener('mouseenter', showTooltip);
    link.addEventListener('mouseleave', hideTooltip);
  });
}

function showTooltip(e) {
  const key = e.target.getAttribute('data-term-key');
  const term = glossaryTerms[state.language][key];
  if (!term) return;

  const tooltip = document.createElement('div');
  tooltip.className = 'glossary-tooltip-bubble';
  tooltip.innerHTML = `
    <h5>${term.title}</h5>
    <p>${term.desc}</p>
    <div class="tooltip-arrow"></div>
  `;

  document.body.appendChild(tooltip);
  activeTooltip = tooltip;

  const rect = e.target.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  const topPosition = rect.top + window.scrollY - tooltipRect.height - 10;
  const leftPosition = rect.left + window.scrollX + (rect.width - tooltipRect.width) / 2;

  tooltip.style.top = `${topPosition}px`;
  tooltip.style.left = `${Math.max(10, leftPosition)}px`;
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

// ==========================================================================
// 4. AUDIO GUIDE SPEECH NARRATOR (語音導覽讀屏模組)
// ==========================================================================
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

let currentUtterance = null;
let currentBtn = null;

function initAudioGuidesModule() {
  stopCurrentSpeech();

  const playButtons = document.querySelectorAll('.btn-audio-guide');
  playButtons.forEach(btn => {
    btn.outerHTML = btn.outerHTML; // Clean
  });

  document.querySelectorAll('.btn-audio-guide').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.getAttribute('data-section');
      toggleSectionAudio(section, btn);
    });
  });
}

function toggleSectionAudio(section, btn) {
  sfx.click();

  if (currentBtn === btn) {
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

  stopCurrentSpeech();

  const textToRead = sectionSpeeches[state.language][section];
  if (!textToRead) return;

  const utterance = new SpeechSynthesisUtterance(textToRead);
  const voices = window.speechSynthesis.getVoices();
  let preferredVoice = null;

  if (state.language === 'zh') {
    preferredVoice = voices.find(v => v.lang.includes('zh-TW') || v.lang.includes('zh-HK') || v.lang.includes('zh-CN'));
    utterance.rate = 1.0;
  } else {
    preferredVoice = voices.find(v => v.lang.startsWith('en-'));
    utterance.rate = 1.05;
  }

  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  utterance.onend = () => {
    setButtonState(btn, 'idle');
    clearCurrentSpeechState();
  };
  utterance.onerror = () => {
    setButtonState(btn, 'idle');
    clearCurrentSpeechState();
  };

  currentUtterance = utterance;
  currentBtn = btn;

  setButtonState(btn, 'playing');
  window.speechSynthesis.speak(utterance);
}

function setButtonState(btn, s) {
  const icon = btn.querySelector('[data-lucide]');
  const textSpan = btn.querySelector('span');

  if (s === 'playing') {
    btn.classList.add('active-playing');
    if (icon) icon.setAttribute('data-lucide', 'pause');
    if (textSpan) textSpan.textContent = state.language === 'zh' ? '播放中...' : 'Reading...';
  } else if (s === 'paused') {
    btn.classList.remove('active-playing');
    btn.classList.add('active-paused');
    if (icon) icon.setAttribute('data-lucide', 'play');
    if (textSpan) textSpan.textContent = state.language === 'zh' ? '已暫停' : 'Paused';
  } else {
    btn.classList.remove('active-playing', 'active-paused');
    if (icon) icon.setAttribute('data-lucide', 'volume-2');
    if (textSpan) textSpan.textContent = state.language === 'zh' ? '語音導讀' : 'Audio Narrator';
  }
  lucide.createIcons();
}

function stopCurrentSpeech() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  if (currentBtn) setButtonState(currentBtn, 'idle');
  clearCurrentSpeechState();
}

function clearCurrentSpeechState() {
  currentUtterance = null;
  currentBtn = null;
}

// ==========================================================================
// 5. TEAM SHOWCASE & D-ID PRESENTATION THEATER
// ==========================================================================
let activeCaptions = [];

function renderTeamSectionModule() {
  const container = document.getElementById('team-members-container');
  if (!container) return;
  container.innerHTML = "";

  const members = teamData[state.language];

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
          <span>${state.language === 'zh' ? '觀看 D-ID 影音報告 v2' : 'Watch D-ID Presentation v2'}</span>
        </button>
      </div>
    `;
    container.appendChild(card);
  });

  lucide.createIcons();
  bindTeamEvents();
}

function bindTeamEvents() {
  document.querySelectorAll('.btn-play-did').forEach(btn => {
    btn.addEventListener('click', () => {
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
      document.body.style.overflow = '';
    };
    closeBtn.outerHTML = closeBtn.outerHTML;
    overlay.outerHTML = overlay.outerHTML;
    
    document.getElementById('theater-close').addEventListener('click', closeTheater);
    document.getElementById('theater-overlay').addEventListener('click', closeTheater);
  }
}

function openVideoTheater(memberId) {
  sfx.click();
  const member = teamData[state.language].find(m => m.id === memberId);
  if (!member) return;

  const theater = document.getElementById('video-theater');
  const overlay = document.getElementById('theater-overlay');
  const videoElement = document.getElementById('did-video-element');
  const titleElement = document.getElementById('theater-member-name');
  const captionOverlay = document.getElementById('did-caption-overlay');

  if (!theater || !overlay || !videoElement || !titleElement) return;

  titleElement.textContent = `${member.name} - ${state.language === 'zh' ? '策略個案簡報 V2 (D-ID)' : 'Strategic Presentation V2'}`;
  videoElement.src = member.videoUrl;
  
  activeCaptions = member.captions;
  captionOverlay.textContent = activeCaptions[0] ? activeCaptions[0].text : "";
  captionOverlay.style.display = 'block';

  document.body.style.overflow = 'hidden';
  theater.classList.add('open');
  overlay.classList.add('active');

  videoElement.load();
  videoElement.play().catch(() => {});

  videoElement.ontimeupdate = () => {
    const currentTime = videoElement.currentTime;
    let activeText = "";
    for (let i = 0; i < activeCaptions.length; i++) {
      if (currentTime >= activeCaptions[i].time) {
        activeText = activeCaptions[i].text;
      }
    }
    captionOverlay.textContent = activeText;
  };

  const captionsToggle = document.getElementById('btn-toggle-captions');
  if (captionsToggle) {
    captionsToggle.outerHTML = captionsToggle.outerHTML;
    document.getElementById('btn-toggle-captions').addEventListener('click', () => {
      sfx.click();
      if (captionOverlay.style.display === 'none') {
        captionOverlay.style.display = 'block';
        document.getElementById('btn-toggle-captions').classList.remove('disabled');
      } else {
        captionOverlay.style.display = 'none';
        document.getElementById('btn-toggle-captions').classList.add('disabled');
      }
    });
  }
}

// ==========================================================================
// 6. DUAL CONVEYOR BELT SIMULATOR
// ==========================================================================
function initConveyorBeltModule() {
  const lane = document.getElementById('regular-lane');
  if (!lane) return;
  lane.innerHTML = "";
  
  const plateCount = 8;
  for (let i = 0; i < plateCount; i++) {
    const item = getRandomSushiItem();
    const plateEl = createPlateElement(item, i * (100 / plateCount));
    lane.appendChild(plateEl);
  }
}

function getRandomSushiItem() {
  const sushiItems = menuItems.filter(item => item.category === 'sushi' || item.category === 'gunkan');
  return sushiItems[Math.floor(Math.random() * sushiItems.length)];
}

function createPlateElement(item, startPositionPercentage) {
  const plate = document.createElement('div');
  plate.className = 'conveyor-plate';
  plate.style.left = `${startPositionPercentage}%`;
  
  plate.innerHTML = `
    <div class="sushi-visual-wrapper">
      <div class="mr-fresh-dome"></div>
      <div class="ceramic-plate"></div>
      <div class="sushi-shari" style="background: ${item.accentColor};"></div>
      <div class="sushi-neta" style="background: ${item.svgColor};"></div>
      ${item.category === 'gunkan' ? `<div class="gunkan-seaweed"></div>` : ''}
    </div>
    <div class="plate-tooltip">
      <span class="plate-name">${state.language === 'zh' ? item.nameZh : item.nameEn}</span>
      <span class="plate-price">NT$ ${item.price}</span>
    </div>
  `;
  
  plate.addEventListener('click', (e) => {
    e.stopPropagation();
    eatSushi(plate, item);
  });
  
  let position = startPositionPercentage;
  const speed = 0.05;
  
  function step() {
    if (!plate.parentNode) return;
    position -= speed;
    if (position < -15) {
      position = 105;
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
  const neta = plateEl.querySelector('.sushi-neta');
  const shari = plateEl.querySelector('.sushi-shari');
  if (neta) neta.style.background = item.svgColor;
  if (shari) shari.style.background = item.accentColor;
  
  const seaweed = plateEl.querySelector('.gunkan-seaweed');
  if (seaweed) {
    if (item.category !== 'gunkan') seaweed.remove();
  } else {
    if (item.category === 'gunkan') {
      const container = plateEl.querySelector('.sushi-visual-wrapper');
      const sw = document.createElement('div');
      sw.className = 'gunkan-seaweed';
      container.appendChild(sw);
    }
  }
  
  const nameEl = plateEl.querySelector('.plate-name');
  const priceEl = plateEl.querySelector('.plate-price');
  if (nameEl) nameEl.textContent = state.language === 'zh' ? item.nameZh : item.nameEn;
  if (priceEl) priceEl.textContent = `NT$ ${item.price}`;
  
  const newPlate = plateEl.cloneNode(true);
  plateEl.parentNode.replaceChild(newPlate, plateEl);
  newPlate.addEventListener('click', (e) => {
    e.stopPropagation();
    eatSushi(newPlate, item);
  });
}

function eatSushi(plateEl, item) {
  sfx.eat();
  createEatingSplashEffect(plateEl);
  plateEl.classList.add('eaten');
  
  handlePlateConsumed(item);
  
  setTimeout(() => {
    if (plateEl.parentNode) {
      const parent = plateEl.parentNode;
      plateEl.remove();
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

// ==========================================================================
// 7. TOUCHSCREEN TABLET ORDER CONSOLE
// ==========================================================================
let currentCategory = 'sushi';
let billTotal = 0;
let orderedItemsList = [];

function initOrderTabletModule() {
  renderTabletScreen();
}

function renderTabletScreen() {
  const container = document.getElementById('tablet-content-area');
  if (!container) return;

  container.innerHTML = `
    <div class="tablet-layout">
      <div class="tablet-sidebar">
        <button class="tab-category-btn ${currentCategory === 'sushi' ? 'active' : ''}" data-cat="sushi">
          <i data-lucide="fish"></i>
          <span>${state.language === 'zh' ? '握壽司' : 'Nigiri'}</span>
        </button>
        <button class="tab-category-btn ${currentCategory === 'gunkan' ? 'active' : ''}" data-cat="gunkan">
          <i data-lucide="pocket"></i>
          <span>${state.language === 'zh' ? '軍艦卷' : 'Gunkan'}</span>
        </button>
        <button class="tab-category-btn ${currentCategory === 'side' ? 'active' : ''}" data-cat="side">
          <i data-lucide="soup"></i>
          <span>${state.language === 'zh' ? '副餐/湯' : 'Sides'}</span>
        </button>
        <button class="tab-category-btn ${currentCategory === 'dessert' ? 'active' : ''}" data-cat="dessert">
          <i data-lucide="ice-cream"></i>
          <span>${state.language === 'zh' ? '甜點/飲' : 'Dessert'}</span>
        </button>
      </div>
      <div class="tablet-main-grid">
        <div class="tablet-grid-header">
          <span class="tablet-billing-indicator">
            <i data-lucide="banknote"></i> 
            <span>${state.language === 'zh' ? '累計消費' : 'Total Bill'}: <strong class="glow-txt">NT$ ${billTotal}</strong></span>
          </span>
          <span class="tablet-orders-count">
            <i data-lucide="shopping-bag"></i>
            <span>${state.language === 'zh' ? '已加點' : 'Orders'}: <strong>${orderedItemsList.length}</strong></span>
          </span>
        </div>
        <div class="tablet-items-viewport" id="tablet-items-grid"></div>
      </div>
    </div>
  `;

  lucide.createIcons();
  bindTabletEvents();
  renderCategoryItems();
}

function bindTabletEvents() {
  document.querySelectorAll('.tab-category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.click();
      currentCategory = btn.getAttribute('data-cat');
      document.querySelectorAll('.tab-category-btn').forEach(b => b.classList.remove('active'));
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
        <div class="mini-plate-art" style="background: ${item.svgColor}; border: 3px solid ${item.accentColor};"></div>
      </div>
      <div class="tablet-item-name">${state.language === 'zh' ? item.nameZh : item.nameEn}</div>
      <div class="tablet-item-footer">
        <span class="tablet-item-price">NT$ ${item.price}</span>
        <button class="btn-order-item" data-item-id="${item.id}">
          <i data-lucide="plus"></i>
          <span>${state.language === 'zh' ? '加點' : 'Order'}</span>
        </button>
      </div>
    `;
    grid.appendChild(itemCard);
  });

  lucide.createIcons();

  grid.querySelectorAll('.btn-order-item').forEach(btn => {
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
  renderTabletScreen();
  triggerExpressDelivery(item);
}

function triggerExpressDelivery(item) {
  const expressLane = document.getElementById('express-lane');
  const bulletTrain = document.getElementById('bullet-train');
  if (!expressLane || !bulletTrain) return;

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
        <div class="plate-label-glow">${state.language === 'zh' ? '特快配送' : 'Express'}</div>
      </div>
    </div>
  `;

  bulletTrain.className = 'bullet-train slide-in';
  setTimeout(() => sfx.win(), 600);

  setTimeout(() => {
    const deliveredPlate = document.getElementById('delivered-plate-id');
    if (deliveredPlate) {
      deliveredPlate.addEventListener('click', () => {
        sfx.eat();
        deliveredPlate.classList.add('eaten');
        handlePlateConsumed(item);
        setTimeout(() => {
          bulletTrain.className = 'bullet-train slide-out';
        }, 300);
      });
    }
  }, 1000);

  setTimeout(() => {
    if (bulletTrain.classList.contains('slide-in')) {
      bulletTrain.className = 'bullet-train slide-out';
    }
  }, 6500);
}

// ==========================================================================
// 8. BIKKURA PON SLOTS & LCD MINIGAMES
// ==========================================================================
function initBikkuraPonModule() {
  updateInsertedPlatesDisplay();
  bindBikkuraPonEvents();
}

function bindBikkuraPonEvents() {
  const insertBtn = document.getElementById('btn-insert-five');
  if (insertBtn) {
    insertBtn.outerHTML = insertBtn.outerHTML; // Clean
    document.getElementById('btn-insert-five').addEventListener('click', () => {
      if (state.platesCount >= 5) {
        state.platesCount -= 5;
        updateInsertedPlatesDisplay();
        triggerBikkuraPonGame();
      }
    });
  }
}

function triggerBikkuraPonGame() {
  sfx.insert();
  const plateSlide = document.getElementById('plate-slide');
  if (plateSlide) {
    plateSlide.classList.add('slide-active');
    setTimeout(() => plateSlide.classList.remove('slide-active'), 800);
  }

  const idleState = document.getElementById('screen-idle-state');
  const gameState = document.getElementById('screen-game-state');
  if (!idleState || !gameState) return;

  idleState.style.display = 'none';
  gameState.style.display = 'block';
  gameState.innerHTML = "";

  const gameType = Math.random() > 0.5 ? 'ninja' : 'slots';
  if (gameType === 'ninja') {
    runNinjaBattleGame(gameState);
  } else {
    runSushiSlotsGame(gameState);
  }
}

function runNinjaBattleGame(screenEl) {
  screenEl.innerHTML = `
    <div class="game-view ninja-game">
      <div class="ninja-actor" id="game-ninja"></div>
      <div class="monster-actor" id="game-monster"></div>
      <div class="combat-log" id="game-log">${state.language === 'zh' ? '戰鬥開始！' : 'Battle Start!'}</div>
    </div>
  `;
  const ninja = document.getElementById('game-ninja');
  const monster = document.getElementById('game-monster');
  const log = document.getElementById('game-log');
  
  setTimeout(() => sfx.roll(), 300);

  setTimeout(() => {
    if (ninja && log) {
      ninja.classList.add('charging');
      log.textContent = state.language === 'zh' ? '小新忍者集氣中...' : 'Ninja gathering power...';
    }
  }, 1000);

  setTimeout(() => {
    if (ninja && monster && log) {
      ninja.classList.remove('charging');
      ninja.classList.add('slashing');
      monster.classList.add('hit');
      log.textContent = state.language === 'zh' ? '吃我一記聯名大刀斬！' : 'Ip licensing slash!';
      sfx.insert();
    }
  }, 2200);

  setTimeout(() => {
    const win = Math.random() < 0.35; // 35% win rate
    resolveGameOutcome(win, screenEl);
  }, 3800);
}

function runSushiSlotsGame(screenEl) {
  screenEl.innerHTML = `
    <div class="game-view slots-game">
      <div class="slots-reels-row">
        <div class="reel" id="reel-1">🍣</div>
        <div class="reel" id="reel-2">🥚</div>
        <div class="reel" id="reel-3">🦐</div>
      </div>
      <div class="combat-log" id="game-log">${state.language === 'zh' ? '轉動拉霸...' : 'Spinning...'}</div>
    </div>
  `;
  const reel1 = document.getElementById('reel-1');
  const reel2 = document.getElementById('reel-2');
  const reel3 = document.getElementById('reel-3');
  
  reel1.classList.add('spinning');
  reel2.classList.add('spinning');
  reel3.classList.add('spinning');
  sfx.roll();

  setTimeout(() => {
    reel1.classList.remove('spinning');
    reel1.textContent = '🍣';
    sfx.click();
  }, 1000);

  setTimeout(() => {
    reel2.classList.remove('spinning');
    reel2.textContent = '🍣';
    sfx.click();
  }, 1800);

  setTimeout(() => {
    reel3.classList.remove('spinning');
    const win = Math.random() < 0.35;
    reel3.textContent = win ? '🍣' : '🥚';
    sfx.click();
    
    setTimeout(() => {
      resolveGameOutcome(win, screenEl);
    }, 600);
  }, 2600);
}

function resolveGameOutcome(win, screenEl) {
  if (win) {
    sfx.win();
    screenEl.innerHTML = `
      <div class="game-outcome win-outcome animated-bounce">
        <div class="outcome-badge win-badge">當選</div>
        <div class="outcome-txt">${state.language === 'zh' ? '恭喜中獎！' : 'YOU WIN!'}</div>
      </div>
    `;
    const dome = document.getElementById('capsule-dome');
    if (dome) {
      dome.classList.add('shake-active');
      setTimeout(() => dome.classList.remove('shake-active'), 1000);
    }
    setTimeout(() => dispenseCapsuleToy(), 1500);
  } else {
    sfx.lose();
    screenEl.innerHTML = `
      <div class="game-outcome lose-outcome">
        <div class="outcome-badge lose-badge">殘念</div>
        <div class="outcome-txt">${state.language === 'zh' ? '下次再努力！' : 'TRY AGAIN'}</div>
      </div>
    `;
  }

  setTimeout(() => {
    const idleState = document.getElementById('screen-idle-state');
    if (idleState) {
      screenEl.style.display = 'none';
      idleState.style.display = 'flex';
      updateInsertedPlatesDisplay();
    }
  }, 4500);
}

function dispenseCapsuleToy() {
  const capsule = document.getElementById('dispensed-capsule-prize');
  if (!capsule) return;

  const uncollected = capsuleToys.filter(t => !state.unlockedToys.some(ut => ut.id === t.id));
  const selectedToy = uncollected.length > 0 
    ? uncollected[Math.floor(Math.random() * uncollected.length)]
    : capsuleToys[Math.floor(Math.random() * capsuleToys.length)];

  sfx.roll();
  capsule.style.background = `radial-gradient(circle at 30% 30%, ${selectedToy.svgColor}, #000000)`;
  capsule.classList.add('dispensed-active');

  capsule.outerHTML = capsule.outerHTML; // Clean
  const newCapsule = document.getElementById('dispensed-capsule-prize');
  newCapsule.addEventListener('click', () => {
    sfx.win();
    newCapsule.classList.remove('dispensed-active');
    showPrizePopup(selectedToy);
  });
}

function showPrizePopup(toy) {
  const overlay = document.createElement('div');
  overlay.className = 'prize-modal-overlay active';
  overlay.innerHTML = `
    <div class="prize-card-glass animated-scale">
      <div class="prize-glow" style="background: radial-gradient(circle, ${toy.iconColor}55, transparent 70%);"></div>
      <div class="prize-card-header">
        <span class="prize-rarity-pill">SPECIAL</span>
        <h3 class="prize-card-name">${state.language === 'zh' ? toy.nameZh : toy.nameEn}</h3>
      </div>
      <div class="prize-toy-art">
        <svg viewBox="0 0 100 100" width="120" height="120">
          <circle cx="50" cy="50" r="40" fill="${toy.svgColor}" opacity="0.3" stroke="${toy.iconColor}" stroke-width="2"/>
          <circle cx="50" cy="45" r="20" fill="${toy.iconColor}"/>
          <rect x="35" y="60" width="30" height="12" rx="4" fill="#FFF"/>
        </svg>
      </div>
      <p class="prize-card-desc">${state.language === 'zh' ? toy.descriptionZh : toy.descriptionEn}</p>
      <button class="btn-primary" id="btn-collect-toy">
        <i data-lucide="award"></i>
        <span>${state.language === 'zh' ? '放入收藏閣' : 'Add to Collection'}</span>
      </button>
    </div>
  `;
  document.body.appendChild(overlay);
  lucide.createIcons();

  document.getElementById('btn-collect-toy').addEventListener('click', () => {
    sfx.click();
    overlay.remove();
    handleToyUnlocked(toy);
  });
}

// ==========================================================================
// 9. CAPSULE TOY CABINET DISPLAY
// ==========================================================================
function renderToyCabinetModule() {
  const shelvesContainer = document.getElementById('toy-cabinet-shelves');
  const countSpan = document.getElementById('cabinet-count');
  if (!shelvesContainer) return;
  shelvesContainer.innerHTML = "";

  if (countSpan) countSpan.textContent = state.unlockedToys.length;

  capsuleToys.forEach(toy => {
    const isUnlocked = state.unlockedToys.some(ut => ut.id === toy.id);
    const spot = document.createElement('div');
    spot.className = `toy-spot-card ${isUnlocked ? 'unlocked animated-scale' : 'locked'}`;
    
    if (isUnlocked) {
      spot.innerHTML = `
        <div class="toy-mini-glow" style="background: radial-gradient(circle, ${toy.iconColor}33, transparent 70%);"></div>
        <div class="toy-icon-wrapper">
          <svg viewBox="0 0 100 100" class="cabinet-toy-svg">
            <circle cx="50" cy="50" r="35" fill="${toy.svgColor}"/>
            <rect x="35" y="42" width="30" height="15" rx="3" fill="${toy.iconColor}"/>
            <rect x="32" y="57" width="36" height="8" rx="2" fill="#FFF"/>
          </svg>
        </div>
        <span class="toy-spot-name">${state.language === 'zh' ? toy.nameZh : toy.nameEn}</span>
      `;
      spot.addEventListener('click', () => {
        sfx.click();
        showToyDetailsPopup(toy);
      });
    } else {
      spot.innerHTML = `
        <div class="toy-icon-wrapper locked-icon">
          <i data-lucide="lock" class="padlock-icon"></i>
        </div>
        <span class="toy-spot-name locked-name">${state.language === 'zh' ? '尚未解鎖' : 'Locked'}</span>
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
        <h3 class="prize-card-name">${state.language === 'zh' ? toy.nameZh : toy.nameEn}</h3>
      </div>
      <div class="prize-toy-art">
        <svg viewBox="0 0 100 100" width="120" height="120">
          <circle cx="50" cy="50" r="40" fill="${toy.svgColor}" opacity="0.3" stroke="${toy.iconColor}" stroke-width="2"/>
          <circle cx="50" cy="45" r="20" fill="${toy.iconColor}"/>
          <rect x="35" y="60" width="30" height="12" rx="4" fill="#FFF"/>
        </svg>
      </div>
      <p class="prize-card-desc">${state.language === 'zh' ? toy.descriptionZh : toy.descriptionEn}</p>
      <button class="btn-primary" id="btn-close-toy-detail">
        <span>${state.language === 'zh' ? '關閉' : 'Close'}</span>
      </button>
    </div>
  `;
  document.body.appendChild(overlay);
  document.getElementById('btn-close-toy-detail').addEventListener('click', () => {
    sfx.click();
    overlay.remove();
  });
}

// ==========================================================================
// 10. TAIWAN BRANCH QUEUE TICKET ASSISTANT
// ==========================================================================
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

function initQueueModule() {
  populateBranchSelect();
  bindQueueEvents();
}

function populateBranchSelect() {
  const select = document.getElementById('queue-branch-select');
  if (!select) return;
  select.innerHTML = "";

  branchesData[state.language].forEach(b => {
    const opt = document.createElement('option');
    opt.value = b.id;
    opt.textContent = b.name;
    select.appendChild(opt);
  });
  updateBranchStatusCard(branchesData[state.language][0].id);
}

function updateBranchStatusCard(branchId) {
  const infoPane = document.getElementById('branch-status-info');
  if (!infoPane) return;

  const branch = branchesData[state.language].find(b => b.id === branchId);
  if (!branch) return;

  infoPane.innerHTML = `
    <div class="branch-status-details animated-fade">
      <h4>${branch.name}</h4>
      <p class="branch-meta-desc">${branch.label}</p>
      <div class="status-metrics-row">
        <span class="status-meta">
          <i data-lucide="users"></i> 
          <span>${state.language === 'zh' ? `席位數: ${branch.storesCount} 席` : `Seats: ${branch.storesCount}`}</span>
        </span>
        <span class="status-meta status-wait-pill ${branch.waitMin > 60 ? 'congested' : 'smooth'}">
          <i data-lucide="clock"></i>
          <span>${state.language === 'zh' ? `估計等候: ${branch.waitMin} 分鐘` : `Wait Time: ${branch.waitMin} mins`}</span>
        </span>
      </div>
    </div>
  `;
  lucide.createIcons();
}

function bindQueueEvents() {
  const select = document.getElementById('queue-branch-select');
  if (select) {
    select.outerHTML = select.outerHTML; // Clean
    document.getElementById('queue-branch-select').addEventListener('change', (e) => {
      sfx.click();
      updateBranchStatusCard(e.target.value);
    });
  }

  const drawBtn = document.getElementById('btn-draw-ticket');
  if (drawBtn) {
    drawBtn.outerHTML = drawBtn.outerHTML;
    document.getElementById('btn-draw-ticket').addEventListener('click', () => {
      const activeBranchId = document.getElementById('queue-branch-select').value;
      generateQueueTicket(activeBranchId);
    });
  }
}

function generateQueueTicket(branchId) {
  sfx.win();
  const branch = branchesData[state.language].find(b => b.id === branchId);
  if (!branch) return;

  const idlePrompt = document.getElementById('ticket-idle-prompt');
  const activeContent = document.getElementById('ticket-active-content');
  if (!idlePrompt || !activeContent) return;

  idlePrompt.style.display = 'none';
  activeContent.style.display = 'block';
  activeContent.innerHTML = "";

  const prefix = branch.id.startsWith('kaohsiung') ? 'K' : branch.id.startsWith('taichung') ? 'TC' : branch.id.startsWith('taipei') ? 'TP' : 'TN';
  const num = Math.floor(100 + Math.random() * 900);
  const ticketNumber = `${prefix}-${num}`;

  if (activeTicketTimer) clearInterval(activeTicketTimer);

  let timeLeft = 300; // Countdown from 5 mins

  activeContent.innerHTML = `
    <div class="active-ticket-layout animated-scale">
      <div class="ticket-header-strip">
        <span class="ticket-brand-txt">KURA SUSHI TAIWAN</span>
        <span class="ticket-no-badge">ONLINE</span>
      </div>
      <div class="ticket-main-body">
        <div class="ticket-store">${branch.name}</div>
        <div class="ticket-number-display">
          <span class="ticket-lbl">${state.language === 'zh' ? '您的預約號碼' : 'YOUR NUMBER'}</span>
          <span class="ticket-num glow-txt">${ticketNumber}</span>
        </div>
        <div class="ticket-countdown-timer">
          <span class="timer-lbl">${state.language === 'zh' ? '預計到店倒數' : 'ESTIMATED ARRIVAL COUNTDOWN'}</span>
          <span class="timer-clock" id="ticket-countdown-clock">05:00</span>
        </div>
        <div class="ticket-barcodes-wrapper">
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
      clockEl.textContent = state.language === 'zh' ? '請速進店！' : 'GO TO DESK!';
      clockEl.classList.add('urgent-glow');
    }
    timeLeft--;
  }

  updateClock();
  activeTicketTimer = setInterval(updateClock, 1000);
}

// ==========================================================================
// 11. MAIN APP STATE COORDINATOR & STATE BOOTSTRAPPER
// ==========================================================================
function bootApplication() {
  syncLanguageUI();
  syncThemeUI();
  initializeComponents();
  bindGlobalEvents();
  lucide.createIcons();
}

function initializeComponents() {
  renderTeamSectionModule();
  renderCaseStudy(state.language);
  renderToyCabinetModule();
  
  initConveyorBeltModule();
  initOrderTabletModule();
  initBikkuraPonModule();
  initQueueModule();
  
  initGlossaryModule();
  initAudioGuidesModule();
}

function handlePlateConsumed(item) {
  state.platesCount++;
  updateInsertedPlatesDisplay();
}

function handleToyUnlocked(toy) {
  if (!state.unlockedToys.some(ut => ut.id === toy.id)) {
    state.unlockedToys.push(toy);
    renderToyCabinetModule();
  }
}

function updateInsertedPlatesDisplay() {
  const platesCountSpan = document.getElementById('current-inserted-plates');
  const insertBtn = document.getElementById('btn-insert-five');
  if (platesCountSpan) platesCountSpan.textContent = state.platesCount;
  
  if (insertBtn) {
    if (state.platesCount >= 5) {
      insertBtn.removeAttribute('disabled');
      insertBtn.classList.add('glow-btn');
    } else {
      insertBtn.setAttribute('disabled', 'true');
      insertBtn.classList.remove('glow-btn');
    }
  }
}

function bindGlobalEvents() {
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.outerHTML = langToggle.outerHTML; // Clean
    document.getElementById('lang-toggle').addEventListener('click', () => {
      sfx.click();
      state.language = state.language === 'zh' ? 'en' : 'zh';
      const textSpan = document.getElementById('lang-toggle').querySelector('.toggle-text');
      if (textSpan) textSpan.textContent = state.language === 'zh' ? 'EN' : '中文';
      
      syncLanguageUI();
      initializeComponents();
    });
  }

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.outerHTML = themeToggle.outerHTML;
    document.getElementById('theme-toggle').addEventListener('click', () => {
      sfx.click();
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      
      const darkIcon = document.getElementById('theme-toggle').querySelector('.icon-dark');
      const lightIcon = document.getElementById('theme-toggle').querySelector('.icon-light');
      
      if (state.theme === 'dark') {
        darkIcon.style.display = 'none';
        lightIcon.style.display = 'inline-block';
      } else {
        darkIcon.style.display = 'inline-block';
        lightIcon.style.display = 'none';
      }
      syncThemeUI();
    });
  }

  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav-menu');
  if (mobileToggle && mobileNav) {
    mobileToggle.outerHTML = mobileToggle.outerHTML;
    document.getElementById('mobile-menu-toggle').addEventListener('click', () => {
      sfx.click();
      mobileNav.classList.toggle('open');
      const icon = document.getElementById('mobile-menu-toggle').querySelector('[data-lucide]');
      if (icon) {
        const isOpened = mobileNav.classList.contains('open');
        icon.setAttribute('data-lucide', isOpened ? 'x' : 'menu');
        lucide.createIcons();
      }
    });

    mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        const icon = document.getElementById('mobile-menu-toggle').querySelector('[data-lucide]');
        if (icon) {
          icon.setAttribute('data-lucide', 'menu');
          lucide.createIcons();
        }
      });
    });
  }

  window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progress-bar');
    if (!progressBar) return;
    const windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (windowScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

function syncLanguageUI() {
  document.documentElement.lang = state.language === 'zh' ? 'zh-TW' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translatedText = translations[state.language][key];
    if (translatedText) el.textContent = translatedText;
  });
}

function syncThemeUI() {
  document.documentElement.setAttribute('data-theme', state.theme);
}

// ----------------------------------------------------
// Porter's SVG radar chart renderer & accordion bindings inside app.js
// ----------------------------------------------------
function renderCaseStudy(lang) {
  document.getElementById('summary-content').innerHTML = caseContent[state.language].summary;
  document.getElementById('intro-text').innerHTML = caseContent[state.language].intro;
  document.getElementById('value-chain-container').innerHTML = caseContent[state.language].chain;
  document.getElementById('challenges-container').innerHTML = caseContent[state.language].challenges;
  document.getElementById('conclusion-content').innerHTML = caseContent[state.language].conclusion;

  // Render accordion PESTEL
  const container = document.getElementById('pestel-accordion-container');
  if (container) {
    container.innerHTML = "";
    caseContent[state.language].pestel.forEach((item, index) => {
      const accItem = document.createElement('div');
      accItem.className = `pestel-item ${index === 0 ? 'active' : ''}`;
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

    container.querySelectorAll('.pestel-header').forEach(header => {
      header.addEventListener('click', () => {
        sfx.click();
        const parent = header.parentElement;
        const isActive = parent.classList.contains('active');
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

  // Render Porter radar
  const radarContainer = document.getElementById('porter-radar');
  if (radarContainer) {
    const data = caseContent[state.language].porter;
    radarContainer.innerHTML = `
      <svg viewBox="0 0 400 400" width="100%" height="100%" class="radar-svg">
        <polygon points="200,60 333,157 282,313 118,313 67,157" class="radar-ring r5"/>
        <polygon points="200,88 306,165 265,290 135,290 94,165" class="radar-ring r4"/>
        <polygon points="200,116 280,174 249,267 151,267 120,174" class="radar-ring r3"/>
        <polygon points="200,144 253,183 232,243 168,243 147,183" class="radar-ring r2"/>
        <polygon points="200,172 227,191 216,220 184,220 173,191" class="radar-ring r1"/>
        <line x1="200" y1="200" x2="200" y2="40" class="radar-axis"/>
        <line x1="200" y1="200" x2="350" y2="150" class="radar-axis"/>
        <line x1="200" y1="200" x2="290" y2="330" class="radar-axis"/>
        <line x1="200" y1="200" x2="110" y2="330" class="radar-axis"/>
        <line x1="200" y1="200" x2="50" y2="150" class="radar-axis"/>
        <polygon points="200,65 306,131 266,290 160,250 95,150" class="radar-data-polygon"/>
        <circle cx="306" cy="131" r="10" class="radar-node" data-force="entrants"/>
        <circle cx="266" cy="290" r="10" class="radar-node" data-force="substitutes"/>
        <circle cx="160" cy="250" r="10" class="radar-node" data-force="suppliers"/>
        <circle cx="95" cy="150" r="10" class="radar-node" data-force="buyers"/>
        <circle cx="200" cy="65" r="10" class="radar-node" data-force="rivalry"/>
        <text x="316" y="125" class="radar-label label-tr"> entrants </text>
        <text x="276" y="305" class="radar-label label-br"> substitutes </text>
        <text x="110" y="265" class="radar-label label-bl"> suppliers </text>
        <text x="30" y="145" class="radar-label label-tl"> buyers </text>
        <text x="200" y="30" class="radar-label label-top"> rivalry </text>
      </svg>
    `;
    
    const detailsPane = document.getElementById('porter-details-pane');
    const nodes = radarContainer.querySelectorAll('.radar-node');
    nodes.forEach(node => {
      node.addEventListener('click', () => {
        sfx.click();
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
    radarContainer.querySelector('[data-force="rivalry"]').dispatchEvent(new Event('click'));
  }

  // Render VRIO table
  const tbody = document.getElementById('vrio-table-body');
  if (tbody) {
    tbody.innerHTML = "";
    caseContent[state.language].vrio.forEach(row => {
      const tr = document.createElement('tr');
      tr.className = 'vrio-tr';
      tr.innerHTML = `
        <td class="vrio-td-resource"><strong>${row.resource}</strong></td>
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

  // Bind Ansoff click
  const quadrants = document.querySelectorAll('.ansoff-quadrant');
  const detailsCard = document.getElementById('ansoff-details');
  const ansoffData = caseContent[state.language].ansoff;
  if (quadrants.length > 0 && detailsCard) {
    quadrants.forEach(quad => {
      quad.outerHTML = quad.outerHTML; // Clean
    });
    document.querySelectorAll('.ansoff-quadrant').forEach(quad => {
      quad.addEventListener('click', () => {
        sfx.click();
        document.querySelectorAll('.ansoff-quadrant').forEach(q => q.classList.remove('active'));
        quad.classList.add('active');
        const quadrantKey = quad.getAttribute('data-quadrant');
        const quadData = ansoffData[quadrantKey];
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
    document.querySelector('[data-quadrant="market"]').dispatchEvent(new Event('click'));
  }

  // Render References
  const refContainer = document.getElementById('references-list-content');
  if (refContainer) {
    refContainer.innerHTML = "";
    caseContent[state.language].references.forEach(ref => {
      const li = document.createElement('li');
      li.className = 'reference-item';
      li.innerHTML = `
        <i data-lucide="bookmark" class="ref-icon"></i>
        <span class="ref-text">${ref}</span>
      `;
      refContainer.appendChild(li);
    });
  }

  lucide.createIcons();
}

// Global initialization trigger
window.onload = bootApplication;
