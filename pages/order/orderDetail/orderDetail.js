Page({
  data:{
    // text:"这是一个页面"
    price: 199,
    timeLength: '234:23:00',
    statusArray: ["订单提交", "等待拍摄", "正在拍摄", "付款", "完成"],
    status: 2,
    orderId: '',
    userName: 'Mary',
    photographer: '',
    mobile: '',
    time: '',
    address: '',
    amount: '1244'
  },
  onLoad:function(options){
    // var orderData = JSON.parse(options.orderData)
    // var time = orderData.bookDate;
    // this.setData({
    //   status: parseInt(orderData.orderStat) + 1,
    //   orderId: orderData.orderId,
    //   photographer: orderData.nickname,
    //   mobile: orderData.mobile,
    //   time: time,
    //   address: orderData.place
    // })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})