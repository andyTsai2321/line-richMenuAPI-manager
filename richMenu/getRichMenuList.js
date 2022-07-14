const createMenu = require('@line/bot-sdk');

class getRichmenu {
  constructor(data) {
    this.richMenuId = data.richMenuId ? data.richMenuId : ''
    this.client = new createMenu.Client({
      channelAccessToken: data.channelAccessToken,
    });
  }

  getRichMenu(){
    this.client.getRichMenuList().then((richmenus) => {
      console.log(richmenus);
    });
  }
  
  getDefaultMenu(){
    this.client.getDefaultRichMenuId().then((richmenus) => {
      console.log(richmenus);
    });
  }

  deleteRichMenu(){
    if(!this.richMenuId){
      console.log('缺少richMenuId');
      return
    }
    this.client.deleteRichMenu(this.richMenuId).then((richmenus) => {
      console.log(richmenus);
    });
  }
}

module.exports = getRichmenu
