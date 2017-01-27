App({
  onLaunch () {
    wx.request({
      url: "https://raw.githubusercontent.com/Hongwing/MiniApp/master/data/FLOWER.json",
      header: {
        "Content-Type": "application/json"
      },
      success: (res)=> {
        this.globalData.flowerData = res.data.FlowerData;
      },
      fail: (err)=> {
        return err;
      }
    });
  },

  globalData: {
    flowerData: []
  }
});