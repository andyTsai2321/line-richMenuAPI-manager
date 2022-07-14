const richmenu = require('../richMenu/getRichMenuList');
const setting = require('../setting.js');

function getMenuList() {
  if(!setting.accessToken){
    console.log('缺少token');
    return
  }
  const newRichMenu = new richmenu({
    channelAccessToken: setting.accessToken,
  })
  newRichMenu.getRichMenu();
}

getMenuList();
