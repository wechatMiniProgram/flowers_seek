var app = getApp();

Page({
  data: {
    inputName: '',
    oftenOne: ['太阳花', '百合花', '风信子'],
    oftenTwo: ['雏菊', '七色花', '玫瑰花'],
    oftenThere: ['彼岸花', '樱花', '丁香花']
  },

  changeData(e) {
    this.setData({
      inputName: e.detail.value
    });
  },

  onSearch(e) {
    if (this.data.inputName === '') {
      this.showToast('请您输入名称');
    } else {
      var flower = app.getFlowerElementByName(this.data.inputName)
      if (flower) {
        wx.navigateTo({
          url: "../flowersEfficacy/flowersEfficacy?name=" + flower.name
        })
      }else {
        this.showToast('抱歉 查无此花')
      }

      /*app.globalData.flowerData.find((flower)=> {
        if (flower.name === this.data.inputName) {
          wx.navigateTo({
            url: "../flowersEfficacy/flowersEfficacy?name=" + flower.name
          })
        }
      });*/
    }
  },

  tapMe (e) {
    console.log(e)
    console.log(e.type)
  },

  jumpSearch(e){
    console.log("navi" + e.detail.value)
    
    wx.navigateTo({
      url: "../flowersEfficacy/flowersEfficacy?name="
    })
  },

  showToast(title){
    wx.showToast({
      title,
      icon: 'loading',
      duration: 10000
    });

    setTimeout(()=> {
      wx.hideToast()
    }, 800)
  }
});
