option = {
  xAxis: {
    show: false,
    data: ["20180101", "20180201", "20180301", "20180401", "20180501", "20180601", "20180701"],
    axisLine: {
      lineStyle: {
        color: 'blue',
        width: 2
      }
    },
    axisLabel: {
      textStyle: {
        fontSize: 14,
        color: '#333'
      }
    }
  },
  yAxis: {
    show: false,
    axisLine: {
      lineStyle: {
        color: 'red',
        width: 2
      }
    },
    axisLabel: {
      textStyle: {
        fontSize: 14,
        color: '#333'
      }
    },
    max: 800
  },
  series: [
    {
      type: 'line',
      smooth: true,
      data: [120, 182, 191, 234, 690, 430, 310],
      itemStyle: {
        normal:{
          color: 'red' 
        } 
      },
      lineStyle:{
        width:5
      },
      markPoint: {
      // 标注的背景颜色 比如120和690那个地方
      itemStyle: {
        normal:{
           color: 'blue' 
        }
      },
      data: [
        {
          type: 'max',
          name: '最大值'
        }, 
        {
          type: 'min',
          name: '最小值'
        }
      ]
      }
    }
  ]
};