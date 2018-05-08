// pages/start/start.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  //绑定已有账号
  bindStep(){
    wx.navigateTo({
      url: '/pages/bind/bind'
    })
  },
  //直接登录
  login() {
    // wx.login({
    //   success: function (res) {
    //     if (res.code) {
    //       //发起网络请求
    //        wx.switchTab({
    //   url: '/pages/controler/controler'
    // })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // });
    wx.getUserInfo({
      withCredentials:true,
      lang:'zh_CN',
      // timeout:3000,
      success:function(res){
        console.log(res,111)
        wx.switchTab({
      url: '/pages/controler/controler'
    })
      },
      fail:function(err){
        wx.showToast({
          title: '允许授权才能登陆',
          icon: 'none',
          duration: 2000
        })
      }
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