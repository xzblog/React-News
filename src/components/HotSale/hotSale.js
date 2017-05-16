import React from 'react';
import {Link,} from 'react-router-dom';

import './hotSale.css';
export default class HotSale extends React.Component {
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
				<li key={index} className="hot-sale-item" >
					<Link to={`details/${newsItem.uniquekey}`} target="_blank">
						{newsItem.title}
					</Link>
				</li>
			))
			: '没有加载到任何数据';
		return (
			<div className="product-img-block">
				<h2 className="block-title">{this.props.title}</h2>
				<ul className="product-block-list">
          {newsList}
        </ul>
			</div>
		);
	};
}
