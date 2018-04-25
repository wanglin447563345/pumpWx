// components/detail_page2/detail_page2.js
import * as echarts from '../../ec-canvas/echarts';

let chart = null;

function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#ffffff",
    color: ["#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [{
      label: {
        normal: {
          position: 'inner',
          formatter: '{b}: {d}%'
        },
        labelLine: {
          normal: {
            show: false
          }
        }
      },
      type: 'pie',
      center: ['180rpx', '150rpx'],
      radius: "100rpx",
      data: [{
        value: 55,
        name: '北京'
      }, {
        value: 20,
        name: '武汉'
      }, {
        value: 1,
        name: '杭州'
      }, {
        value: 20,
        name: '广州'
      }
      ]
    }],
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  };

  chart.setOption(option);
  return chart;
}

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
    date: '2018-04-07',
    ec: {
      onInit: initChart
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindDateChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        date: e.detail.value
      })
    },
  },
  ready: function (e) {
    
  }
})
