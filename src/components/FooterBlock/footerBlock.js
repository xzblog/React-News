import React,{Component} from 'react';
import {Icon} from 'antd';
import './footerBlock.css';
import erweima from './erweima.jpg';
export default class FooterBlock extends Component{
  render(){
    return(
      <section className='footer-block'>
        <div className="content footer-block-box">
          <div className="footer-block-item">
            <p className="footer-block-title"><Icon type='book'/><span style={{marginLeft:'5px'}}>ReactNews 资讯网</span></p>
            <ul className="footer-nav">
              <li>联系我们</li> 丨
              <li>商务合作</li> 丨
              <li>网站地图</li>
              <li>投稿须知</li> 丨
              <li>专栏作者</li> 丨
              <li>专题汇总</li>
              <li>React商城</li> 丨
              <li>专题汇总</li> 丨
              <li>专题汇总</li>
            </ul>
          </div>
          <div className="footer-block-item">
            <p className="footer-block-title"><Icon type='desktop'/><span style={{marginLeft:'5px'}}>投诉建议</span></p>
            <p>通过E-mail将您的想法和建议发给我们</p>
            <p>更好的我们离不开您的建议与监督！</p>
            <p>建议反馈：1772176802@qq.com</p>
          </div>
          <div className="footer-block-item">
            <p className="footer-block-title"><Icon type='global'/><span style={{marginLeft:'5px'}}>联系方式</span></p>
            <p>联系电话：130-3232-5095</p>
            <p>官方客服QQ：1904750751</p>
            <p>咨询微信号：zsf_008</p>
          </div>
          <div className="footer-block-item">
            <img className='erweima' src={erweima} alt='' />
          </div>
        </div>
      </section>
    )
  }
}
