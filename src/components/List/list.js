import React from 'react';
import {Icon} from 'antd';
import {Link} from 'react-router-dom';
import './list.css';
import userIcon from './icon1.jpg';
// const user = [{
//   icon: './icon1.jpg',
// }, {
//   icon: './icon2.jpg',
// },{
//   icon: './icon3.jpg',
// }, {
//   icon: './icon4.jpg',
// }, {
//   icon: './icon5.jpg',
// }, {
//   icon: './icon6.jpg',
// }, {
//   icon: './icon7.jpg',
// }];


export default class List extends React.Component {
	constructor() {
		super();
		this.state = {
			news: ''
		};
	}
	componentWillMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
    .then(response => response.json())
    .then(json => this.setState({news: json}));
	};
	render() {
		const {news} = this.state;
		const newsList = news.length
			? news.map((newsItem, index) => (
				<li className="product-item" key={index}>
					<Link  to={`details/${newsItem.uniquekey}`} target="_blank">
	          <img className="product-img" src={newsItem.thumbnail_pic_s} alt="" />
					</Link>
	          <div className="product-describe">
	            <h2 className="product-title"><Link  to={`details/${newsItem.uniquekey}`} target="_blank">{newsItem.title}</Link></h2>
	            <p className="product-top">
								<span className="author"><img className="list-user-icon" src={userIcon} alt=""/>{newsItem.author_name}</span>
								<span className="release-time">时间：{newsItem.date}</span>
							</p>
	            <p className="product-desc">在 2016 年魅族可谓在科技圈中抢尽了风头，不仅发布了 14 款手机，还在煤友和网友们的吐槽下仍然乐之不疲地发布十几款搭载联发科处...</p>
	            <p className="product-bottom">
								<span><Icon type="pushpin"/> 新闻头条</span>
								<span><Icon style={{fontSize:'16px'}} type="eye-o"/> 188</span>
								<span><Icon style={{fontSize:'12px'}} type="message"/> 20</span>
							</p>
	          </div>
				</li>
			))
			: '没有加载到任何数据';
		return (
			<div>
				<div className="list-title">
					<h5>{this.props.title}</h5>
					<span className="list-title-y">/ {this.props.desc}</span>
					<a className="more" href="#">更多＋</a>
				</div>
				<div className="prodct-list">
					<ul>
						{newsList}
					</ul>
					<div className="see-more-box">
						<a className="see-more" href="#" >更多资讯</a>
					</div>
				</div>
			</div>


		);
	};
}
