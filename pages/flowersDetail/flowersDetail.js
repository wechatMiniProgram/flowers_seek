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
    },

    seekMeaning(e){
      console.log(e.target.id)
      wx.navigateTo({
        url: "../flowersMeaning/flowersMeaning?name=" + e.target.id
      })
    }
  }
);