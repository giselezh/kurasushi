// Interactive Lab Menu Items & Bikkura Pon Toy Catalog

export const menuItems = [
  // Category: sushi
  {
    id: "salmon_nigiri",
    category: "sushi",
    nameZh: "熟成鮭魚肚握壽司",
    nameEn: "Premium Salmon Nigiri",
    price: 40,
    calories: 120,
    svgColor: "#FF8E6E", // Soft orange salmon color
    accentColor: "#FFF" // Shari white
  },
  {
    id: "tuna_nigiri",
    category: "sushi",
    nameZh: "極致熟成鮪魚握壽司",
    nameEn: "Matured Tuna Nigiri",
    price: 40,
    calories: 90,
    svgColor: "#DE1A22", // Deep red tuna
    accentColor: "#FFF"
  },
  {
    id: "tamago_nigiri",
    category: "sushi",
    nameZh: "玉子燒握壽司",
    nameEn: "Sweet Egg Omelet Nigiri",
    price: 40,
    calories: 110,
    svgColor: "#FFD042", // Golden egg yellow
    accentColor: "#FFF"
  },
  
  // Category: gunkan
  {
    id: "salmon_ikura_gunkan",
    category: "gunkan",
    nameZh: "鮮鮭魚卵軍艦壽司",
    nameEn: "Salmon Ikura Gunkan",
    price: 40,
    calories: 85,
    svgColor: "#FF5E3A", // Ikura pearls orange-red
    accentColor: "#16181C" // Nori seaweed black
  },
  {
    id: "shrimp_mayo_gunkan",
    category: "gunkan",
    nameZh: "鮮蝦沙拉軍艦壽司",
    nameEn: "Shrimp Salad Gunkan",
    price: 40,
    calories: 95,
    svgColor: "#FFAEBC", // Pinkish shrimp salad
    accentColor: "#16181C"
  },
  
  // Category: side
  {
    id: "chawanmushi",
    category: "side",
    nameZh: "自製茶碗蒸",
    nameEn: "Signature Chawanmushi",
    price: 60,
    calories: 70,
    svgColor: "#FFECA1", // Egg custard cream
    accentColor: "#D39530" // Wooden cup brown
  },
  {
    id: "tempura_shrimp",
    category: "side",
    nameZh: "酥炸大蝦天婦羅",
    nameEn: "Crispy Shrimp Tempura",
    price: 80,
    calories: 180,
    svgColor: "#F3C87C", // Golden crispy batter
    accentColor: "#FF7E67"
  },
  
  // Category: dessert
  {
    id: "matcha_icecream",
    category: "dessert",
    nameZh: "京都宇治抹茶霜淇淋",
    nameEn: "Uji Matcha Soft Serve",
    price: 40,
    calories: 130,
    svgColor: "#67A234", // Matcha bright green
    accentColor: "#FFF"
  },
  {
    id: "taiyaki_donut",
    category: "dessert",
    nameZh: "鯛魚燒牛奶冰淇淋",
    nameEn: "Taiyaki Donut Soft Serve",
    price: 90,
    calories: 240,
    svgColor: "#9E6D38", // Baked taiyaki brown
    accentColor: "#67A234"
  }
];

export const capsuleToys = [
  {
    id: "toy_chiikawa_salmon",
    nameZh: "限量吉伊卡哇鮭魚軍艦扭蛋",
    nameEn: "Limited Chiikawa Salmon Gunkan",
    svgColor: "#FFAEBC", // Light pink capsule
    iconColor: "#FF8E6E", // Salmon
    descriptionZh: "超高人氣吉伊卡哇趴在美味鮭魚壽司上，限量聯名極具收藏價值！",
    descriptionEn: "Voted most popular! Cute Chiikawa hugging a fresh slice of salmon sushi."
  },
  {
    id: "toy_conan_maguro",
    nameZh: "偵探柯南鮪魚握壽司掛飾",
    nameEn: "Detective Conan Tuna Charm",
    svgColor: "#A0E7E5", // Light blue capsule
    iconColor: "#DE1A22", // Tuna Red
    descriptionZh: "柯南手持蝴蝶結變聲器坐在熟成鮪魚上，智慧與美味的結合！",
    descriptionEn: "Conan Edogawa sitting on matured tuna nigiri with his bow-tie decoder."
  },
  {
    id: "toy_shincham_tamago",
    nameZh: "蠟筆小新玉子燒立體公仔",
    nameEn: "Crayon Shin-chan Tamago Figurine",
    svgColor: "#FFF4BD", // Yellow capsule
    iconColor: "#FFD042", // Egg Yellow
    descriptionZh: "動感小新身穿招牌睡衣，搞笑地黏在香甜玉子燒壽司上。",
    descriptionEn: "Shin-chan in pajama pajamas humorously glued to a sweet tamago block."
  },
  {
    id: "toy_sushi_ninja_shari",
    nameZh: "藏壽司原創：壽司忍者御守",
    nameEn: "Kura Original: Sushi Ninja Amulet",
    svgColor: "#B4F8C8", // Green capsule
    iconColor: "#67A234", // Matcha Green
    descriptionZh: "原創特製壽司忍者造型掛繩，保佑您享盡天下珍饈食安無憂。",
    descriptionEn: "Original character Sushi Ninja protective amulet ensuring safe & tasty dining."
  },
  {
    id: "toy_golden_sushi_plate",
    nameZh: "尊榮特選：極光黃金餐盤鑰匙圈",
    nameEn: "VIP Gold Sushi Plate Keychain",
    svgColor: "#FBE7C6", // Gold capsule
    iconColor: "#E0A23B", // Gold
    descriptionZh: "超稀有金蛋特別賞！複刻藏壽司黃金回收槽餐盤設計，極高榮耀象徵！",
    descriptionEn: "Super ultra-rare gold capsule! Mini replica of Kura's legendary golden dish."
  },
  {
    id: "toy_kura_mini_lantern",
    nameZh: "佐藤可士和聯名：迷你門前燈籠",
    nameEn: "Sato Kashiwa Mini Lantern Model",
    svgColor: "#FFF", // White capsule
    iconColor: "#16181C", // Charcoal
    descriptionZh: "微縮複刻全球最大旗艦店前懸掛之『藏』字紅白大燈籠，文創風雅之最。",
    descriptionEn: "Mini replica of the monumental 'Kura' paper lantern hanging at flagships."
  }
];
