import React from 'react';
import {Link} from 'react-router-dom';

import './rankingList.css';
export default class RanKingList extends React.Component {
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
				<li key={index} className="ranking-item" >
					<Link className="title" to={`details/${newsItem.uniquekey}`} target="_blank">
						<i className="ranking-item-icon">{index+1}</i> {newsItem.title}
					</Link>
					<div className="ranking-item-center">
						<img className="ranking-item-pic" src={newsItem.thumbnail_pic_s} alt="" />
						<p className="ranking-item-desc">大叔大婶多撒大所多手动阀速度发顺丰</p>
						<p className="ranking-item-time">阅读 163 丨 2017-02-08</p>
					</div>
				</li>
			))
			: '没有加载到任何数据';
		return (
			<div className="ranking-block">
				<div className="list-title">
					<h5>{this.props.title}</h5>
					<span className="list-title-y">/ {this.props.desc}</span>
					<a className="more" href="#">更多＋</a>
				</div>
				<ul className="rangking-list">
          {newsList}
        </ul>
			</div>
		);
	};
}
