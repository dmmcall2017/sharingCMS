import React from 'react'
import menuConfig from '../../config/menuConfig'
import {Menu, Icon } from 'antd'
import {NavLink} from 'react-router-dom'
import  '../../config/constant'
import './index.less'
import '../../config/constant'


const SubMenu = Menu.SubMenu;
const rootSubmenuKeys = [];

class NavLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuTreeNode:'',
            openKeys: ['/home'],
            hideLogoText: false,
            current:['']
        };
    }

    onOpenChange = (openKeys) => {
        console.log("click",new Date());
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if(rootSubmenuKeys.indexOf(latestOpenKey) === -1){
            this.setState({
                openKeys
            })
        }else{
            this.setState({
                openKeys: latestOpenKey?[latestOpenKey]:[]
            })
        }
    };
    //获取根菜单列表
    getRootMenuList = (item)=>{
        //判断是否是一级菜单并且包含子菜单
        if(item.children&&!item.children[0].children){
            rootSubmenuKeys.push(item.key)
        }
    };

    hideText = (collapsed)=>{
        this.setState({
            hideLogoText: collapsed
        })
    };

    componentDidMount(){
        const menuTreeNode = this.renderMenu(menuConfig);
        this.setState({
            menuTreeNode: menuTreeNode
        })
    };

    //获取当前菜单项title
    setCurrentTitle = (title)=>{
        this.props.updateMenuItemTitle(title);
    };
    //菜单渲染
    renderMenu(data){
        return  data.map((value)=>{
            this.getRootMenuList(value);
            if(value.children){
                return (
                    <SubMenu title={<span>{value.icon?<Icon type={value.icon}/>:''}<span>{value.title}</span></span>} key={value.key}>
                        { this.renderMenu(value.children)}
                    </SubMenu>
                )
            }
            
            return <Menu.Item title={value.title} key={value.key} onClick={this.setCurrentTitle.bind(this,value.title,value.key)}>
                        <NavLink to={value.key} title={value.title}>{value.icon?<Icon type={value.icon} />:''}<span>{value.title}</span></NavLink>
                    </Menu.Item>
        })
    };

    testSelect =(path)=>{
        global.constants.history.push(path.key);
    }
    
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    {this.state.hideLogoText?<h1>SharingCMS</h1>:''}
                </div>
                <Menu
                    mode="inline"
                    className="menuList"
                    defaultOpenKeys={this.state.openKeys}
                    theme="dark"
                    onOpenChange = {this.onOpenChange}
                    defaultSelectedKeys={this.state.current}
                    onSelect={this.testSelect}
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>

        );
    };
}

export default NavLeft;