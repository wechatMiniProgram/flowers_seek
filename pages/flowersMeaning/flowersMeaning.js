// display.js
var app = getApp()
var flowerData = {}
wx.request({
  url: "https://raw.githubusercontent.com/Hongwing/MiniApp/master/data/FLOWER.json",
  success: function(res){
    console.log("success\n" + res.data)
    flowerData = res.data
  },
  fail: function() {
    // fail
  },
  complete: function() {
    // complete
  }
})

Page({
  data: {
    flowerArray: [],
    flower: {}
  },
  onShow: function () {
    this.setData({
      flower: flowerData.FlowerData[0],
      flowerArray: flowerData.FlowerData
    })
    console.log(this.data.flower.url)
  }
})