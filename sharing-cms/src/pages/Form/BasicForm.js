import React from 'react'
import './index.less'
import { Card, Form, Icon, Input, Button, Checkbox } from 'antd'
const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class Basic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // this.props.form.validateFields();
    }
    handleSubmit = (e) => {
        
        e.preventDefault();
        console.log("登录按钮")
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }
    render() {
        const { getFieldDecorator, getFieldError, getFieldsError, isFieldTouched } = this.props.form;

        const userNameError = isFieldTouched('username') && getFieldError('userName')
        const passwordError = isFieldTouched('password') && getFieldError('password')
        return (
            <div className="loginBox">
                 <Card title="水平登录栏">
                    <Form layout="inline">
                        <FormItem
                            validateStatus = {userNameError ? 'error' : ''}
                            help = {userNameError || ''}
                        >
                            {
                                getFieldDecorator('username1',{
                                    rules: [{
                                        required:true,
                                        message:'Please input your username!',
                                        len:6
                                    }]
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username"/>
                                )
                            }
                        </FormItem>
                        <FormItem
                            validateStatus={passwordError ? 'error' : ''}
                            help={passwordError || ''}
                        >
                            {getFieldDecorator('password1', {
                                rules: [{ 
                                    required: true, 
                                    message: 'Please input your Password!' 
                                }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button
                                type="primary"
                                htmlType="submit"
                                disabled={hasErrors(getFieldsError())}
                            >
                            Log in
                            </Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录框" style={{ width: 300 }}>
                    <Form layout="vertical" onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('username11', {
                                rules: [{ 
                                    required: true,
                                    message: 'Please input your username!' 
                                }]
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password11', {
                                rules: [{ 
                                    required: true, 
                                    message: 'Please input your Password!' 
                                }]
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            <a className="login-form-forgot" href="">Forgot password</a>
                            <Button type="primary" htmlType="submit"  className="login-form-button">
                                Log in
                            </Button>
                            Or <a href="">register now!</a>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}
const BasicForm = Form.create()(Basic);
export default BasicForm;