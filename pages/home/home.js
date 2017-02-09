var app = getApp();

Page({
  data: {
    inputName: '',
    oftenOne: ['太阳花', '百合花', '风信子'],
    oftenTwo: ['月季花', '七色花', '玫瑰花'],
    oftenThere: ['彼岸花', '水仙花', '丁香花']
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
      const flower = app.globalData.flowerData.find((flower)=>
        flower.name === this.data.inputName
      );

      if (flower) {
        wx.navigateTo({
          url: "../flowersEfficacy/flowersEfficacy?name=" + flower.name
        })
      } else {
        this.showToast('抱歉 查无此花');
      }
    }
  },

  tapMe (e) {
    console.log(e)
    console.log(e.type)
  },

  jumpSearch(e){
    wx.navigateTo({
      url: "../flowersEfficacy/flowersEfficacy?name=" + e.target.id
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
