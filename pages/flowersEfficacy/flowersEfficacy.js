var app = getApp();

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
      app.globalData.flowerData.find((flower)=> {
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
    }
  }
);