Page({
  data: {
    inputName: '',
  },

  changeData(e) {
    this.setData({
      inputName: e.detail.value
    });
  },

  onSearch(e) {
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

  jumpSearch(){
    wx.navigateTo({
      url: "../flowersEfficacy/flowersEfficacy"
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
