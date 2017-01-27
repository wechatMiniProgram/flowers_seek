Page(
  {
    data: {
      name: '',
      category: '',
      otherName: '' || '无',
      efficiency: '',
      imageUrl: ''
    },
    onLoad(option){
      wx.request({
        url: "https://raw.githubusercontent.com/Hongwing/MiniApp/master/data/FLOWER.json",
        header: {
          "Content-Type": "application/json"
        },
        success: (res)=> {
          res.data.FlowerData.find((flower)=> {
            if (flower.name === option.name) {
              this.setData({
                name: option.name,
                category: flower.category,
                otherName: flower.otherName,
                efficiency: flower.efficiency,
                imageUrl: flower.url,
              })
            }
          });
        },
        fail: (err)=> {
          return err;
        }
      });
    }
  }
);