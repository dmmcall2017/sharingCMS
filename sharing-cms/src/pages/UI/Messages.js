import React from 'react'
import { message, Button } from 'antd'

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    success = ()=>{
        message.success('这是一个操作成功的消息提示框，并将会在10s后消失',10);
    }

    render() {
        return (
            <div className="messageBox">
                <Button onClick={this.success}>自定义延时时间</Button>
            </div>
        )
    }
}

export default Messages;