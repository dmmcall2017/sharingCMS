import React from 'react'
import './index.less'

import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';

const FormItem = Form.Item;

class Reg extends React.Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol:{
                xs: { span: 24 },
                sm: { span:6 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            }
        }
        return (
            <Card title="注册框" style={{ width: 600,padding:30 }}>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="E-mail"
                        hasFeedback
                    >
                        {
                            getFieldDecorator('email',{
                                rules:[{
                                    type:"email",
                                    message:"The input is  not valid E-mail"
                                },{
                                    required: true,
                                    message:"Please input your E-mail!"
                                }]
                            })(<Input/>)}
                    </FormItem>
                    <FormItem
                        { ...formItemLayout }
                        label="password"
                    >
                        {
                            getFieldDecorator("password",{
                                rules:[{
                                    required:true,
                                    message:"Please input your password"
                                },{
                                    validator: this.checkConfirm
                                }]
                            })(<Input type="password"/>)
                        }
                    </FormItem>
                    <FormItem>
                        
                       
                    </FormItem>
                </Form>
            </Card>
        );
    }
}

const RegForm = Form.create()(Reg);

export default RegForm;