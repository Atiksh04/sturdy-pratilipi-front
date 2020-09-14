import React from 'react'
import Header from '../component/header'
import Write from '../component/write'
import BottomHeader from '../component/bottomHeader'

export default class WritePage extends React.Component{
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
				<Write history={this.props.history} />
				<BottomHeader selected="pen" history={this.props.history}/>
			</div>
			)
	}
}