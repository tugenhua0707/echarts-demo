
option = {
    title: {
        text: '饼图demo设计',
        subtext: '虚构数据',
        left: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        // top: 'middle',
        bottom: 10,
        left: 'center',
        data: ['基础属性', '购买决策动因','账户分析','投资偏好','风险容忍度', '风险承受能力', '投资目标', '会员属性']
    },
    series : [
        {
            type: 'pie',
            radius : '65%',
            center: ['50%', '50%'],
            selectedMode: 'single', // 选中模式, 单选
            data:[
                {
                    value: 200,
                    name: '基础属性',
                    label: {
                        color: '#000'
                    }
                },
                {
                    value: 300, 
                    name: '购买决策动因'
                },
                {
                    value: 350, 
                    name: '账户分析'
                },
                {
                    value: 400, 
                    name: '投资偏好'
                },
                {
                    value: 450, 
                    name: '风险容忍度'
                },
                {
                    value: 430, 
                    name: '风险承受能力'
                },
                {
                    value: 450, 
                    name: '投资目标'
                },
                {
                    value: 420, 
                    name: '会员属性'
                }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            
        }
    ]
};
