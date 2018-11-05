import React from 'react'
import './ui.less'
import { Card, Button, Radio, Icon } from 'antd'

const RadioGroup = Radio.Group;
const ButtonGroup = Button.Group;
class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            size:"default"
        };
    }

    changeBtnSize = (e)=>{
        this.setState({
            size:e.target.value
        })
    }

    render() {
        return (
            <div>
                <Card title = "基础按钮" className="card-wrap">
                    <Button type="primary">Imooc</Button>
                    <Button>Imooc</Button>
                    <Button type="dashed">Imooc</Button>
                    <Button type="danger">Imooc</Button>
                </Card>
                <Card title="图形按钮" className="card-wrap">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button icon="search">搜索</Button>
                    <Button icon="search" shape="circle"></Button>
                    <Button icon="download">下载</Button>
                </Card>
                <Card title="Loading按钮" className="card-wrap">
                    <Button loading={true}  type="primary">确定</Button>
                </Card>
                <Card title="按钮组合" className="card-wrap">
                    <h4>Basic</h4>
                    <ButtonGroup>
                        <Button type="primary">Cancel</Button>
                        <Button type="primary">OK</Button>
                    </ButtonGroup>
                    <h4>With Icon</h4>
                    <ButtonGroup>
                    <Button type="primary">
                        <Icon type="left" />Go back
                    </Button>
                    <Button type="primary">
                        Go forward<Icon type="right" />
                    </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                    <Button type="primary" icon="cloud" />
                    <Button type="primary" icon="cloud-download" />
                    </ButtonGroup>
                </Card>
                <Card title="按钮尺寸" className="card-wrap">
                    <RadioGroup value={this.state.size} onChange={this.changeBtnSize}>
                        <Radio value="large">大</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="small">小</Radio>
                    </RadioGroup>
                    <Button type="primary" size={this.state.size}>Imooc</Button>
                    <Button size={this.state.size}>Imooc</Button>
                    <Button type="dashed" size={this.state.size}>Imooc</Button>
                    <Button type="danger" size={this.state.size}>Imooc</Button>
                </Card>
            </div>
        );
    }
}

export default Buttons;