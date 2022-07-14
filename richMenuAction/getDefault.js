const richmenu = require('../richMenu/getRichMenuList');
const setting = require('../setting.js');

// 取得目前預設
function getDefault() {
  if(!setting.accessToken){
    console.log('缺少token');
    return
  }
  const newRichMenu = new richmenu({
    channelAccessToken: setting.accessToken,
  })
  newRichMenu.getDefaultMenu();
}

getDefault();
