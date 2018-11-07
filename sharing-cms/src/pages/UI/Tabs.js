import React, {Component} from 'react'
import { Tabs } from 'antd';
import './index.less'

const TabPane = Tabs.TabPane;
class TabsBox extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    callback = (key)=>{
        console.log("当前选项卡的索引值：",key)
    }

    render() {
        return (
            <div className="TabsBox">
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Tab 1" key="1" className="tab1">Tab Pane 1</TabPane>
                    <TabPane tab="Tab 2" key="2" className="tab2">Tab Pane 2</TabPane>
                    <TabPane tab="Tab 3" key="3" className="tab3">Tab Pane 3</TabPane>
                    <TabPane tab="Tab 4" key="4" className="tab4">Tab Pane 4</TabPane>
                </Tabs>
            </div>
        );
    }
}

export default TabsBox;