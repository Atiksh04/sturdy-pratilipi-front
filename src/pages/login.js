import React from 'react'
import Login from '../component/login'
import Header from '../component/header'
import BottomHeader from '../component/bottomHeader'
export default class LoginPage extends React.Component{
	render(){
		return (
			<div >
				<Header selected="login" history={this.props.history}/>
				<Login/>
				<BottomHeader selected="login" history={this.props.history}/>
			</div>
			)
	}
}