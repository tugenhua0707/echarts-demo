option = {
  xAxis: {
    show: false,
    data: ['01-29', '01-30', '01-31', '02-01', '02-02', '02-03', '02-04'],
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