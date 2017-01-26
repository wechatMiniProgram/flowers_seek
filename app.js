App({
  init() {
    wx.setStorage({key: 'name', data: '太阳花'});
    wx.setStorage({key: 'alias', data: "半枝莲、狭叶韩信草、通经草、紫连草"});
    wx.setStorage({key: 'efficacy', data: "太阳花辛、苦，寒。归肺、肝、肾经。太阳花的功效与作用清热解毒，化瘀利尿。太阳花常用于疔疮肿毒，咽喉肿痛，毒蛇咬伤，跌扑伤痛，水肿，黄疸的治疗"});
  },
  onLaunch () {
    this.init();
    var name = wx.getStorageSync('name') || [];
    var alias = wx.getStorageSync('alias') || [];
    var efficacy = wx.getStorageSync('efficacy') || [];
  },
  globalData: {
    name: null,
    alias: null,
    efficacy: null,
  }
});