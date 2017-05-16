import React, {Component} from 'react';
import {Row, Col, Breadcrumb, Icon} from 'antd';

import './article.css';

export default class Article extends Component{
  constructor() {
		super();
		this.state = {
			newsItem: ''
		};
	}

  componentDidMount(){
    var myFetchOptions = {
			method: 'GET'
		};
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey="+this.props.match.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
			this.setState({newsItem: json});
			document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
		});
  }
  createMarkup() {
		return {__html: this.state.newsItem.pagecontent};
	}
  render(){
    return(
      <div className="container">
				<Row gutter={24}>
					<Col span={17}>
            <div className="container-left">
              <Breadcrumb>
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
              </Breadcrumb>
              <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
            </div>
					</Col>
					<Col span={7}>
  					<div className="container-right">
            阿萨德
            </div>
					</Col>

				</Row>
			</div>
    )
  }
}
