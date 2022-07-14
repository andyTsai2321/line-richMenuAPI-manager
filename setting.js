const path = require('path');

// 必填，Line channel token
const token = '';

module.exports = {
  accessToken: token,

  /**
  * 創建rich menu需設置
  * 如想了解更多，可參考line API文檔https://developers.line.biz/en/reference/messaging-api/#rich-menu
  */
  richMenuData: {
    channelAccessToken: token,
    richMenuConfig: {
      "size": {
        "width": 2500,
        "height": 1686
      },
      "selected": false,
      "name": "Nice richmenu",
      "chatBarText": "Tap here",
      "areas": [
        {
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 2500,
            "height": 1686
          },
          "action": {
            "type": "postback",
            "data": "action=buy&itemid=123"
          }
        }
      ]
    },
    // 圖片路徑，範例:path.join(__dirname, './images/abc.png')
    imagePath: path.join(__dirname, '')
  },

  // 刪除需設置
  richMenuId: "",
};
