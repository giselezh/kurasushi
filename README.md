# 藏壽司台灣企業策略個案分析與互動體驗實驗室
## Kura Sushi Taiwan Case Study & Lab

歡迎使用 **台灣藏壽司策略個案與互動體驗實驗室** 專案！本專案是一個兼具學術深度與高互動性視覺化體驗的單頁應用程式 (SPA)，涵蓋了 PESTEL 分析、波特五力雷達圖、VRIO 矩陣、特色價值鏈、安索夫成長矩陣、以及模擬真實藏壽司餐桌與 Bikkura Pon 扭蛋機的互動實驗室。

為了讓您能有最極致的本地開發與即時預覽體驗，本專案已配置了**「隨開即用」的零依賴 (Zero-Dependency) 本地即時預覽開發伺服器**。

---

## ⚡ 快速啟動本地開發伺服器 (Windows)

我們為您編寫了一個高效率的 PowerShell 本地開發伺服器，它會**自動監控專案檔案**，當您修改 `index.html`、`style.css`、`app.js` 或其他元件時，瀏覽器會**自動且瞬間重整** (Live Reload)！

### 方法 A：雙擊啟動（最簡單）
1. 在 Windows 檔案總管中，直接雙擊 **`start-dev-server.bat`**。
2. 系統會自動開啟命令提示字元並啟動伺服器，同時**自動在您的預設瀏覽器中打開** `http://localhost:3000`。
3. 保持該視窗開啟，即可享受即時的開發體驗！

### 方法 B：命令列啟動
如果您習慣在終端機 (PowerShell) 中工作，可以在專案根目錄下執行：
```powershell
.\dev-server.ps1
```

---

## 📦 技術亮點與伺服器架構

由於很多開發環境可能尚未安裝 `Node.js` (npm)、`Python` 等工具，我們採用了 **.NET Native HttpListener** 在 PowerShell 中實作了一套無依賴的伺服器：
* **自動埠口偵測**：如果 `3000` 連接埠已被佔用，伺服器會自動往後嘗試 `3001`、`3002`... 直到找到可用埠口，避免衝突。
* **智慧快取控制**：自動在 HTTP 標頭中加入 `Cache-Control: no-cache`，確保您的任何代碼修改都能即時呈現，不被瀏覽器快取干擾。
* **動態 Live Reload 注入**：伺服器會自動在您的 HTML 中注入極輕量級的 Live Reload 通訊腳本，以 800ms 的超低延遲比對專案檔案的 LastWriteTime 雜湊值，一有修改即瞬間完成重新整理。
* **完整 MIME 類型支援**：支援 HTML、CSS、JS、JSON、SVG、PNG、JPG、ICO、MP3、MP4 等所有靜態網頁資源，完美解決在本地使用 `file://` 協議開啟網頁時會遇到的 CORS 跨域限制問題。

---

## 📁 專案目錄結構

```text
kurasushi/
├── index.html              # 網頁主結構 (已設置 SEO 標記、Lucide 圖標與 Google Fonts)
├── style.css               # 主題樣式 (包含 HSL 調色盤、亮暗模式、高質感磨砂玻璃與過渡動畫)
├── app.js                  # 核心邏輯引擎 (包含雙語詞條資料庫、案例分析本文)
│
├── components/             # 互動式功能元件模組 (原 split 程式碼，供後續擴充使用)
│   ├── team.js             # 團隊成員與 D-ID 影片控制
│   ├── caseSections.js     # 個案大綱與 PESTEL 折疊面板
│   ├── conveyor.js         # 特快雙層迴轉壽司鏈
│   ├── tablet.js           # 點餐平板 UI 互動
│   ├── bikkurapon.js       # 扭蛋機核心動畫與機率引擎
│   ├── toyCabinet.js       # 扭蛋收藏閣
│   └── queue.js            # 虛擬排隊預約號碼牌生成器
│
├── data/                   # 靜態與語系數據
│   ├── menuData.js         # 壽司平板點餐菜單
│   └── translations.js     # 中英雙語翻譯字典
│
├── utils/                  # 輔助音效與專有名詞功能
│   ├── audio.js            # 點餐音效與新幹線抵達音效
│   ├── audioGuide.js       # 羅世民教授團隊語音導讀
│   └── glossary.js         # 專有名詞小百科 (Sidebar Drawer)
│
├── dev-server.ps1          # 零依賴 Live Local Dev 伺服器 (PowerShell)
├── start-dev-server.bat    # Windows 快速啟動批次檔
└── package.json            # (選用) 用於 Node.js 環境的 Vite 配置檔
```

---

## 🛠️ (選用) 使用 Node.js + Vite 開發

如果您已經安裝了 Node.js，並且想使用業界標準的 Vite 進行開發或打包，我們也為您保留了 `package.json` 與 `vite.config.js`：

1. **安裝依賴**：
   ```bash
   npm install
   ```
2. **啟動開發伺服器**：
   ```bash
   npm run dev
   ```
3. **打包生產版本**：
   ```bash
   npm run build
   ```

---

*祝您開發愉快！如有任何問題，歡迎隨時與 Antigravity 進行 Pair-Programming 討論。*
