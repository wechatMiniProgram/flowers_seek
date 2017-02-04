App({
  onLaunch () {
    // request json
    wx.request({
      url: this.globalData.dataUrl,
      header: {
        "Content-Type": "application/json"
      },
      success: (res)=> {
        this.globalData.flowerData = res.data.FlowerData;
      },
      fail: (err)=> {
        return err;
      }
    })
  },
  getFlowerElementByName (name) {
    // function
    var element = {}
    for (var i = 0; i < this.globalData.flowerData.length; i++) {
      if (name === this.globalData.flowerData[i].name) {
        element = this.globalData.flowerData[i]
      }
    }
    return element
  },
  getUserInfo: function (cb) {
    var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else {
      // 调用登录接口
      wx.login({
        success: function(){
          // success
          wx.getUserInfo({
            success: function(res){
              // success
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    dataUrl: "https://raw.githubusercontent.com/Hongwing/MiniApp/master/data/FLOWER.json",
    userInfo: null,
    flowerData: [],
    currentFlower: {}
  }
});

/** 服务器资源下载上传处理（舍弃） */
/*
    wx.downloadFile ({
      url: "https://raw.githubusercontent.com/Hongwing/MiniApp/master/data/FLOWER.json",
      header: {
        "Content-Type": "application/json"
      },
      success: function (res){
        // 本地文件缓存清理 
        wx.getSavedFileList({
          success: function(res){
            // success
            if (res.fileList.length > 0) {
              for (var i = 0; i < res.fileList.length-1; i++) {
                wx.removeSavedFile({
                  filePath: res.fileList[i].filePath,
                  success: function(res){
                    // success
                    console.log(res)
                  },
                })
              }
            }
          }
        })

        // 将res.data缓存到本地
        var tempFilePath = res.tempFilePath
        wx.saveFile({
          tempFilePath: tempFilePath,
          success: function(res){
            console.log("save" + res.savedFilePath)

            wx.getSavedFileInfo({
              filePath: res.savedFilePath,
              success: function(res){
                console.log(res.size)
                console.log(res.createTime)
              }
            })
          }
        })

        // test
        wx.getSavedFileList({
          success: function(res){
            var length = res.fileList.length;
            console.log("======" + res.fileList [length-1].filePath)
          }
        })
      }
    });*/