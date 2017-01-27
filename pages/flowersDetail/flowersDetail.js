var app = getApp();

Page(
  {
    data: {
      flowerData: []
    },
    onLoad(){
      this.setData({
        flowerData: app.globalData.flowerData
      })
    }
  }
);