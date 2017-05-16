import React, {
  Component
} from 'react';
import {
  Row,
  Col,
  Icon,
  BackTop
} from 'antd';
import {
  Link
} from 'react-router-dom';

import PcHeader from './../../components/Header/pcHeader.js';
import RankingList from './../../components/RankingList/rankingList.js';
import Footer from './../../components/Footer/footer.js';
import Comment from './../../components/Comment/comment.js';
import './details.css';

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      newsItem: ''
    };
  }

  componentWillMount() {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
      this.setState({
        newsItem: json
      });
      document.title = this.state.newsItem.title + " - React News | React资讯网";
    });
  }
  createMarkup() {
    return {
      __html: this.state.newsItem.pagecontent
    };
  }
  render() {
    return (
      <div>
        <PcHeader />
        <div className="details container">
          <Row gutter={24}>
            <Col span={17}>
              <div className="container-left left">
                {/*<Breadcrumb>
                  <Breadcrumb.Item href="/">
                    <Icon type="home" />
                    首页
                  </Breadcrumb.Item>
                  <Breadcrumb.Item href="">
                    <Icon type="user" />
                    <span>板块名称</span>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    文章详情
                  </Breadcrumb.Item>
                </Breadcrumb>*/}
                <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                <Comment uniquekey={this.props.match.params.uniquekey} />
              </div>
            </Col>
            <Col span={7}>
              <div className="container-right">
                {/*文章作者信息*/}
                <div className="article-author">
                  <div className="article-author-top">
                    <div className="article-tishi">本文作者</div>
                    <div className="lately-time"><Icon type="calendar" style={{color:'#61dafb',fontSize:'16px', marginRight:'5px'}} />2017-1-23</div>
                  </div>
                  <div className="article-head-portrait">
                    <Link to={`/`}>
                      <img className="article-user-icon" src="http://114.215.106.135/gn/flyi/uc_server/avatar.php?uid=1&amp;size=big" alt='' />
                      <p className="article-user-name">长得丑活得久i</p>
                    </Link>
                  </div>
                  <div className="article-user-info">
                    <div className="article-user-item"><span>粉丝</span><strong>12</strong></div>
                    <div className="article-user-item"><span>阅读</span><strong>42</strong></div>
                    <div className="article-user-item"><span>回复</span><strong>8</strong></div>
                  </div>
                </div>

                {/*上一篇 下一篇*/}
                <div className="prev-next-box">
                    <div className="prev-next-item">
                    	<h5>上一篇：</h5>
                      <a className='title' href="portal.php?mod=view&amp;aid=74">莹钻「粉」墨登场，新配色 Galaxy S7 edge 图赏</a>
                      <p>发布时间：2017-01-22</p>
                    </div>

                    <div className="prev-next-item">
                    	<h5>下一篇：</h5>
                      <a className='title' href="portal.php?mod=view&amp;aid=74">不插电的吃醛小拳头，幻响纳米银醛击手初体验</a>
                      <p>发布时间：2017-01-10</p>
                    </div>
                </div>
                <RankingList count={8} type='guoji'  title="排行榜"/>

              </div>
            </Col>

          </Row>
        </div>
        <Footer />
        <BackTop />
      </div>

    )
  }
}