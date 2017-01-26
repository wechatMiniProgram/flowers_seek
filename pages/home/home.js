Page({
  data: {
    inputName: '',
  },
  onSearch: function (e) {
    console.log(e)
    if (this.data.inputName === '') {
      this.showToast('请您输入名称');
    } else if (this.data.inputName === "太阳花") {
      wx.navigateTo({
        url: "../flowersEfficacy/flowersEfficacy"
      })
    } else {
      this.showToast('抱歉 查无此花');
    }
  },

  changeData: function (e) {
    this.setData({
      inputName: e.detail.value
    });
  },

  showToast(title){
    wx.showToast({
      title,
      icon: 'loading',
      duration: 10000
    });

    setTimeout(function () {
      wx.hideToast()
    }, 800)
  }
});
