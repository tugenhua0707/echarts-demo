
option = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    legend: {
        data:['投资能力','联盟广告','视频广告','直接访问','搜索引擎']
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        // show: false
    },
    yAxis: {
        // show: false,
        type: 'value'
    },
    series: [
        {
            name:'投资能力',
            type:'line',
            stack: '总量',
            data:[0.01, 0.01, 0.01,0.01, 0.01, 0.01,0.01]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
