// pages/prize/prize.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:"../../images/gobg.png",
    wechat:"../../images/wechat.png",
    quan:"../../images/quan.png",
    code:"E7AI98",
    inputValue:"",
    maskHidden: false,
    name:"",
    touxiang:"",
    code: "E7A93C",
    imagePath:""
  },
  //获取输入框的值
  bindKeyInput:function(e){
    this.setData({
      inputValue: e.detail.value
    })
  },
  //点击提交按钮
  btnclick:function(){
    var text = this.data.inputValue
    wx.showToast({
      title: text,
      icon: 'none',
      duration: 2000
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getUserInfo({
      success: res => {
        console.log(res.userInfo,"huoqudao le ")
        this.setData({
          name: res.userInfo.nickName,
        })
        wx.downloadFile({
          url: res.userInfo.avatarUrl, //仅为示例，并非真实的资源
          success: function (res) {
            // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
            if (res.statusCode === 200) {
              console.log(res, "reererererer")
              that.setData({
                touxiang: res.tempFilePath
              })
            }
          }
        })
      }
    })

  },
  //将canvas转换为图片保存到本地，然后将图片路径传给image图片的src
  createNewImg: function () {
    var that = this;
    var rpx=1;
    var x=0;
    var y=0;
    var w=375;
    var h=667;
    var r=20;
    var ctx = wx.createCanvasContext('mycanvas');
    ctx.setFillStyle("#ffe200")
    ctx.fillRect(0, 0, 375, 667)
    ctx.setFillStyle("#ffe200")
    // ctx.beginPath();
    // ctx.setFillStyle('#ffffff');
//     ctx.arc(x + r, y + r, r, Math.PI, Math.PI * 1.5);
//     ctx.moveTo(x + r, y);
// ctx.lineTo(x + w - r, y);
// ctx.lineTo(x + w, y + r);
// ctx.arc(x + w - r, y + r, r, Math.PI * 1.5, Math.PI * 2);
// ctx.lineTo(x + w, y + h - r);
// ctx.lineTo(x + w - r, y + h);
// ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * 0.5);
// ctx.lineTo(x + r, y + h);
// ctx.lineTo(x, y + h - r);
// ctx.arc(x + r, y + h - r, r, Math.PI * 0.5, Math.PI);
// ctx.lineTo(x, y + r);
// ctx.lineTo(x + r, y);
// ctx.fill();
// ctx.setGlobalAlpha(0.04);
// ctx.setShadow(0, 2, 4, '#000000')
// ctx.closePath();
// ctx.draw(true)

ctx.setTextAlign('left')
ctx.setFillStyle('#F52340')
// ctx.setFontSize(14)
ctx.font='normal normal 14px sans-serif'
ctx.fillText('特权价￥', 11*rpx, 501*rpx)

    // var path = "/images/gobg.png";
    // //将模板图片绘制到canvas,在开发工具中drawImage()函数有问题，不显示图片
    // //不知道是什么原因，手机环境能正常显示
    // context.drawImage(path, 0, 0, 375, 183);
    // var path1 = that.data.touxiang;
    // console.log(path1,"path1")
    // //将模板图片绘制到canvas,在开发工具中drawImage()函数有问题，不显示图片
    // var path2 = "/images/txquan.png";
    // var path3 = "/images/heise.png";
    // var path4 = "/images/wenziBg.png";
    // var path5 = "/images/wenxin.png";
    // context.drawImage(path2, 126, 186, 120, 120);
    // //不知道是什么原因，手机环境能正常显示
    // // context.save(); // 保存当前context的状态

    // var name = that.data.name;
    // //绘制名字
    // context.setFontSize(24);
    // context.setFillStyle('#333333');
    // context.setTextAlign('center');
    // context.fillText(name, 185, 340);
    // context.stroke();
    // //绘制一起吃面标语
    // context.setFontSize(14);
    // context.setFillStyle('#333333');
    // context.setTextAlign('center');
    // context.fillText("邀请你一起去吃面", 185, 370);
    // context.stroke();
    // //绘制验证码背景
    // context.drawImage(path3, 48, 390, 280, 84);
    // //绘制code码
    // context.setFontSize(40);
    // context.setFillStyle('#ffe200');
    // context.setTextAlign('center');
    // context.fillText(that.data.code, 185, 435);
    // context.stroke();
    // //绘制左下角文字背景图
    // context.drawImage(path4, 25, 520, 184, 82);
    // context.setFontSize(12);
    // context.setFillStyle('#333');
    // context.setTextAlign('left');
    // context.fillText("进入小程序输入朋友的邀请", 35, 540);
    // context.stroke();
    // context.setFontSize(12);
    // context.setFillStyle('#333');
    // context.setTextAlign('left');
    // context.fillText("码，朋友和你各自获得通用", 35, 560);
    // context.stroke();
    // context.setFontSize(12);
    // context.setFillStyle('#333');
    // context.setTextAlign('left');
    // context.fillText("优惠券1张哦~", 35, 580);
    // context.stroke();
    // //绘制右下角扫码提示语
    // context.drawImage(path5, 248, 578, 90, 25);
    // //绘制头像
    // context.arc(186, 246, 50, 0, 2 * Math.PI) //画出圆
    // context.strokeStyle = "#ffe200";
    // context.clip(); //裁剪上面的圆形
    // context.drawImage(path1, 136, 196, 100, 100); // 在刚刚裁剪的园上画图
    ctx.draw(true, wx.canvasToTempFilePath({
      canvasId: 'mycanvas',
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        that.setData({
          imagePath: tempFilePath,
          canvasHidden:true
        });
        // wx.previewImage({
        //   urls: Array(tempFilePath)
        // })
      },
      fail: function (res) {
        console.log(res);
      }
    }))

    
    //将生成好的图片保存到本地，需要延迟一会，绘制期间耗时
    // setTimeout(function () {
     
    // }, 200);
  },
  //点击保存到相册
  baocun:function(){
    var that = this
    wx.saveImageToPhotosAlbum({
      filePath: that.data.imagePath,
      success(res) {
        wx.showModal({
          content: '图片已保存到相册，赶紧晒一下吧~',
          showCancel: false,
          confirmText: '好的',
          confirmColor: '#333',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定');
              /* 该隐藏的隐藏 */
              that.setData({
                maskHidden: false
              })
            }
          },fail:function(res){
            console.log(11111)
          }
        })
      }
    })
  },
  //点击生成
  formSubmit: function (e) {
    var that = this;
    this.setData({
      maskHidden: false
    });
    wx.showToast({
      title: '装逼中...',
      icon: 'loading',
      duration: 1000
    });
    setTimeout(function () {
      wx.hideToast()
      that.createNewImg();
      that.setData({
        maskHidden: true
      });
    }, 1000)
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
    var that = this;
    wx.getUserInfo({
      success: res => {
        console.log(res.userInfo, "huoqudao le ")
        this.setData({
          name: res.userInfo.nickName,
        })
        wx.downloadFile({
          url: res.userInfo.avatarUrl, //仅为示例，并非真实的资源
          success: function (res) {
            // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
            if (res.statusCode === 200) {
              console.log(res, "reererererer")
              that.setData({
                touxiang: res.tempFilePath
              })
            }
          }
        })
      }
    })
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
  onShareAppMessage: function (res) {
    return {
      title:"这个是我分享出来的东西",
      success:function(res){
        console.log(res,"转发成功")
      },
      fail:function(res){
        console.log(res,"转发失败")
      }
    }
  },
  creatShareImageTap(){

    var rpx=1;
    var that=this;
    const url='https://ylhmuying.oss-cn-beijing.aliyuncs.com/other/20200423165507ad.jpg';
    this.drawCanvas('',url,rpx)
  },
  drawCanvas: function (sourceData,url,rpx){
    var that=this;
    let promise1 = new Promise(function (resolve, reject) {
      wx.getImageInfo({
        src: url,
        success: function (res) {
          resolve(res);
        }
      })
    });
    Promise.all([
      promise1
    ]).then(res=>{
      console.log('转换------',res)
      const ctx = wx.createCanvasContext('goods-share');
      ctx.fillRect(0, 0, 264*rpx, 376*rpx);
      // ctx.lineJoin = "round";
      // ctx.lineWidth = 10;
      ctx.strokeStyle = "#F52340";
      ctx.strokeRect(0, 0, 264*rpx,376*rpx);
      ctx.setFillStyle('white');
      ctx.fillRect(0, 264*rpx, 264*rpx, 112*rpx);
      ctx.drawImage(res[0].path, 202*rpx, 309*rpx, 40*rpx, 40*rpx)
     
      // 总宽度545
      //绘制说明
      ctx.setTextAlign('left')
      ctx.setFillStyle('#333')
      ctx.setFontSize(10)
      // ctx.fillText(sourceData.title, 50, 500)
      //that.drawText(ctx, sourceData.title, 50, 500, 200, 435);
      // that.dealWords({
      //   ctx: ctx,//画布上下文
      //   fontSize: 10,//字体大小
      //   word: sourceData.goodsName,//需要处理的文字
      //   maxWidth: 248*rpx,//一行文字最大宽度
      //   x: 8*rpx,//文字在x轴要显示的位置
      //   y: 264*rpx,//文字在y轴要显示的位置
      //   maxLine: 2//文字最多显示的行数
      // })
      ctx.setTextAlign('left')
      ctx.setFillStyle('#F52340')
      ctx.setFontSize(10)
      ctx.fillText('特权价￥', 8, 312*rpx)
      ctx.setTextAlign('left')
      ctx.setFillStyle('#F52340')
      ctx.setFontSize(16)
      ctx.fillText('1111',49*rpx, 312*rpx)
      // sourceData.selectPrice
      ctx.setLineWidth(1);
      ctx.setStrokeStyle('#333')
      ctx.moveTo(29*rpx, 327*rpx);
      ctx.lineTo(59*rpx, 327*rpx);
  
      ctx.setTextAlign('left')
      ctx.setFillStyle('#999')
      ctx.setFontSize(10)
      ctx.fillText('售价￥',8,332*rpx)
  
      ctx.setTextAlign('left')
      ctx.setFillStyle('#666')
      ctx.setFontSize(10)
      ctx.fillText('22222', 38*rpx, 350*rpx)
  
      ctx.setTextAlign('left')
      ctx.setFillStyle('#999')
      ctx.setFontSize(8)
      ctx.fillText('邀请好友享受内部优惠价', 38*rpx, 365*rpx)
  
      ctx.stroke()
      ctx.draw()
    })
    wx.showLoading({
      title: '分享图生成中...'
    })
    setTimeout(function () {
      that.share2();
    }, 2000);
  },
  drawText: function (ctx, str, leftWidth, initHeight, titleHeight, canvasWidth) {
    var lineWidth = 0;
    var lastSubStrIndex = 0; //每次开始截取的字符串的索引
    for (let i = 0; i < str.length; i++) {
      lineWidth += ctx.measureText(str[i]).width;
      if (lineWidth > canvasWidth) {
        ctx.fillText(str.substring(lastSubStrIndex, i), leftWidth, initHeight); //绘制截取部分
        initHeight += 40; //设置字体高度
        lineWidth = 0;
        lastSubStrIndex = i;
        titleHeight += 30;
      }
      if (i == str.length - 1) { //绘制剩余部分
        ctx.fillText(str.substring(lastSubStrIndex, i + 1), leftWidth, initHeight);
      }
    }
    // 标题border-bottom 线距顶部距离
    titleHeight = titleHeight + 10;
    return titleHeight
  },
  
  dealWords: function (options) {
    options.ctx.setFontSize(options.fontSize);//设置字体大小
    var allRow = Math.ceil(options.ctx.measureText(options.word).width / options.maxWidth);//实际总共能分多少行
    var count = allRow >= options.maxLine ? options.maxLine : allRow;//实际能分多少行与设置的最大显示行数比，谁小就用谁做循环次数
    var endPos = 0;//当前字符串的截断点
    for (var j = 0; j < count; j++) {
      var nowStr = options.word.slice(endPos);//当前剩余的字符串
      var rowWid = 0;//每一行当前宽度  
      if (options.ctx.measureText(nowStr).width > options.maxWidth) {//如果当前的字符串宽度大于最大宽度，然后开始截取
        for (var m = 0; m < nowStr.length; m++) {
          rowWid += options.ctx.measureText(nowStr[m]).width;//当前字符串总宽度
          if (rowWid > options.maxWidth) {
            if (j === options.maxLine - 1) { //如果是最后一行
              options.ctx.fillText(nowStr.slice(0, m - 1) + '...', options.x, options.y + (j + 1) * 15);  //(j+1)*18这是每一行的高度    
            } else {
              options.ctx.fillText(nowStr.slice(0, m), options.x, options.y + (j + 1) * 15);
            }
            endPos += m;//下次截断点
            break;
          }
        }
      } else {//如果当前的字符串宽度小于最大宽度就直接输出
        options.ctx.fillText(nowStr.slice(0), options.x, options.y + (j + 1) * 15);
      }
    }
  },
  share2: function () {
    var that = this
    wx.canvasToTempFilePath({
      // x: 0,
      // y: 0,
      // width: 375,
      // height: 667,
      // destWidth: 375*3,
      // destHeight: 667*3,
      canvasId: 'goods-share',
      success: function (res) {
        console.log('share分享图--------',res.tempFilePath)
            that.setData({
              imagePath: res.tempFilePath
            })
        //生成分享图片之后直接显示
        wx.hideLoading();
        //that.previewImage1();
      },
      fail: function (res) {
        // console.log(res)
      }
    })
  },
  previewImage1: function () {
    var that = this
    var wximg = that.data.imagePath;
    wx.previewImage({
      urls: Array(wximg)
    })
  },
})