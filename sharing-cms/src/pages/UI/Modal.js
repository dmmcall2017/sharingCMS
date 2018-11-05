import React from 'react'
import { Card, Button, Modal } from 'antd'
import './ui.less'


class Modals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    handleOpen(type){
        this.setState({
            [type]:true
        })
    }


    render() {
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() =>this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={() =>this.handleOpen('showModal2')}>自定义页脚</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showModal1}
                    onCancel={()=>{
                        this.setState({
                            showModal1:false
                        })
                    }}
                >
                    <p>欢迎学习慕课新推出的React高级课程</p>
                </Modal>
            </div>
        );
    }
}

export default Modals;