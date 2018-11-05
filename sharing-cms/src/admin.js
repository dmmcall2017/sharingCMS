import React from 'react';
import {Layout, Icon, Menu} from 'antd'
import NavLeft from './components/MenuLeft'
import Header from './components/Header'
import Footer from './components/Footer'
import './style/common.less'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import ERouter from './router'
import menuConfig from './config/menuConfig'

let history = new createBrowserHistory();
const Content = Layout.Content;
const Sider = Layout.Sider;
class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollapsed:false
        };
    }

    menuTrigger=()=>{
        //隐藏菜单组件logo文字
        this.refs.hideLogoText.hideText(this.state.isCollapsed);
        //设置伸缩状态
        this.setState({
            isCollapsed:!this.state.isCollapsed
        })
    };

    updateMenuItemTitle = (title)=>{
        this.refs.header.updateCurrentTitle(title);
    };

    test =(pathname) =>{
        let _this = this;
        for(let i=0;i<menuConfig.length;i++){
            if(menuConfig[i].children){
                let child = menuConfig[i].children;
                for(let j=0;j<child.length;j++){
                    if(child[j].key===pathname){
                        _this.refs.header.updateCurrentTitle(child[j].title);
                        return;
                    }
                }
            }else{
                let item = menuConfig[i];
                if(item.key===pathname){
                    _this.refs.header.updateCurrentTitle(item.title);
                    return;
                }
            }
        }
    };

    render() {
        return (
            <Router history={history}>
                <Layout className = "container">
                    <Sider
                        className="nav-left"
                        collapsible="true"
                        onCollapse={this.hideLogoText}
                        trigger={null}
                        collapsed={this.state.isCollapsed}
                    >
                        <NavLeft ref="hideLogoText" updateMenuItemTitle={this.updateMenuItemTitle}/>
                    </Sider>
                    <Layout className="main">
                        <Header menuControl={this.menuTrigger} currentStatus={this.state.isCollapsed} ref="header"/>
                        <Content>
                            <ERouter test={this.test}/>
                        </Content>
                        <Footer/>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default Admin;