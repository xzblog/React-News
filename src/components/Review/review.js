import React from 'react';
// import {Router, Route, Link, browserHistory} from 'react-router';

import './review.css';
export default class Review extends React.Component {
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
				<li key={index} className="review-item" >
					{/*<Link to={`details/${newsItem.uniquekey}`} target="_blank">*/}
						<div className="review-item-top">
							<img className="user-icon" src={newsItem.thumbnail_pic_s02} alt=''/>
							<div className="review-item-top-right">
								<p className="user-name">{newsItem.author_name}</p>
								<p className="question">发表于：{newsItem.date}</p>
							</div>
						</div>
						<div className="review-item-bottom">{newsItem.title}</div>
					{/*</Link>*/}
				</li>
			))
			: '没有加载到任何数据';
		return (
			<div className="review-block">
				<h2 className="block-title">{this.props.title}</h2>
				<ul className="review-list">
          {newsList}
        </ul>
			</div>
		);
	};
}
