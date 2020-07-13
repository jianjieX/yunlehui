// component/live/index.js
Component({
  lifetimes:{
    attached:function(){
      console.log(this.data.phone)
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    phone:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
      msg:'22222'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    statechange(e) {
      console.log('live-pusher code:', e.detail.code)
    },
    onTab:function(){
      this.setData({
        msg:'组件内改变'
      })
    },
    changeParent:function(){
      var myEventDetail={
        val:'您好'
      }
      var myEventOption={

      }
      this.triggerEvent('myevent',myEventDetail,myEventOption)
    }
  }
})
