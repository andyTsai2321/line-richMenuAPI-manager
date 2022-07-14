const richmenu = require('../richMenu/getRichMenuList');
const setting = require('../setting.js');

/**
 * 刪除
 * 記得帶richMenuId
 */
function deleteRichMenu() {
  if(!setting.accessToken || !setting.richMenuId){
    console.log('缺少token或richMenuId');
    return
  }
  const newRichMenu = new richmenu({
    channelAccessToken: setting.accessToken,
    richMenuId: setting.richMenuId,
  })
  newRichMenu.deleteRichMenu();
}

deleteRichMenu();
