// var {root} = require("./common.js");
const root = "https://photobazaar.camera360.com";
var UserServer = require("./user.js").User;

var Global = {
    init: function () {

    },
    setPrice: function (_price) {
        this._price = _price;
    },
    getPrice: function () {
        return this._price;
    },
    alert: function (content) {
      wx.showModal({
        title: '提示',
        content: content,
        showCancel: false,
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    },
    // 获取banner数据
    getSlideList: function (callback) {
        var _self = this;
        wx.request({
            url: root + '/photoBazaar/index/slide',
            data: {},
            medthod: 'post',
            header:{
                "Content-Type":"application/json"
            },
            success: function(res) {
                if (res.data.status == "200") {
                    callback(res.data);
                }
            }
        })
    },
    // 获取单价信息
    getConfList: function (callback) {
        var _self = this;
        wx.request({
            url: root + '/photoBazaar/index/conf',
            data: {},
            medthod: 'post',
            header:{
                "Content-Type":"application/json"
            },
            success: function(res) {
                if (res.data.status == "200") {
                    _self.setPrice(res.data.data.price);
                    callback(res.data);
                }
            }
        })
    },
    // 获取客片欣赏信息
    getSceneData: function (type, callback) {
        var _data = {type: type};
        wx.request({
            url: root + '/photoBazaar/sPro/photoSamples',
            data: _data,
            medthod: 'post',
            header:{
                "Content-Type":"application/json"
            },
            success: function(res) {
                callback(res);
            }
        });
    },
    // 获取客片欣赏信息
    getSceneList: function (callback) {
        wx.request({
            url: root + '/photoBazaar/sPro/scene',
            data: {},
            medthod: 'post',
            header:{
                "Content-Type":"application/json"
            },
            success: function(res) {
                callback(res);
            }
        });
    },
    // 启动应用，注册登录方法
    startApp: function (logincallback) {
        this.logincallback = logincallback;
        logincallback && logincallback();
    },
    loginAgain: function (callback) {
        this.logincallback && this.logincallback(callback);
    }
}

module.exports = {
    Global: Global
}