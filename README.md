## 將 SCSS 以及 API 的基本共用設定移出來做共用管理

###API 串接使用 nuxt axios
在 plugin 中首先引入 api 資料夾底下預先設定好的 axios 參數,然後再 inject 設定好的 api 方法到全域的 nuxt 物件底下,
在專案中就可以用$api 進行調用,進行擴充時,只需要在 api 資料夾,新增 js 檔案(相關功能寫在同一支 js),每支 js 都以 api 功能去命名,可以快速地擴充並且方便維護

###SCSS 架構
共用的設定、reset 全部寫在 helpers 資料夾中,每頁共用的元件寫在(例如 header)寫在 layouts 資料夾,個別頁面的 SCSS 會在 AllPage.scss 中被引入,每一個頁面一支 scss 檔案,由於每個 page 最外層都有 main-content 的 class 所以共用的樣式可以寫在 main-content 中,個別頁面的 scss 只要專注自己的樣式即可,主題變換的顏色則寫在\_variable.scss 由 CSS 的變數引入 SCSS 的變數
