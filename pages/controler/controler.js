// pages/controler/controler.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    inputFocus: true,
    nomore:false,
    startX: 0, //开始坐标
    startY: 0,
    initValue:"",
    array: ['组一', '组二', '组三', '组四'],
  items:[{
    status:1,
    name:'1号控制器',
    voltage:'220v',
    electric:'2A',
    num:2,
    aa:true,
    isTouchMove: false //默认全隐藏删除
  }, {
    status: 0,
    name: '2号控制器',
    voltage: '220v',
    electric: '2A',
    num: 6,
    aa: true,
    isTouchMove: false //默认全隐藏删除
    }, {
      status: 1,
      name: '3号控制器',
      voltage: '220v',
      electric: '2A',
      num: 2,
      aa: false,
      isTouchMove: false //默认全隐藏删除
  }, {
    status: 1,
    name: '4号控制器',
    voltage: '220v',
    electric: '2A',
    aa: true,
    isTouchMove: false //默认全隐藏删除
  }]
  },
  // 加载更多
getMore(){
  const items=this.data.items;
  if(items.length<10){
    items.push({
      status: 1,
      name: '4号控制器',
      voltage: '220v',
      electric: '2A',
      aa: true,
      isTouchMove: false //默认全隐藏删除
    })
    this.setData({ items })
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
  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.items.forEach(function (v, i) {
      if (v.isTouchMove)//只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      items: this.data.items
    })
  },
  //滑动事件处理
  touchmove: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index,//当前索引
      startX = that.data.startX,//开始X坐标
      startY = that.data.startY,//开始Y坐标
      touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
      //获取滑动角度
      angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });
    that.data.items.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })
    //更新数据
    that.setData({
      items: that.data.items
    })
  },
  /**
   * 计算滑动角度
   * @param {Object} start 起点坐标
   * @param {Object} end 终点坐标
   */
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },
  /*
  * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  /*
  * 弹窗
   */
  showDialogBtn: function () {
    this.setData({
      showModal: true
    })
  },
  //分组
  group: function (e) {
    var that = this;
    this.setData({
      initValue: that.data.items[e.currentTarget.dataset.index].name
    })
  },
  /**
 * 对话框取消按钮点击事件
 */
  onCancel: function () {
    this.hideModal();
    this.setData({
      initValue:''
    })
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    this.hideModal();
  },
  //编辑事件
  edit: function (e) {
    var that = this;
    this.setData({
      showModal: true,
      initValue: that.data.items[e.currentTarget.dataset.index].name
    })
  },

  //删除事件
  del: function (e) {
    var that = this;
    wx.showModal({
      title: `确定删除[${that.data.items[e.currentTarget.dataset.index].name}]`,
      success: function (res) {
        if (res.confirm) {
          that.data.items.splice(e.currentTarget.dataset.index, 1)
          that.setData({
            items: that.data.items
          })
        } else if (res.cancel) {
          return false
        }
      }
    })

  },
  istenerPhoneInput: function (e) {  // 用户名input  获得焦点。 可填写内容
    this.setData({
      inputFocus: true,
    });
  },
  // 输入框改变时
  inputChange: function (e) { 
    this.setData({
      initValue: e.detail.value,
    });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})