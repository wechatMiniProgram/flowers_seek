Page({
  data: {
    name: '',
    alias: '',
    efficacy: ''
  },
  onLoad() {
    var name = wx.getStorageSync('name');
    var alias = wx.getStorageSync('alias');
    var efficacy = wx.getStorageSync('efficacy');
    this.setData({
      name,
      alias,
      efficacy
    });
  }
});