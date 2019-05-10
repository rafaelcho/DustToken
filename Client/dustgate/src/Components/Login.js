import React from 'react';
import {
    Modal, Form, Input, Button, Layout, Icon
} from 'antd';
import "antd/dist/antd.css";

const {
    Header
} = Layout;

/* Login modal component. */
class Login extends React.Component {

    state = {
        visible: false
    }

    constructor(props){
        super();
        console.log("Login!");
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return(
        <div> 
          <Modal visible={this.props.visible} footer={null} onCancel={this.props.onCancel}>
             <Layout style={{background: '#fff'}}>
               <Header style={{background: '#fff', padding: 0}} align="center">
                 <h1> Log in </h1>
               </Header>
                 <Form className="login-form">
                  <Form.Item> 
                    {getFieldDecorator('username', {
                      rules:[{required: true, message: 'Please input your username!'}], 
                    })(
                    <Input prefix={<Icon type="user" style={{color: 'rgba(0, 0, 0, .25)'}}/>} placeholder="User name"/>
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator('password', {
                      rules:[{required: true, message: 'Please input your passoword!'}], 
                    })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                  </Form.Item>
                 </Form>
                 <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                 </Button>
             </Layout>
          </Modal>
        </div>
        );
    }
}

const LoginForm = Form.create({name: 'login'})(Login);
export default LoginForm;