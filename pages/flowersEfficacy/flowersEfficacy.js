var app = getApp();

Page(
  {
    data: {
      Flower: {}
    },
    onLoad(option){
      var flower = app.getFlowerElementByName(option.name);
      this.setData({
        Flower: flower
      });
    }
  }
);