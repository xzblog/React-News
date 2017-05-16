import React from 'react';
// import {Link} from 'react-router-dom';

import './hotBlock.css';
export default class HotBlock extends React.Component {
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
		const hotItem = {
			width: this.props.itemWidth,
		};
		const {news} = this.state;
		const newsList = news.length
			? news.map((newsItem, index) => (
				<li key={index} className="hot-item" style={hotItem}>
					{/*<Link to={`details/${newsItem.uniquekey}`} target="_blank">*/}
						{newsItem.realtype}
					{/*</Link>*/}
				</li>
			))
			: '没有加载到任何数据';
		return (
			<div className="hotblock">
        <h2 className="hot-title">{this.props.title}</h2>
				<ul className="hot-list">
          {newsList}
        </ul>
			</div>
		);
	};
}
