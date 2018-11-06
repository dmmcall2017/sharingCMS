import React from 'react'
import { Card, Spin, Icon, Alert, Input, Table, Divider, Tag } from 'antd'
import './index.less'

const { Column, ColumnGroup } = Table;

const data = [{
  key: '1',
  firstName: 'John',
  lastName: 'Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  firstName: 'Jim',
  lastName: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];
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
                <Card title="Loading...遮层">
                    <Spin tip = "Loading...">
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info" 
                        />
                        <Table dataSource={data}>
                            <ColumnGroup title="Name">
                            <Column
                                title="First Name"
                                dataIndex="firstName"
                                key="firstName"
                            />
                            <Column
                                title="Last Name"
                                dataIndex="lastName"
                                key="lastName"
                            />
                            </ColumnGroup>
                            <Column
                            title="Age"
                            dataIndex="age"
                            key="age"
                            />
                            <Column
                            title="Address"
                            dataIndex="address"
                            key="address"
                            />
                            <Column
                            title="Tags"
                            dataIndex="tags"
                            key="tags"
                            render={tags => (
                                <span>
                                {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
                                </span>
                            )}
                            />
                            <Column
                            title="Action"
                            key="action"
                            render={(text, record) => (
                                <span>
                                <a href="javascript:;">Invite {record.lastName}</a>
                                <Divider type="vertical" />
                                <a href="javascript:;">Delete</a>
                                </span>
                            )}
                            />
                        </Table>
                    </Spin>
                </Card>
            </div>
        );
    }
}

export default Loadings;