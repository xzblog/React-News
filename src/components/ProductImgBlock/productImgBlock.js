import React from 'react';
import { Link } from 'react-router-dom';
import {Icon } from 'antd';
import Slider from 'react-slick'; // 轮播组件

import userIcon from './icon.jpg';
import productPic1 from './1.jpg';
import productPic2 from './2.jpg';

import './productImgBlock.css';
export default class ProductImgBlock extends React.Component {
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
		const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    };

		// const {news} = this.state;
		// const newsList = news.length
		// 	? news.map((newsItem, index) => (
		// 		<div key={index}>
		// 			<div className="product-block-item" >
		// 				<Link to={`details/${newsItem.uniquekey}`} target="_blank">
		// 					<div className="product-pic">
		// 						<p className="product-block-date">{newsItem.realtype}</p>
		// 						<img src={newsItem.thumbnail_pic_s} alt="" />
		// 					</div>
		// 					<div className="product-block-content">
		// 						<div className="product-author">
		// 							<a href="#">
		// 									<img className="product-author-icon" src={userIcon} alt=""/>{newsItem.author_name}
		// 							</a>
		// 						</div>
		// 						<a className="product-block-item-title" href='#'>{newsItem.title}</a>
		// 						<div className="product-block-bottom">
		// 							<span><Icon className="eye-icon" style={{fontSize:'16px'}} type="eye-o"/> 188</span>
		// 							<span><Icon style={{fontSize:'12px'}} type="message"/> 20</span>
		// 							<span><Icon type="clock-circle-o"/> {newsItem.date}</span>
		// 						</div>
		// 					</div>
		// 				</Link>
		// 			</div>
		// 		</div>
		// 	))
		// 	: '没有加载到任何数据';
		return (
			<div className="product-img-block">
				<div className="list-title">
					<h5>{this.props.title}</h5>
					<span className="list-title-y">/ {this.props.desc}</span>
					{/*<a className="more" href="#">更多＋</a>*/}
				</div>

				<Slider className="swiper-silder" {...settings}>
					{/*{newsList}*/}
					<div>
						<div className="product-block-item" >
							{/*<Link to={`details/${newsItem.uniquekey}`} target="_blank">*/}
								<div className="product-pic">
									<p className="product-block-date">版块名称</p>
									<img src={productPic1} alt="" />
								</div>
								<div className="product-block-content">
									<div className="product-author">
										<Link to={`/`}>
												<img className="product-author-icon" src={userIcon} alt=""/>长得丑活得久i
										</Link>
									</div>
									<a className="product-block-item-title" href='#'>PlayStation VR 深度体验：一面理想，一面现实</a>
									<div className="product-block-bottom">
										<span><Icon className="eye-icon" style={{fontSize:'16px'}} type="eye-o"/> 188</span>
										<span><Icon style={{fontSize:'12px'}} type="message"/> 20</span>
										<span><Icon type="clock-circle-o"/> 2017-05-08</span>
									</div>
								</div>
							{/*</Link>*/}
						</div>
					</div>
					<div>
						<div className="product-block-item" >
							{/*<Link to={`details/${newsItem.uniquekey}`} target="_blank">*/}
								<div className="product-pic">
									<p className="product-block-date">版块名称</p>
									<img src={productPic2} alt="" />
								</div>
								<div className="product-block-content">
									<div className="product-author">
										<Link to={`/`}>
												<img className="product-author-icon" src={userIcon} alt=""/>长得丑活得久i
										</Link>
									</div>
									<a className="product-block-item-title" href='#'>PlayStation VR 深度体验：一面理想，一面现实</a>
									<div className="product-block-bottom">
										<span><Icon className="eye-icon" style={{fontSize:'16px'}} type="eye-o"/> 188</span>
										<span><Icon style={{fontSize:'12px'}} type="message"/> 20</span>
										<span><Icon type="clock-circle-o"/> 2017-05-08</span>
									</div>
								</div>
							{/*</Link>*/}
						</div>
					</div>
					<div>
						<div className="product-block-item" >
							{/*<Link to={`details/${newsItem.uniquekey}`} target="_blank">*/}
								<div className="product-pic">
									<p className="product-block-date">版块名称</p>
									<img src={productPic1} alt="" />
								</div>
								<div className="product-block-content">
									<div className="product-author">
										<Link to={`/`}>
												<img className="product-author-icon" src={userIcon} alt=""/>长得丑活得久i
										</Link>
									</div>
									<a className="product-block-item-title" href='#'>PlayStation VR 深度体验：一面理想，一面现实</a>
									<div className="product-block-bottom">
										<span><Icon className="eye-icon" style={{fontSize:'16px'}} type="eye-o"/> 188</span>
										<span><Icon style={{fontSize:'12px'}} type="message"/> 20</span>
										<span><Icon type="clock-circle-o"/> 2017-05-08</span>
									</div>
								</div>
							{/*</Link>*/}
						</div>
					</div>
					<div>
						<div className="product-block-item" >
							{/*<Link to={`details/${newsItem.uniquekey}`} target="_blank">*/}
								<div className="product-pic">
									<p className="product-block-date">版块名称</p>
									<img src={productPic2} alt="" />
								</div>
								<div className="product-block-content">
									<div className="product-author">
										<Link to={`/`}>
												<img className="product-author-icon" src={userIcon} alt=""/>长得丑活得久i
										</Link>
									</div>
									<a className="product-block-item-title" href='#'>PlayStation VR 深度体验：一面理想，一面现实</a>
									<div className="product-block-bottom">
										<span><Icon className="eye-icon" style={{fontSize:'16px'}} type="eye-o"/> 188</span>
										<span><Icon style={{fontSize:'12px'}} type="message"/> 20</span>
										<span><Icon type="clock-circle-o"/> 2017-05-08</span>
									</div>
								</div>
							{/*</Link>*/}
						</div>
					</div>
					<div>
						<div className="product-block-item" >
							{/*<Link to={`details/${newsItem.uniquekey}`} target="_blank">*/}
								<div className="product-pic">
									<p className="product-block-date">版块名称</p>
									<img src={productPic1} alt="" />
								</div>
								<div className="product-block-content">
									<div className="product-author">
										<Link to={`/`}>
												<img className="product-author-icon" src={userIcon} alt=""/>长得丑活得久i
										</Link>
									</div>
									<a className="product-block-item-title" href='#'>PlayStation VR 深度体验：一面理想，一面现实</a>
									<div className="product-block-bottom">
										<span><Icon className="eye-icon" style={{fontSize:'16px'}} type="eye-o"/> 188</span>
										<span><Icon style={{fontSize:'12px'}} type="message"/> 20</span>
										<span><Icon type="clock-circle-o"/> 2017-05-08</span>
									</div>
								</div>
							{/*</Link>*/}
						</div>
					</div>

				</Slider>
			</div>
		);
	};
}
