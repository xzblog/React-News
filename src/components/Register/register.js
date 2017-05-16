//注册组件
import React from 'react';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  message
} from 'antd';

import './register.css';

const FormItem = Form.Item;
const Option = Select.Option;

const residences = [{
  value: 'zhejiang',
  label: '浙江省',
  children: [{
    value: 'hangzhou',
    label: '杭州市',
    children: [{
      value: 'xihu',
      label: '西湖区',
    }],
  }],
}, {
  value: 'jiangsu',
  label: '江苏省',
  children: [{
    value: 'nanjing',
    label: '南京市',
    children: [{
      value: 'zhonghuamen',
      label: '中华门',
    }],
  }],
}, {
  value: 'guizhou',
  label: '贵州省',
  children: [{
    value: 'zunyi',
    label: '遵义市',
    children: [{
      value: 'bozhou',
      label: '播州区',
    }],
  }],
}];

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      confirmDirty: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var myFetchOptions = {
      method: 'GET'
    };
    var formData = this.props.form.getFieldsValue();
    console.log(formData);
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&r_userName=" + formData.nickname + "&r_password=" + formData.password + "&r_confirmPassword=" + formData.confirm, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({
          userNickName: json.NickUserName,
          userid: json.UserId
        });
        localStorage.userid = json.UserId;
        localStorage.userNickName = json.NickUserName;
      });
    message.success("注册成功！");
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({
      confirmDirty: this.state.confirmDirty || !!value
    });
  }

  // 检测两次密码是否一致
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不一样');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], {
        force: true
      });
    }
    callback();
  }
  render() {
    const {
      getFieldDecorator
    } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 6
        },
      },
      wrapperCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 14
        },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select className="icp-selector">
        <Option value="86">+86</Option>
      </Select>
    );
    return (
      <div className="register-box">
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="邮箱"
            hasFeedback
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: '邮箱格式不正确!',
              }, {
                required: true, message: '请输入你的邮箱!',
              }],
            })(
              <Input placeholder='请输入邮箱'/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="密码"
            hasFeedback
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: '请输入你的密码!',
              }, {
                validator: this.checkConfirm,
              }],
            })(
              <Input type="password" placeholder='请输入密码' />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="重复密码"
            hasFeedback
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: '请再次输入密码!',
              }, {
                validator: this.checkPassword,
              }],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur} placeholder="请重复密码"/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
                昵称
                <Tooltip title="你想别人怎么称呼你?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            )}
            hasFeedback
          >
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: '请输入你的昵称!', whitespace: true }],
            })(
              <Input placeholder="请输入你的昵称"/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="居住地"
          >
            {getFieldDecorator('residence', {
              initialValue: ['zhejiang', 'hangzhou', 'xihu'],
              rules: [{ type: 'array', required: true, message: '请选择你的现居住地!' }],
            })(
              <Cascader options={residences} placeholder="请选择现你的居住地" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="电话号码"
          >
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: '请输入你的手机号!' }],
            })(
              <Input addonBefore={prefixSelector} />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="验证码"
            extra="我需要确认你不是机器人."
          >
            <Row gutter={8}>
              <Col span={12}>
                {getFieldDecorator('captcha', {
                  rules: [{ required: true, message: '请输入你收到的验证码!' }],
                })(
                  <Input size="large" placeholder="验证码" />
                )}
              </Col>
              <Col span={12}>
                <Button size="large">获取验证码</Button>
              </Col>
            </Row>
          </FormItem>
          <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>我同意 <a href="">用户协议</a></Checkbox>
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" size="large">注册</Button>
          </FormItem>
        </Form>
      </div>

    );
  }
}

const Register = Form.create()(RegisterForm);
export default Register