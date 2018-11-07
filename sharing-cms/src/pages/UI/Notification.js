import React, {Component} from 'react'

import { Button, notification, Card, Icon, Select } from 'antd';

const Option = Select.Option;
class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    openNotification = ()=>{
        notification.open({
            message: "Notification Title",
            description: "This is the content of the notification."
        })
    }
    openNotification1 =()=>{
        notification.open({
            message: "通知栏标题",
            description: "This is the content of the notification,需要手动关闭！",
            duration: 0
        })
    }
    openNotification2=(type)=>{
        notification[type]({
            message: "type",
            description: "dnfd,fkdshflsknfdksnfdksfho"
        })
    }
    openNotification3 =()=>{
        const key = `open${Date.now()}`;
        const btnClick = function(){
            notification.close(key);
            console.log("dlkgfhdskcheiwk",key)
        }
        const close = ()=>{
            console.log("关闭按钮")
        }
        const btn = (<Button type="primary" size="small" onClick = {btnClick}>确定</Button>);
        notification.open({
            message: "Notification Title",
            description: "点击按钮，会调用对应的回调函数",
            btn,
            key,
            onClose: close
        })
    }

    openNotification4 =()=>{
        notification.open({
            message:"自定义图标",
            description:"可以自定义图标,只需添加一个属性icon，然后用antd自己提供的Icon组件即可",
            icon:<Icon type="smile-circle" style={{color:"#108ee9"}}/>
        })
    }

    openNotification5 = ()=>{
        notification.open({
            message: "通知栏",
            description: "This is the content of notification."
        })
    }

    render() {
        const options = ["topLeft","topRight","bottomLeft","bottomRight"]
        return (
            <div className="notificationBox">
                <Card title="基本">
                    <Button type="primary" onClick={this.openNotification}>弹出通知栏</Button>
                </Card>
                <Card title="禁止自动关闭" className="componentBox">
                    <Button type="primary" onClick={this.openNotification1}>弹出通知栏</Button>
                </Card>
                <Card title="带有图标的通知提醒框" className="componentBox">
                    <Button onClick={this.openNotification2.bind(this,'success')}>Success</Button>
                    <Button onClick={this.openNotification2.bind(this,'info')} style={{marginLeft:20}}>Info</Button>
                    <Button onClick={this.openNotification2.bind(this,'warning')} style={{marginLeft:20}}>Warning</Button>
                    <Button onClick={this.openNotification2.bind(this,'error')}  style={{marginLeft:20}}>Error</Button>
                </Card>
                <Card title="带有自定义按钮的通知提醒框" className="componentBox">
                    <Button onClick={this.openNotification3}>自定义按钮</Button>
                </Card>
                <Card title="自定义图标" className="componentBox">
                    <Button onClick={this.openNotification4}>自定义图标</Button>
                </Card>
                <Card title="切换方向" className="componentBox">
                    <Select 
                        defaultValue="toRight"
                        style={{ width: 120, marginRight: 10 }}
                        onChange={(val) => {
                            console.log(val)
                            notification.config({
                                placement: val
                            })
                    }}>
                        {options.map((val,key)=>{
                            return (
                                <Option key={val} value={val}>{val}</Option>
                            )
                        })}
                    </Select>
                    <Button 
                        type="primary"
                        onClick={this.openNotification5}
                    >
                    打开消息盒子
                    </Button>
                </Card>
            </div>
        );
    }
}

export default Notification;