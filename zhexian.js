
var option = {
  tooltip: {  // 提示框
    trigger: 'axis',  // 触发类型(坐标轴触发)
    alwaysShowContent: false, // 是否永远显示提示框的内容
    backgroundColor: 'rgba(32, 174, 252, 0.7)', // 提示框的背景颜色
    textStyle: {  // 提示框浮层的文本样式

    }
  },
  calculable: true,
  // x轴设置
  xAxis: [
    {
      type: 'category',
      name: '(月)',   // x轴名称单位
      nameLocation: 'end', // 名称的位置
      nameTextStyle: {  // 名称的样式
        color: '#999',
        fontSize: '12px'
      },
      nameGap: 0, // 名称与X轴的距离
      boundaryGap: true, // 坐标的刻度是否在中间
      min: '3',  // 坐标轴刻度的最小值
      max: '12',  // 坐标轴刻度的最大值
      axisLine: {   // 坐标轴线条相关设置(颜色等)
        lineStyle: {
          color: '#ccc'
        }
      },
      axisTick: {  // 坐标轴刻度相关设置
        length: '0'  // 长度设置为0
      },
      axisLabel: {  // 坐标轴刻度标签
        margin: 7,  // 刻度标签与轴线之间的距离
        textStyle: {
          color: '#999',  // 坐标轴刻度文字的颜色
          fontSize: '12px'  // 坐标轴刻度文字的大小
        },
        // rotate: 30 // 旋转30度
      },
      data: ['3', '4', '5', '7', '8', '12'],
      // show: false
    }
  ], 
  // y轴设置
  yAxis: [    
    {
      type: 'value',  // 类型数值轴
      name: '(人)',   // Y轴名称单位
      nameTextStyle: {  // 名称的样式
        color: '#999',
        fontSize: '12px'
      },
      nameGap: 13, // 名称与Y轴的距离
      axisTick: {  // 坐标轴相关设置
        length: '0'
      },
      axisLine: {  // 坐标轴线条相关设置(颜色等)
        lineStyle: {
          color: '#ccc'
        }
      },
      axisLabel: {  // 坐标轴标签相关设置，距离颜色等
        margin: 7,  // 刻度标签与轴线之间的距离
        // formatter: '{value} C',  // 标签内容内置的格式转化器在后面加一个单位值
        textStyle: {
          color: '#999',  // 坐标轴刻度文字的颜色
          fontSize: '12px'  // 坐标轴刻度文字的大小
        }
      },
      splitLine: {  // 坐标轴分割线。默认数值轴显示，类目轴不显示
        show: false
      }
    }
  ],
  grid: { // 直角坐标系内绘图网格
    left: 36  
  },
  series: [  // 系列列表
    {
      name: '人',  // 系列名称，用于tooltip的显示
      type: 'line',
      data: [2, 2, 2, 2, 2, 7, 2],
      itemStyle: {  // 折线拐点的样式
        normal: {
          color: '#20aefc'  // 拐线拐点的颜色
        }
      },
      lineStyle: {  // 线条的样式
        normal: {
          color: '#20aefc',  // 折线的颜色
        }
      },
      smooth: 0.3, // 是否平滑处理，如果是Number类型(取值范围为0到1)，表示平滑程度，越小越接近折线段，反之
      areaStyle: {  // 区域填充的样式
        normal: {
          // 线性渐变
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0, color: '#b1e3fe'  // 0% 处的颜色
          }, {
            offset: 1, color: '#fff' // 100% 处的颜色
          }], false)
        }
      },
      markPoint: {  // 图标标注
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      markLine: {
        data: [
          {type: 'average', name: '平均值'}
        ]
      }
    },
    {
      name: '人',  // 系列名称，用于tooltip的显示
      type: 'line',
      data: [6, 6, 6, 6, 6, 6, 6],
      itemStyle: {  // 折线拐点的样式
        normal: {
          color: '#20aefc'  // 拐线拐点的颜色
        }
      },
      // smooth: 0.3, // 是否平滑处理，如果是Number类型(取值范围为0到1)，表示平滑程度，越小越接近折线段，反之
      lineStyle: {  // 线条的样式
        normal: {
          color: '#20aefc',  // 折线的颜色
        }
      },
      areaStyle: {  // 区域填充的样式
        normal: {
          // 线性渐变
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0, color: '#b1e3fe'  // 0% 处的颜色
          }, {
            offset: 1, color: '#fff' // 100% 处的颜色
          }], false)
        }
      },
      markPoint: {  // 图标标注
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      markLine: {
        data: [
          {type: 'average', name: '平均值'}
        ]
      }
    },
    {
      name: '人',  // 系列名称，用于tooltip的显示
      type: 'line',
      data: [10, 10, 10, 10, 10, 10, 10],
      itemStyle: {  // 折线拐点的样式
        normal: {
          color: '#20aefc'  // 拐线拐点的颜色
        }
      },
      lineStyle: {  // 线条的样式
        normal: {
          color: '#20aefc',  // 折线的颜色
        }
      },
      areaStyle: {  // 区域填充的样式
        normal: {
          // 线性渐变
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0, color: '#b1e3fe'  // 0% 处的颜色
          }, {
            offset: 1, color: '#fff' // 100% 处的颜色
          }], false)
        }
      },
      markPoint: {  // 图标标注
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      markLine: {
        data: [
          {type: 'average', name: '平均值'}
        ]
      }
    }
  ]
};