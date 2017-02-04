// 获取实例
var app = getApp()

Page({
    data: {
        motto: "Mr. Right",
        userInfo: {}
    },
    onLoad: function () {
        var that = this
        // 调用实例方法获取全局数据
        app.getUserInfo(function(userInfo) {
            // 更新数据
            that.setData({
                userInfo: userInfo
            })
        })
    },
    // 事件处理函数
    bindViewTap: function () {
        
    }
})