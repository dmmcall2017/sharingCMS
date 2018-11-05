import React from 'react'
import { Route, Switch } from 'react-router-dom'
import  './config/constant'
import City from './pages/City'
import Echarts from './pages/Echarts'
import Form from './pages/Form'
import Home from './pages/Home'
import Login from './pages/Login'
import Map from './pages/Map'
import Nomatch from './pages/Nomatch'
import Order from './pages/Order'
import Permission from './pages/Permission'
import Rich from './pages/Rich'
import Table from './pages/Table'
import Loading from './pages/UI/Loading'
import Modals from './pages/UI/Modal'
import User from './pages/User'
import Button from './pages/UI/Button'


class ERouter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            routers : [
                {
                    path:"/home",
                    exact: true,
                    key:"/",
                    component: City
                },
                {
                    path:"/map",
                    key:"/map",
                    component: Map
                },
                {
                    path:"/order",
                    key:"/order",
                    component: Order
                },
                {
                    path:"/form",
                    key:"/form",
                    children:[
                        {
                            path:"/form/login",
                            key:"/form/login",
                            component: Login
                        },
                        {
                            path:"/form/reg",
                            key:"/form/reg",
                            component: User
                        }
                    ]
                },
                {
                    path: "/ui/buttons",
                    key: "/ui/buttons",
                    component: Button
                },
                {
                    path:"/ui/modals",
                    key:"/ui/modals",
                    component:Modals
                },
                {
                    path:"/ui/loadings",
                    key:"/ui/loadings",
                    component:Loading
                }
            ]
        }
    }
    componentDidUpdate(){
        this.props.test(global.constants.history.location.pathname);
    }

    componentDidMount(){
        // const _this = this;
        // let lastLocation="/";
        // //监听路由变化
        // history.listen((location) => {
        //     console.log(this)
        //     if(lastLocation!==location.pathname){
        //         // _this.refs.hideLogoText.toggleClick(location.pathname);
        //         // _this.refs.header.updateCurrentTitle(location.state);
        //         lastLocation=location.pathname;
        //     }
        // });
    }

    createRoute = (data)=>{
        return data.map((route)=>{
            if(route.children){
                return this.createRoute(route.children)
            }
            return <Route
                key = {route.key}
                path = {route.path}
                component = {route.component}
            />
        })
    };

    render(){
        return (
            <Switch>
                {
                    this.createRoute(this.state.routers)
                }
            </Switch>
        )
    }
}

export default ERouter;