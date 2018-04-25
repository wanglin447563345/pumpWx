// pages/controler/controler.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nomore:false,
  data:[{
    status:1,
    name:'1号控制器',
    voltage:'220v',
    electric:'2A',
    num:2,
    aa:true,
  }, {
    status: 0,
    name: '2号控制器',
    voltage: '220v',
    electric: '2A',
    num: 6,
    aa: true,
    }, {
      status: 1,
      name: '3号控制器',
      voltage: '220v',
      electric: '2A',
      num: 2,
      aa: false,
  }, {
    status: 1,
    name: '4号控制器',
    voltage: '220v',
    electric: '2A',
    aa: true,
  }]
  },
  // 加载更多
getMore(){
  const data=this.data.data;
  data.push({
    status: 1,
    name: '4号控制器',
    voltage: '220v',
    electric: '2A',
    aa: true,
  })
  if(data.length<10){
    this.setData({ data })
  }else{
    this.setData({
      nomore:true
    })
  }
},
// 查看详情
stepDetail(e){
  wx.navigateTo({
    url: `/pages/detail/detail?name=${e.currentTarget.dataset.name}`,
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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