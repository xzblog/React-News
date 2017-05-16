import React, { Component } from 'react';
import { Row, Col } from 'antd';
import {Link} from 'react-router-dom';

//引入样式css
import './hotReading.css';

import HotImg from './hot.jpg';

export default class HotReading extends Component {
  render() {
    return (
      <div className="hotreading-box">
        <div className="list-title">
          <h5>{this.props.title}</h5>
          <span className="list-title-y">/ {this.props.desc}</span>
          <a className="more" href="#">更多＋</a>
        </div>
        <Row gutter={20} style={{marginTop:'12px'}}>
          <Col span={8}>
              <div className="hotreading_pic">
                  <img src={HotImg} alt="" width="100%" />
              </div>
          </Col>
          <Col span={16}>
              <div className="hotreading-list">
                <div className="hotreading-item">
                  <span className="hotreading-user">admin</span>
                    <Link to={`./`}>
                        <div className="bkname">头条报道</div>
                    </Link>
                    <h2 className="hotreading-title"><Link to={`./`}>我是放羊的小儿童，每天走在山坡山。我是放羊的小儿童，每天走在山坡山。</Link></h2>

                    <p className="hotreading-desc">拿到这个东东，某人告诉我是冰箱除味剂。讲真，我家冰箱没什么异味。我一向是个有啥都尽快吃光的人，冰箱绝大多数时间都是空空如也。这个东东...</p>
                </div>
                <div className="hotreading-item">
                  <span className="hotreading-user">admin</span>
                    <Link to={`./`}>
                        <div className="bkname">头条报道</div>
                    </Link>
                    <h2 className="hotreading-title"><Link to={`./`}>到底买不买？9 号平衡车 </Link></h2>

                    <p className="hotreading-desc">说起平衡车自然要提到这个行业曾经的老大哥，1999年7月由狄恩·卡门创办的segway是公...</p>
                </div>
                <div className="hotreading-item">
                  <span className="hotreading-user">admin</span>
                    <Link to={`./`}>
                        <div className="bkname">头条报道</div>
                    </Link>
                    <h2 className="hotreading-title"><Link to={`./`}>丛林版历险记，头脑特工玩偶图赏</Link></h2>

                    <p className="hotreading-desc">看了头脑特工一直忘不了电影里的卡通人物，果断在网上买了一套玩偶，回来想好摆拍着玩...</p>
                </div>
                <div className="hotreading-item">
                  <span className="hotreading-user">admin</span>
                    <Link to={`./`}>
                        <div className="bkname">头条报道</div>
                    </Link>
                    <h2 className="hotreading-title"><Link to={`./`}>因涉嫌跨境转移资产，Facebook在美接数十亿</Link></h2>

                    <p className="hotreading-desc">虽然这边Facebook今年第二季度的财报刚刚公布，显示营收、利润等各项数据均全线飘红，...</p>
                </div>
                <div className="hotreading-item">
                  <span className="hotreading-user">admin</span>
                    <Link to={`./`}>
                        <div className="bkname">头条报道</div>
                    </Link>
                    <h2 className="hotreading-title"><Link to={`./`}>不插电的吃醛小拳头，幻响纳米银醛。</Link></h2>

                    <p className="hotreading-desc">拿到这个东东，某人告诉我是冰箱除味剂。讲真，我家冰箱没什么异味。我一向是个有啥都...</p>
                </div>

              </div>
          </Col>
        </Row>
      </div>
    );
  }
}
