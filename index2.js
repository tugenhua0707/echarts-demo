var data = [
  {
    name: '会员属性',
    itemStyle: {
      color: '#888'
    },
    children: [
      {
        name: '会员等级',
        itemStyle: {
          color: '#888'
        },
        children: [
          {
            name: 'V0',
            value: 0.5,
            itemStyle: {
              color: '#888'
            },
            label: {
              rotate: 'tangential'
            }
          },
          {
            name: 'V1',
            value: 1,
            itemStyle: {
              color: 'orange'
            }
          },
          {
            name: 'V2',
            value: 1.5,
            itemStyle: {
              color: '#888'
            }
          },
          {
            name: 'V3',
            value: 2,
            itemStyle: {
              color: '#888'
            }
          },
          {
            name: 'V4',
            value: 0.5,
            itemStyle: {
              color: '#888'
            }
          },
          {
            name: 'V5',
            value: 0.5,
            itemStyle: {
              color: '#888'
            }
          }
        ]
      },
      {
        name: '登录活跃度22',
        itemStyle: {
          color: '#888'
        },
        children: [
          {
            name: 'A0',
            value: 0.5,
            itemStyle: {
              color: '#888'
            }
          },
          {
            name: 'A1',
            value: 1,
            itemStyle: {
              color: 'orange'
            }
          },
          {
            name: 'A2',
            value: 1,
            itemStyle: {
              color: '#888'
            }
          },
          {
            name: 'A3',
            value: 0.5,
            itemStyle: {
              color: '#888'
            }
          },
          {
            name: 'A4',
            value: 0.5,
            itemStyle: {
              color: '#888'
            }
          },
          {
            name: 'A5',
            value: 0.5,
            itemStyle: {
              color: '#888'
            }
          }
        ]
      },
      {
        name: '司龄',
        itemStyle: {
          color: '#888'
        },
        children: [
          {
            name: '新手',
            value: 0.5,
            itemStyle: {
              color: '#888'
            }
          },
          {
            name: '次新手',
            value: 1,
            itemStyle: {
              color: 'orange'
            }
          },
          {
            name: '老用户',
            value: 0.5,
            itemStyle: {
              color: '#888'
            }
          },
          {
            name: '超级老用户',
            value: 0.5,
            itemStyle: {
              color: '#888'
            }
          },
          {
            name: '骨灰级老用户',
            value: 0.5,
            itemStyle: {
              color: '#888'
            }
          },
          {
            name: '骨灰级忠实老用户',
            value: 0.5,
            itemStyle: {
              color: '#888'
            }
          }
        ]
      }
    ]
  }
];
option = {
  title: {
    text: '',
    subtext: '',
    textStyle: {
      fontSize: 12,
      align: 'center'
    },
    subtextStyle: {
      align: 'center'
    }
  },
  series: {
    type: 'sunburst',
    center: ['50%', '50%'],
    highlightPolicy: 'ancestor',
    data: data,
    radius: ['5%', '100%'],
    sort: null,
    label: {
      fontSize: 12
    },
    // 是一个数组，第0项表示数据下钻后返回上级的图形，其后的每一项分别从圆心向外层的层级
    levels: [
      // 留给数据下钻点的空白配置
      {}, 
      // 最靠内测的第一层 
      {
        r0: '15%',
        r: '35%',
        itemStyle: {
          borderWidth: 1
        },
        label: {
          rotate: 'tangential'
        }
      }, 
      // 最靠内测的第二层 
      {
        r0: '78%',
        r: '100%',
        itemStyle: {
          borderWidth: 1
        },
        label: {
          align: 'center',
          rotate: 'tangential',
          padding: 1
        }
      }, 
      // 最靠内测的第三层 
      {
        r0: '38%',
        r: '75%',
        label: {
          position: 'inside',
          padding: 1
        }
      }

    ]
  }
};