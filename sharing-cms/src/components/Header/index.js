import React from 'react'
import { Row, Col, Icon } from 'antd'
import Util from '../../utils/Utils'
import axios from '../../axios'
import './index.less'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTitle:"首页"
        };
    }
    //获取天气
    getWeatherData(){
        let city="上海";
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+city+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            if(res.status === 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl: data.dayPictureUrl,
                    weather: data.weather
                })
            }
        })
    }

    updateCurrentTitle = (title)=>{
        this.setState({
            currentTitle:title
        })
    };

    menuTrigger = ()=>{
        this.props.menuControl();
    };

    componentWillMount(){
        this.setState({
            userName:'JaniceDong'
        });
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000);
        this.getWeatherData(); 
    }



    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="2" className="custom-trigger" onClick={this.menuTrigger}>
                        <Icon type={this.props.currentStatus?'menu-unfold':'menu-fold'} style={{fontSize:20}}/>
                    </Col>
                    <Col span="6" className="header-top-left">
                        <span>IMooc 通用管理系统</span>
                    </Col>
                    <Col span="16" className="header-top-right">
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        {this.state.currentTitle}
                    </Col>
                    <Col span="20" className="weather">
                        <span>{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt=""/>
                            <span>{this.state.weather}</span>
                        </span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;