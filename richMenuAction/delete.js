const richmenu = require('../richMenu/getRichMenuList');
const setting = require('../setting.js');

/**
 * 刪除
 * 記得帶richMenuId
 */
function deleteRichMenu() {
  const newRichMenu = new richmenu({
    channelAccessToken: setting.accessToken,
    richMenuId: setting.richMenuId,
  })
  newRichMenu.deleteRichMenu();
}

deleteRichMenu();
