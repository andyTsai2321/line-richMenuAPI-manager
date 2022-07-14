const path = require('path');

// 必填，Line channel token
const token = '';

module.exports = {
  accessToken: token,
  
  // 創建rich menu需設置
  richMenuData: {
    channelAccessToken: token,
    richMenuConfig: {
      "size": {
        "width": 2500,
        "height": 1686
      },
      "selected": true,
      "name": "選單",
      "chatBarText": "查看更多資訊",
      "areas": [
        {
          "bounds": {
            "x": 53,
            "y": 103,
            "width": 598,
            "height": 743
          },
          "action": {
            "type": "message",
            "text": "動作 1"
          }
        },
        {
          "bounds": {
            "x": 895,
            "y": 107,
            "width": 734,
            "height": 747
          },
          "action": {
            "type": "message",
            "text": "動作 2"
          }
        },
        {
          "bounds": {
            "x": 1803,
            "y": 78,
            "width": 689,
            "height": 759
          },
          "action": {
            "type": "message",
            "text": "動作 3"
          }
        },
        {
          "bounds": {
            "x": 436,
            "y": 887,
            "width": 615,
            "height": 799
          },
          "action": {
            "type": "message",
            "text": "動作 4"
          }
        },
        {
          "bounds": {
            "x": 1382,
            "y": 895,
            "width": 705,
            "height": 791
          },
          "action": {
            "type": "message",
            "text": "範圍 5"
          }
        }
      ]
    },
    imagePath: path.join(__dirname, './images/abc.png') // 圖片路徑
  },
  
  // 刪除需設置
  richMenuId: "",
};
