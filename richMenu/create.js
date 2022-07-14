const createMenu = require('@line/bot-sdk');
const fs = require('fs')

class Richmenu {
  constructor(data) {
    this.channelAccessToken = data.channelAccessToken
    this.richMenuId = ''
    this.richMenuConfig = data.richMenuConfig
    this.imagePath = data.imagePath
    this.client = new createMenu.Client({
      channelAccessToken: data.channelAccessToken
    });
  }

  async runCreate () {
    try {
      let step1 = await this.createRichMenu();
      let step2 = await this.uploadImg();
      let step3 = await this.setDefault();
      console.log('rich menu設置完成')
    } catch(e) {
      console.log('rich menu設置失敗 ', e.statusMessage)
    }
  }


  createRichMenu(){
    return this.client.createRichMenu(this.richMenuConfig)
      .then((richMenuId) => {
          console.log('Step 1 創建richMenu完成', richMenuId);
          this.richMenuId = richMenuId
        }
      )
  }

  uploadImg(){
    if(!this.richMenuId){
      console.log('missing richMenuId');
      return Promise.reject();
    }
    return this.client.setRichMenuImage(this.richMenuId, fs.createReadStream(this.imagePath))
      .then(res => {
        console.log('Step 2 上傳圖片完成', res);
      })
  }

  setDefault(){
    return this.client.setDefaultRichMenu(this.richMenuId)
      .then((res) => {
          console.log('Step 3 rich menu已設為預設');
        }
      )
  }
}

module.exports = Richmenu
