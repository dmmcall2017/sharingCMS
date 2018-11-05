import React from 'react'
import { Route, Switch } from 'react-router-dom'
import  './config/constant'
import City from './pages/City'
import Home from './pages/Home'
import Login from './pages/Form/Login'
import Reg from './pages/Form/Reg'
import Map from './pages/Map'
// import Nomatch from './pages/Nomatch'
import Order from './pages/Order'
import Rich from './pages/Rich'
import Permission from './pages/Permission'
import Basic from './pages/Table/Basic'
import High from './pages/Table/High'
import Loading from './pages/UI/Loading'
import Modals from './pages/UI/Modal'
import Gallery from './pages/UI/Gallery'
import Carousel from './pages/UI/Carousel'
import Tabs from './pages/UI/Tabs'
import Notification from './pages/UI/Notification'
import User from './pages/User'
import Button from './pages/UI/Button'
import Bar from './pages/Echarts/Bar'
import Pie from './pages/Echarts/Pie'
import Line from './pages/Echarts/Line'



class ERouter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            routers : [
                {
                    path:"/home",
                    exact: true,
                    key:"/",
                    component: Home
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
                            component: Reg
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
                },
                {
                    path:"/ui/notification",
                    key:"/ui/notification",
                    component: Notification
                },
                {
                    path:"/ui/gallery",
                    key:"/ui/gallery",
                    component: Gallery
                },
                {
                    path:"/ui/tabs",
                    key:"/ui/tabs",
                    component: Tabs
                },
                {
                    path:"/ui/carousel",
                    key:"/ui/carousel",
                    component: Carousel
                },
                {
                    path:"/city",
                    key:"/city",
                    component:City
                },
                {
                    path:"/rich",
                    key:"/rich",
                    component:Rich
                },
                {
                    path:"/user",
                    key:"/user",
                    component:User
                },
                {
                    path:"/charts/bar",
                    key:"/charts/bar",
                    component:Bar
                },
                {
                    path:"/charts/pie",
                    key:"/charts/pie",
                    component:Pie
                },
                {
                    path:"/charts/line",
                    key:"/charts/line",
                    component:Line
                },
                {
                    path:"/permission",
                    key:"/permission",
                    component:Permission
                },
                {
                    path:"/table/high",
                    key:"/table/high",
                    component:High
                },
                {
                    path:"/table/basic",
                    key:"/table/basic",
                    component:Basic
                }
            ]
        }
    }
    componentDidUpdate(){
        this.props.test(global.constants.history.location.pathname);
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