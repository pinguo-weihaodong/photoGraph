//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.redirectTo({
      url: '../home/home'
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onLogin: function () {
    // wx.request({
    //   url: 'test.php',
    //   data: {
    //     x: '' ,
    //     y: ''
    //   },
    //   header:{
    //       "Content-Type":"application/json"
    //   },
    //   success: function(res) {
    //     var data = res.data;
    //   }
    // });
  }
})
