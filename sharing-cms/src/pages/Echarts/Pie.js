import React, {Component} from 'react'

import echarts from 'echarts'
import './index.less'
import cascadeData from '../../config/echartData/cascade'

class Pie extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        this.createPie1();
        this.cascadePie(cascadeData);
    }

    //渲染图表
    createPie1 =()=>{
        const myCharts = echarts.init(document.getElementById("echartsPie1"));
        myCharts.setOption({
            title:{
                text:"Echarts入门实例"
            },
            tooltip:{},
            xAxis:{
                data:['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
            },
            yAxis:{},
            series:[{
                name:'销量',
                type:'bar',
                data:[5,20,3,45,10,60]
            }]
        })
    };

    //级联图表
    cascadePie =(data)=>{
        const myCharts = echarts.init(document.getElementById("echartsPie2"));
        const option = {
            title:{
                text: '联动饼状图'
            },
            tooltip:{
                trigger: 'item',
                formatter: '{a}<br/>{b}:{c}({d}%)'
            },
            legend:{
                orient:'vertical',
                x:'right',
                data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'直达', selected:true},
                        {value:679, name:'营销广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
                },
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['40%', '55%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            // shadowBlur:3,
                            // shadowOffsetX: 2,
                            // shadowOffsetY: 2,
                            // shadowColor: '#999',
                            // padding: [0, 7],
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                // abg: {
                                //     backgroundColor: '#333',
                                //     width: '100%',
                                //     align: 'right',
                                //     height: 22,
                                //     borderRadius: [4, 4, 0, 0]
                                // },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data:[
                        {value:335, name:'直达'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1048, name:'百度'},
                        {value:251, name:'谷歌'},
                        {value:147, name:'必应'},
                        {value:102, name:'其他'}
                    ]
                }
            ]

        }
        myCharts.setOption(option)
        myCharts.on("legendselectchanged",function(params){
            let options = this.getOption(),
                keys = Object.keys(params.selected),
                selected;
            //获取类别
            // for(let item of keys){
            //     if(params.selected[item]){
            //         for(let term of )
            //     }
            // }
        })
    }

    render() {
        return (
            <div className="echartsPie">
                <div id="echartsPie1"/>
                <div id="echartsPie2"/>
            </div>
        );
    }
}

export default Pie;