
option = {
  title: {
    text: '自定义的雷达图'
  },
  // tooltip: {},
  backgroundColor: '#fff',
  radar: {
        // shape: 'circle',
    indicator: [
      { 
        name: '投资创收能力', 
        max: 11,
        axisLabel: {
          show: true, 
          textStyle: {
            fontSize: 18, 
            color: '#333'
          }
        }
      },
      { name: '风险驾驭能力', max: 11},
      { name: '抗风险能力', max: 11},
      { name: '平台财富榜', max: 11},
      { name: '投资习惯', max: 11}
    ],
    splitNumber: 4,
    center: ['50%','20%'],
    name: {
      formatter:'{value}',
      textStyle: {
        fontSize: 14,
        color:'#333'
      }
    },
    splitArea: {
      areaStyle: {
        color: ['rgba(0, 0, 0, 0)',
        '#fff', 'rgba(0, 0, 0, 0)',
        'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)'],
        shadowColor: 'rgba(255, 255, 255, 1)',
        shadowBlur: 20
      }
    },
    axisLine: {
      show: false,
      lineStyle: {
        color: '#666'
      }
    },
    splitLine: {
      lineStyle: {
        color: '#ccc',
      }
    },
    radius: 100
  },
  series: [
    {
      type: 'radar',
      // areaStyle: {normal: {}},
      data : [
        {
          value : [5, 6, 7, 8, 9],
          name : '财富管理能力',
          label: {
            normal: {
              show: true,
              formatter: function(params) {
                // console.log(params)
                // return params.value;
              }
            }
          }
        }
      ]
    }
  ]
};