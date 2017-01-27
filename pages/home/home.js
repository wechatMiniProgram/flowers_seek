Page({
  data: {
    inputName: 'jjjjj',
    flowerData: [],
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
      wx.request({
        url: "https://raw.githubusercontent.com/Hongwing/MiniApp/master/data/FLOWER.json",
        header: {
          "Content-Type": "application/json"
        },
        success: (res)=> {
          this.setData({
            flowerData: res.data.FlowerData
          })
        },
        fail: (err)=> {
          return err;
        }
      });
      this.data.flowerData.find((flower)=> {
        if (flower.name === this.data.inputName) {
          wx.navigateTo({
            url: "../flowersEfficacy/flowersEfficacy?name="+flower.name
          })
        }
      });
      this.showToast('抱歉 查无此花');
    }
  },

  jumpSearch(e){
    console.log(e.target.value)

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
