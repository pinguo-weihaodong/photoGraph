var OrderServer = require("../../server/order.js").Order;

Page({
  data:{
    galleryList: [],
    scrollHeight: 0,
    sp: 1
  },
  onShareAppMessage: function () {
    return {
      title: '想拍就拍Lite',
      desc: '线下专题拍摄服务',
      path: 'pages/home/home'
    }
  },
  onLoad: function(options) {
    var _self = this;
    wx.getSystemInfo({
      success:function(res){
        _self.setData({
            scrollHeight:res.windowHeight
        });
      }
    });
    OrderServer.getOrderPhoto(1, function (result) {
      // http://c360-o2o.c360dn.com/FuOjg-l8hcno6teKJhK3kMCE7ZGT
      // http://c360-o2o.c360dn.com/FuOjg-l8hcno6teKJhK3kMCE7ZGT?imageMogr2/thumbnail/!20p
      _self.setData({
        galleryList: result.data.data.list,
        sp: result.data.data.sp
      })
    });
  },
  onShow:function(){
  },
  // 下拉刷新
  onPullDownRefresh: function () {
      var _self = this;
      OrderServer.getOrderPhoto(1, function (result) {
        _self.setData({
          galleryList: result.data.data.list,
          sp: result.data.data.sp
        })
        wx.stopPullDownRefresh();
      });
  },
  // 上拉加载
  handeScrollToLower: function () {
      var _self = this;
      OrderServer.getOrderPhoto(this.data.sp, function (result) {
        if (result.data.data.list.length == 0) {
          wx.showModal({
            title: '提示',
            content: '没有更多图片了',
            showCancel: false,
            success: function(res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
          return;
        }
        var galleryList = _self.data.galleryList.concat(result.data.data.list);
        _self.setData({
          galleryList: galleryList,
          sp: result.data.data.sp
        })
        wx.stopPullDownRefresh();
      });
  },
  // 浏览图片
  handlePreviewImage: function (e) {
    var imageList = [];
    var _list = this.data.galleryList;
    // 抽取图片信息，方便传递到下一个界面
    for (var i in _list) {
      imageList.push(_list[i].photourl);
    }
    console.log(e.target.dataset.src)
    var current = e.target.dataset.src
    wx.previewImage({
      current: e.target.dataset.src,
      urls: imageList
    })
  }
})