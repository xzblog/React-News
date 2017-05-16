import React from 'react';
import {
	Input,
	Form,
	Button,
	notification
} from 'antd';

import "./comment.css";
import icon from './icon.jpg';
class CommentForm extends React.Component {
	constructor() {
		super();
		this.state = {
			comments: ''
		};
	};
	//加载历史评论
	componentDidMount() {

		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions)
			.then(response => response.json())
			.then(json => {
				this.setState({
					comments: json
				});
			});
	};
	//发表评论
	handleSubmit = (e) => {

		e.preventDefault();
		var myFetchOptions = {
			method: 'GET'
		};
		var formdata = this.props.form.getFieldsValue();
		console.log(formdata);
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.comment, myFetchOptions)
			.then(response => response.json())
			.then(json => {
				this.componentDidMount();
			})
	}

	//添加收藏
	addUserCollection = () => {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
			//收藏成功以后进行一下全局的提醒
			notification['success']({
				message: 'ReactNews提醒',
				description: '收藏此文章成功'
			});
		});
	};
	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		const {
			comments
		} = this.state;
		const commnetList = comments.length ? comments.map((comment, index) => (
			<li className="comment-item" key={index}>
				<img className="comment-icon" src={icon} alt=""/>
				<div className="comment-txt">
					<div className="comment-user">{comment.UserName} <span>{comment.datetime}</span></div>
					<p>{comment.Comments}</p>
					<span className="louceng">{index+1} 楼</span>
				</div>
				
			</li>
		)) : '没有加载到任何评论';
		return (
			<div>
				<div className="comment-box">
					<div className="comment-title">
						<h3>请发表评论</h3>
						<Button type="primary" htmlType="button" onClick={this.addUserCollection}>收藏该文章</Button>
					</div>

					<Form onSubmit={this.handleSubmit} className="comment-form">
						<Form.Item style={{width:"100%"}}>
				          {getFieldDecorator('comment')(
				            <Input type="textarea" rows={5} placeholder="随便写点什么" />
				          )}
				        </Form.Item>
				        <Button type="primary" htmlType="submit">评论</Button>
				    </Form>
				</div>
				<div className="comment-list">
					<h2>网友评论</h2>
					<ul>
						{commnetList}
					</ul>
					
				</div>
			</div>
		)
	}
}
const Comment = Form.create()(CommentForm);
export default Comment