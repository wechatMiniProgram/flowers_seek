var app = getApp();

Page({
    data: {
        inputName: '',
        oftenOne: ['太阳花', '百合花', '风信子'],
        oftenTwo: ['月季花', '七色花', '玫瑰花'],
        oftenThere: ['彼岸花', '水仙花', '丁香花'],
        pictureUrl: ''
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
            const flower = app.globalData.flowerData.find((flower) =>
                flower.name === this.data.inputName
            );

            if (flower) {
                wx.navigateTo({
                    url: "../flowersEfficacy/flowersEfficacy?name=" + flower.name
                })
            } else {
                this.showToast('抱歉 查无此花');
            }
        }
    },

    tapMe (e) {
        console.log(e)
        console.log(e.type)
    },

    jumpSearch(e){
        wx.navigateTo({
            url: "../flowersEfficacy/flowersEfficacy?name=" + e.target.id
        })
    },

    showToast(title){
        wx.showToast({
            title,
            icon: 'loading',
            duration: 10000
        });

        setTimeout(() => {
            wx.hideToast()
        }, 800)
    },

    uploadPicture(){
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: (res) => {
                var tempFilePaths = res.tempFilePaths;
                this.setData({
                    pictureUrl: tempFilePaths[0]
                });
                wx.showToast({
                    title: "正在上传",
                    icon: "loading",
                    duration: 1000
                });
            }
        })
    },
});
