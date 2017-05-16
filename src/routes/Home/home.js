// pc端首页
import React,{Component} from 'react';
import {Row, Col, Carousel, Button, Timeline, Icon, BackTop} from 'antd';

import PcHeader from './../../components/Header/pcHeader.js';
import List from './../../components/List/list.js';
import HotBlock from './../../components/HotBlock/hotBlock.js';
import HotSale from './../../components/HotSale/hotSale.js';
import Review from './../../components/Review/review.js';
import HotReading from './../../components/HotReading/hotReading.js';
import ProductImgBlock from './../../components/ProductImgBlock/productImgBlock.js';
import Footer from './../../components/Footer/footer.js';

import './home.css';

// import pic1 from './1.jpg';
// import pic2 from './2.jpg';
// import pic3 from './3.jpg';
// import pic4 from './4.jpg';
import erweima from './erweima.jpg';
import add from './add.png';

export default class Home extends Component{
  render(){
    const imgData = [
      {
        img: 'http://img.fancyedu.com/sys/ic/operation/1482377088291_banner1.png',
        link: '/'
      },
      {
        img: 'https://img.alicdn.com/tfs/TB1qX..QVXXXXcMapXXXXXXXXXX-520-280.jpg_q90_.webp',
        link: '/'
      },
      {
        img: 'https://img.alicdn.com/simba/img/TB1gWlLRXXXXXaLXFXXSutbFXXX.jpg',
        link: '/'
      }
    ];
    return(
      <div>
        <PcHeader />
        <div className="container home-content">
          <Row gutter={24}>
            <Col span={17}>
              <div className="content-left">
                {/* 轮播图 */}
                <div className="pc-carousel">
                  <Carousel autoplay>
                    {imgData.map((d, i) => {
                      return <a className="banner-pic" href={d.link} key={i}><img src={d.img} alt=""/></a>;
                    })}
                  </Carousel>
                </div>

                <HotReading title="本周热读" desc="Weekly Hots Reading" />

                {/* 有问题 放真数据报错*/}
                <ProductImgBlock count={10} type='yule'  title="滚动新闻" desc="Freshing News"/>

                {/* 最新资讯 */}
                <div className="home-list">
                  <List title='最新资讯' desc='The Latest News' count={5} type='guoji'  />
                </div>
              </div>
            </Col>

            <Col span={7}>
              <div className="content-right">

                <div className="container-right-top">
                  <div className="issue">
                    <Button icon="edit">  发布</Button>
                    <p style={{color:'#9B9B9B',marginTop:'10px'}}>今日主题：0 篇</p>
                  </div>
                  <div className="date">day /星期四</div>
                </div>

                <div className="deangzbox">
                  <div className="add1"><img src={add} alt="" /></div>
                  <img className="deangzewm" src={erweima} alt="" />
                  <div className="deangzret">
                  	<h3>盛帆微信公众号码</h3>
                      <div className="dean_des">
                          <i className="decorate-top-left"></i>
                          <i className="decorate-top-right"></i>
                          <i className="decorate-bottom-left"></i>
                          <i className="decorate-bottom-right"></i>
                          <p>扫码微信公众号<br/>给你想要与成长</p>
                      </div>
                  </div>
                  <div className="deangzlists">
                  	<a href="#" target="_blank" className="deansina">
                      	<span className="deansinaicon"></span>
                          <span className="deansinatxt">关注官方微博</span>
                      </a>
                      <a href="#" target="_blank" className="deanqqqun">
                      	<span className="deanqqqunicon"></span>
                          <span className="deanqqquntxt">加入官方Q群</span>
                      </a>
                  </div>
                </div>

                <div className="timeline-box">
                  <div className="list-title">
          					<h5>时间轴</h5>
          					<span className="list-title-y">/ Timeline</span>
          					<a className="more" href="#">更多＋</a>
          				</div>
                  <div className="timeline-content">
                    <Timeline pending={true}>
                      <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">
                       <time className="timelie-time">09-01</time>
                       <h5 className="timeline-title">大声说出「我爱你」，LEGO 发条心动 MOC 作品分享</h5>
                       <p className="timeline-desc">admin <span>@</span> 行业新闻</p>
                      </Timeline.Item>
                      <Timeline.Item>
                       <time className="timelie-time">08-23</time>
                       <h5 className="timeline-title">更小更时尚的小牛 M1C 与 N1 你会怎么选？</h5>
                       <p className="timeline-desc">毛琳Michael <span>@</span> 头条报道</p>
                      </Timeline.Item>
                      <Timeline.Item>
                       <time className="timelie-time">05-24</time>
                       <h5 className="timeline-title">Dyson Supersonic 吹风机：遇上限量中国红</h5>
                       <p className="timeline-desc">往事随风 <span>@</span> 行业新闻</p>
                      </Timeline.Item>
                      <Timeline.Item>
                       <time className="timelie-time">04-05</time>
                       <h5 className="timeline-title">优雅奇「美」，Cherry MX Board 8.0 机械键</h5>
                       <p className="timeline-desc">长得丑活得久i <span>@</span> 创业邦</p>
                      </Timeline.Item>
                    </Timeline>
                  </div>
                </div>

                <HotBlock count={8} type='top' itemWidth='50%' title="热门板块"/>
                <Review count={4} type="junshi" title='榜上有名'/>
                <HotSale count={8} type='guoji'  title="阅读榜单"/>

              </div>
            </Col>
          </Row>
        </div>
        <BackTop />
        <Footer />
      </div>
    )
  }
}
