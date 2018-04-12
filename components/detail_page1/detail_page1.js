// components/detail_page1/detail_page1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    switch2Change: function (e) {
      console.log('switch2 发生 change 事件，携带值为', e.detail.value)
    }
  }
})
