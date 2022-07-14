const richmenu = require('../richMenu/getRichMenuList');
const setting = require('../setting.js');

function getMenuList() {
  const newRichMenu = new richmenu({
    channelAccessToken: setting.accessToken,
  })
  newRichMenu.getRichMenu();
}

getMenuList();
