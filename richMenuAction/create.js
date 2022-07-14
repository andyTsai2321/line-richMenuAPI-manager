const richmenu = require('../richMenu/create');
const setting = require('../setting.js');

// 創建rich menu
function createRichMenu() {
  const newRichMenu = new richmenu(setting.richMenuData)
  newRichMenu.runCreate();
}

createRichMenu();
