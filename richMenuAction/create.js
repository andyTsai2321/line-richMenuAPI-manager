const richmenu = require('../richMenu/create');
const setting = require('../setting.js');

// 創建rich menu
function createRichMenu() {
  if(!setting.richMenuData || !setting.richMenuData.channelAccessToken){
    console.log('缺少資料');
    return
  }
  const newRichMenu = new richmenu(setting.richMenuData)
  newRichMenu.runCreate();
}

createRichMenu();
