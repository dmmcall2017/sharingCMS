import React from 'react'
import './index.less'
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="footer">
                版权所有：JaniceDong（推荐使用谷歌浏览器，可以获得更佳操作页面体验） 技术支持：JaniceDong
            </div>
        );
    }
}

export default Footer;