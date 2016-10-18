var {root, loginRoot} = require("../../server/common.js");
var UserServer = require("../../server/user.js").User;

Page({
  data:{
    // text:"这是一个页面"
    page: 1,
    scrollTop: 100,
    homeData: {
      bannerData: {},
      priceData: {}
    },
    mineData: {}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var mineData = UserServer.getUserParams();
    this.setData({
      mineData: mineData
    })
  },
  onReady:function(){
    // 页面渲染完成
    var _self = this;
    // 首页
    wx.request({
      url: root + '/photoBazaar/index/slide',
      data: {},
      medthod: 'post',
      header:{
          "Content-Type":"application/json"
      },
      success: function(res) {
          var data = _self.data.homeData;
          data.bannerData = res.data;
          if (res.data.status == "200") {
            _self.setData({
              homeData: data
            })
          }
      }
    })
    wx.request({
      url: root + '/photoBazaar/index/conf',
      data: {},
      medthod: 'post',
      header:{
          "Content-Type":"application/json"
      },
      success: function(res) {
          var data = _self.data.homeData;
          data.priceData = res.data;
          if (res.data.status == "200") {
            _self.setData({
              homeData: data
            })
          }
      }
    })
    
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  upper: function () {
    
  },
  lower: function () {
    
  },
  handleChangeTab: function (event) {
      this.setData({
        page: event.target.dataset.page
      })
  },
  handlerGoToBannerNext:function (e) {
      wx.navigateTo({url: "../home/enjoy/streetEnjoy"})
  },
  handleGoToMyInfo: function () {
      wx.navigateTo({url: "../mine/myInfo/myInfo"});
  },
  handleGoToMyCoupon: function () {
      wx.navigateTo({url: "../mine/myCoupon/myCoupon"});
  },
  handleGoToFeedback: function () {
      wx.navigateTo({url: "../mine/feedback/feedback"});
  },
  handleGoToAboutUs: function () {
      wx.navigateTo({url: "../mine/aboutUs/aboutUs"});
  }
})