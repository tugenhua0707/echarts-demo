// 指定图表的配置项和数据  
option = {  
    title: {  
      text: "",  
      textStyle: {    
        color: "#436EEE",    
        fontSize: 17    
      }    
    },  
    legend: {  
      data:["政策法规","经办规程","业务场景模拟","常见问题"]  
    },  
    //x轴显示  
    xAxis: {  
      data: ["管理业务","财务业务","监督业务","养老业务", "医疗业务", "工伤业务", "失业业务"],  
      splitLine: {  
        show: false  
      },
      show: false  
    }, 
    //y轴显示  
    yAxis: {  
      splitLine:{  
        show: false  
      },
      show: false  
    },  
    series: [  
      {  
        name: "政策法规",  
        type: "bar",  
        stack: "业务",//折叠显示  
        data: [1,2,3,4,2,3,3], 
        barWidth : 20,  
        //显示颜色  
        itemStyle:{    
          normal:{color:"#FFFF49"}    
        }
      },  
     {  
       name: "经办规程",  
       type: "bar",  
       stack: "业务",  
       data: [1,2,3,4,2,3,3],  
       barWidth : 20,  
       itemStyle:{    
         normal:{color:"#FF8849"}    
       }
     },  
     {  
       name: "业务场景模拟",  
       type: "bar",  
       stack: "业务",  
       data: [1,2,3,4,2,3,3], 
       barWidth : 20, 
       itemStyle:{    
         normal:{color:"#3FBB49"}    
       } 
     },  
     {  
       name: "常见问题",  
       type: "bar",  
       stack: "业务",  
       data: [1,2,3,4,2,3,3],  
       barWidth : 20, 
       itemStyle:{    
         normal:{color:"#56C4A5"}    
       } 
     }  
  ]  
}; 
/*
option = {
    xAxis: {
        data: ['a', 'b', 'c', 'd'],
        axisTick: {show: false},
        axisLabel: {
            formatter: 'barGap: \'-100%\''
        }
    },
    yAxis: {
        splitLine: {show: false}
    },
    animationDurationUpdate: 1200,
    series: [{
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#ddd'
            }
        },
        silent: true,
        barWidth: 40,
        barGap: '-100%', // Make series be overlap
        data: [60, 60, 60, 60]
    }, {
        type: 'bar',
        barWidth: 40,
        z: 10,
        data: [45, 60, 13, 25]
    }]
};



var barGaps = ['30%', '-100%'];
var loopIndex = 0;

setInterval(function () {
    var barGap = barGaps[loopIndex];

    myChart.setOption({
        xAxis: {
            axisLabel: {
                formatter: 'barGap: \'' + barGap + '\''
            }
        },
        series: [{
            barGap: barGap
        }]
    });
    loopIndex = (loopIndex + 1) % barGaps.length;

}, 2000);
*/