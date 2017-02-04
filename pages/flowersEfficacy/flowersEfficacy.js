var app = getApp();

Page(
  {
    data: {
      Flower: {}
    },
    onLoad(option){
      console.log(option)
      var flower = app.getFlowerElementByName(option.name)    
      this.setData({
        Flower: flower
      })
      /* app.globalData.flowerData.find((flower)=> {
        if (flower.name === option.name) {
          this.setData({
            name: option.name,
            category: flower.category,
            otherName: flower.otherName,
            efficiency: flower.efficiency,
            imageUrl: flower.url,
          })
        }
      });*/
    }
  }
);