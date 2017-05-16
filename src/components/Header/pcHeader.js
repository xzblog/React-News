import React, {
  Component
} from 'react';
import logo from './logo.svg';
import {
  Row,
  Col,
  Menu,
  Icon,
  Modal,
  Button,
  Affix,
  message
} from 'antd';
import {
  Link
} from 'react-router-dom';
// import RegisterForm from './../Register/register.js';
import Login from './../Login/login.js';
import './pcHeader.css';


class PcHeader extends Component {
  constructor(props) {
      super(props);
      this.state = {
        affixed: false, // 顶部是否滑动
        current: 'home', //默认选中的导航
        visible: false, //模态框是否展示
        hasLogined: false, //登录状态
        userNickName: '',
        userid: 0
      }
    }
    //组件加载的时候判断localStorage是否有用户信息，有就用这个默认登录
  componentWillMount() {
    if (localStorage.userid !== '') {
      this.setState({
        hasLogined: true
      });
      this.setState({
        userNickName: localStorage.userNickName,
        userid: localStorage.userid
      });
    }
  };
  changeAffix = (affixed) => {
    this.setState({
      affixed: affixed,
    })
  }

  // 子组件改变父组件的方法
  changeState = (stateName) => {
    this.setState(stateName)
  }

  //导航点击谁给谁选中谁
  handleClick = (e) => {
      // console.log('click ', e);
      this.setState({
        current: e.key,
      });
    }
    //显示模态框
  showModal = () => {
      this.setState({
        visible: true,
      });
    }
    // 点击模态框内确定按钮
  handleOk = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
    // 点击模态框内取消按钮
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  // 退出登录
  loginOut = () => {
    this.setState({
      hasLogined: false,
    });
    message.success("退出成功", 3);
    localStorage.userid = '';
    localStorage.userNickName = '';
  }
  render() {
    const userShow = this.state.hasLogined ? <div key="logout" className="register">
					<Link to={`/`}>{this.state.userNickName}</Link>
					&nbsp;&nbsp;
					<Button ghost htmlType="button" onClick={this.loginOut} >退出</Button>
				</div> : <div key="register" className="register" >
          <Button ghost htmlType="button" onClick={this.showModal} >注册/登录</Button>
  			</div>;

    const bgStyle = {
      backgroundColor: this.state.affixed ? 'rgba(81, 80, 80, 0.9)' : 'rgba(81, 80, 80, 1)'
    };
    return (
      <Affix onChange={this.changeAffix}>
        <header className="header" style={bgStyle}>
          <Row className="container">
            <Col className='logo' span={6}>
              <img src={logo} className="logo-img" alt="logo" />
              <span>React News</span>
            </Col>
            <Col className="menu" span={14}>
              <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="home">
                  <Icon type="home" />首页
                </Menu.Item>
                <Menu.Item key="video"> 视频 </Menu.Item>
                <Menu.Item key="js"> 资讯 </Menu.Item>
                <Menu.Item key="ku"> 课题库 </Menu.Item>
                <Menu.Item key="forum"> 论坛 </Menu.Item>
              </Menu>
            </Col>
            <Col className="login-register" span={4}>
              {userShow}
              <Modal title="登录" visible={this.state.visible} onCancel={this.handleCancel} onOk={this.handleOk} okText="关闭">
                <Login changeState={this.changeState} />
              </Modal>
            </Col>
          </Row>
        </header>
      </Affix>

    );
  }
}
export default PcHeader