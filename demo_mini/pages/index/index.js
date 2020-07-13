//index.js
//获取应用实例
const app = getApp()
const log=require('../../utils/log.js')
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    value:"",
    shopDoorPic:''
  },
  chooseVideo(){
    wx.chooseVideo({
      success (res) {
        console.log(res);
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success (res){
            const data = res.data
            //do something
          }
        })
      }
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow:function(){
    log.info('33333333333333333333333333333333')
    log.warn('22222222222222222222222222222222')
    log.error('4444444444444444444444444444444')
    log.setFilterMsg('filterkeyword')
    let roomId = [1] // 房间号
    let customParams = { path: 'pages/index/index', pid: 1 } // 开发者在直播间页面路径上携带自定义参数（如示例中的path和pid参数），后续可以在分享卡片链接和跳转至商详页时获取，详见【获取自定义参数】、【直播间到商详页面携带参数】章节
    this.setData({
        roomId,
        customParams: encodeURIComponent(JSON.stringify(customParams))
    })
  },
  test:function(){
    console.log('测试测试');
    log.info('查看日志');
  },
  change:function(e){
    console.log(e.detail)
    this.setData({
      value:e.detail.val
    })
  },
  onLoad: function () {
    var a=',https://ylhmuying.oss-cn-beijing.aliyuncs.com/merchant/identityCardBack/20200415110303vQ.jpg,https://ylhmuying.oss-cn-beijing.aliyuncs.com/merchant/identityCardBack/20200330185558Hd.png,'
   a=a.split(',')
   this.setData({
    shopDoorPic:a
   })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  bindGetUserInfo (e) {
    console.log(e.detail.userInfo)
  },
  getPhoneNumber (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  }
})
