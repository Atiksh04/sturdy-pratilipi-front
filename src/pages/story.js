import React from 'react'
import Header from '../component/header'
import Story from '../component/story'

export default class StoryPage extends React.Component{
	constructor(props){
		super(props)
		
	}
	componentDidMount(){
		if(localStorage.getItem('pratilipi_assignment_token')==null){
			this.props.history.push('/login')
	}
}
	render(){
		
		return(
			<div>
				<Header selected="pen" history={this.props.history}/>
				<Story history={this.props.history}/>
			</div>
			)
	}
}