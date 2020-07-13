// pages/demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        icon:'https://hybrid.xiaoying.tv/miniprogram/viva-ad/1/1531385366950.jpeg',
        name:'水果生鲜11111'
      },
      {
        icon:'https://hybrid.xiaoying.tv/miniprogram/viva-ad/1/1531385366950.jpeg',
        name:'水果生鲜'
      },
      {
        icon:'https://hybrid.xiaoying.tv/miniprogram/viva-ad/1/1531385366950.jpeg',
        name:'水果生鲜'
      },
      {
        icon:'https://hybrid.xiaoying.tv/miniprogram/viva-ad/1/1531385366950.jpeg',
        name:'水果生'
      },
      {
        icon:'https://hybrid.xiaoying.tv/miniprogram/viva-ad/1/1531385366950.jpeg',
        name:'水果生鲜'
      },
      {
        icon:'https://hybrid.xiaoying.tv/miniprogram/viva-ad/1/1531385366950.jpeg',
        name:'水果生'
      },
      {
        icon:'https://hybrid.xiaoying.tv/miniprogram/viva-ad/1/1531385366950.jpeg',
        name:'水果生鲜'
      },
      {
        icon:'https://hybrid.xiaoying.tv/miniprogram/viva-ad/1/1531385366950.jpeg',
        name:'水果生鲜'
      },
      {
        icon:'https://hybrid.xiaoying.tv/miniprogram/viva-ad/1/1531385366950.jpeg',
        name:'水果生鲜'
      },
      {
        icon:'https://hybrid.xiaoying.tv/miniprogram/viva-ad/1/1531385366950.jpeg',
        name:'水果鲜'
      },
    ],
    shopDoorPic:[
      'https://hybrid.xiaoying.tv/miniprogram/viva-ad/1/1531385366950.jpeg',
      'https://hybrid.xiaoying.tv/miniprogram/viva-ad/1/1531385366950.jpeg',
      'https://hybrid.xiaoying.tv/miniprogram/viva-ad/1/1531385366950.jpeg'
    ],
    shops:[
      {
        id:1,
        name:1,
        list:[
          {
            goodsId:11,
            name:'商品11',
            num:1
          },
          {
            goodsId:12,
            name:'商品12',
            num:1
          }
        ]
      },
      {
        id:2,
        name:2,
        list:[
          {
            goodsId:21,
            name:'商品21',
            num:1
          },
          {
            goodsId:22,
            name:'商品22',
            num:1
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  location(){
    wx.getLocation({
      fail: () => {
        wx.getSetting({
          success: (res) => {
            let statu = res.authSetting
            console.log(statu)
            if(!statu['scope.userLocation']) {
              wx.showModal({
                title: '是否授权当前位置',
                content: '需要获取您的地理位置，请确认授权，否则用车功能将无法使用',
                success: (tip) => {
                  if(tip.confirm) {
                    wx.openSetting({
                      success: (data) => {
                        if (data.authSetting["scope.userLocation"] === true) {
                          wx.showToast({
                            title: '授权成功',
                            icon: 'success',
                            duration: 1000,
                            complete() {
                              resolve()
                            }
                          })
                        } else {
                          wx.showToast({
                            title: '授权失败',
                            icon: 'success',
                            duration: 1000,
                            complete() {
                              reject()
                            }
                          })
                        }
                      }
                    })
                  } else {
                   
                  }
                }
              })
            } else {
              wx.showModal({
                title: '获取位置信息失败',
                content: '请先开启手机定位，否则用车功能将无法使用'
              })
            
            }
          },
          fail: () => {
        
          }
        })
      },
      success: () => {
        const system = wx.getSystemInfoSync()
        console.log(system.locationEnabled)
        if(!system.locationEnabled) {
          wx.showModal({
            title: '获取位置信息失败',
            content: '请先开启手机定位，否则用车功能将无法使用'
          })
          
        }
      
      }
    })
  },
  chooseLocation(){
    wx.chooseLocation({
      success: function(e) {
       //允许打开定位
      },
      fail: () => {
      //不允许打开定位
        wx.getSetting({
          success: (res) => {
            console.log(res)
            if (!res.authSetting['scope.userLocation']) {
            //打开提示框，提示前往设置页面
              this.setData({
                layerModel: true
              })
            }
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let list=this.data.shops;
    // wx.downloadFile({
    //   url: 'http://downsc.chinaz.net/Files/DownLoad/sound1/202006/12986.mp3', //仅为示例，并非真实的资源
    //   success (res) {
    //     // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
    //     if (res.statusCode === 200) {
    //       console.log(res)
    //       wx.playVoice({
    //         filePath: res.tempFilePath
    //       })
    //     }
    //   }
    // })

const innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.autoplay = true
innerAudioContext.src = 'http://downsc.chinaz.net/Files/DownLoad/sound1/202006/12986.mp3'
innerAudioContext.onPlay(() => {
  console.log('开始播放')
})
innerAudioContext.onError((res) => {
  console.log(res.errMsg)
  console.log(res.errCode)
})


    list[0].list.forEach(item=>{
      item.num=wx.getStorageSync(JSON.stringify('商品'+item.goodsId))+Math.round(Math.random()*10);
      console.log(item)
      wx.setStorageSync(JSON.stringify('商品'+item.goodsId),item.num)
    })
    this.setData({
      shops:list
    })
    console.log(Math.round(Math.random()*10))
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})