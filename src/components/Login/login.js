import React, {
  Component
} from 'react';
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  message
} from 'antd';
import {
  Link
} from 'react-router-dom';
const FormItem = Form.Item;

import './login.css';

class LoginForm extends Component {
  // 点击登录按钮事件
  handleSubmit = (e) => {
    e.preventDefault();
    var myFetchOptions = {
      method: 'GET'
    };
    var formData = this.props.form.getFieldsValue();
    console.log(formData);
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=login&username=" + formData.userName + "&password=" + formData.password, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.props.changeState({
          userNickName: json.NickUserName,
          userid: json.UserId,
          hasLogined: true,
          visible: false,
        });
        localStorage.userid = json.UserId;
        localStorage.userNickName = json.NickUserName;
        message.success("登录成功！", 3);
      });
  }

  render() {
    const {
      getFieldDecorator
    } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '用户名不能为空!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '密码不能为空!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: false,
          })(
            <Checkbox>自动登录</Checkbox>
          )}
          <a className="login-form-forgot" href="">忘记密码?</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
          OR <Link to={`./register`}>立即注册!</Link>
        </FormItem>
      </Form>
    );
  }
}

const Login = Form.create()(LoginForm);
export default Login