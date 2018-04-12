// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      avatar:'../../images/users_effcts.png',
      name:'Frank'
    }
  },
// 扫一扫
  saoYiSao(){
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
  // 跳转到分组
  stepBlock(){
    wx.navigateTo({
      url: '/pages/block/block',
    })
  },
  // 跳转到固件升级
  stepModuleup() {
    wx.navigateTo({
      url: '/pages/moduleup/moduleup',
    })
  },
  // 跳转到app升级
  stepAppup() {
    wx.navigateTo({
      url: '/pages/appup/appup',
    })
  },
  // 跳转到常见问提
  stepTrouble() {
    wx.navigateTo({
      url: '/pages/trouble/trouble',
    })
  },
  // 跳转到联系我们
  stepCall() {
    wx.navigateTo({
      url: '/pages/call/call',
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