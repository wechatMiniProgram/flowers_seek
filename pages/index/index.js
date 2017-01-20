Page({
  data: {
    inputName: '',
  },
  bindNameInput: function (e) {
    this.setData({
      inputName: e.detail.value
    })
  },
  onSearch: function () {
    if (this.data.inputName === "太阳花") {
      wx.navigateTo({
        url: "../flowersInfo/flowersInfo"
      })

    }
  }
});
