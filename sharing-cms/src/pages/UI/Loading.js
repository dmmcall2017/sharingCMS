import React from 'react'
import { Card, Button, Spin, Icon } from 'antd'

class Loadings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        const icon = <Icon type="question" style={{fontSize:34}}/>
        return (
            <div>
                <Card title="Spin用法">
                    <Spin size="small" style={{marginLeft:20}}/>
                    <Spin  style={{marginLeft:20}}/>
                    <Spin size="large"  style={{marginLeft:20}}/>
                    <Spin  size="large" indicator={icon} style={{marginLeft:20}}/>
                </Card>
            </div>
        );
    }
}

export default Loadings;