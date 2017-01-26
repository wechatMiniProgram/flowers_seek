Page({
  data: {
    inputName: '',
  },
  bindNameInput: function (e) {
    this.setData({
      inputName: e.detail.value
    })
  },
  onSearch: function (e) {
    if (e.keyCode == 13) {
      if (this.data.inputName === '') {
        this.showToast('请您输入名称');
      } else if (this.data.inputName === "太阳花") {
        wx.navigateTo({
          url: "../flowersDetail/flowersDetail"
        })
      } else {
        this.showToast('抱歉 查无此花');
      }
    }
  },

  showToast(title){
    wx.showToast({
      title,
      icon: 'loading',
      duration: 10000
    });

    setTimeout(function () {
      wx.hideToast()
    }, 1000)
  }
});
