import React from 'react'
import './components.scss'
import logo from './logo.png'
import {BsHouseDoorFill,BsPen,BsFillPersonFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export default class Header extends React.Component{
	constructor(props){
		super(props)
		this.state={
			selected:this.props.selected
		}
	}
	select=(val)=>{
		this.setState({
			selected:val
		})
		let route="/"
		if(val==='pen')
			route="/write"
		else if(val==='login')
			route="/login"

		this.props.history.push(route)
	}
	render(){
		return(
			<div className="header pt-2">
				<Link to="/"><img src={logo} alt="logo" className="image-logo"/></Link>
				<span className="header-text pl-1">Okay</span>
				<input className="search-group " type="text" placeholder="Search for storys"/>
				<span className="icons-span" onClick={()=>this.select('home')}><BsHouseDoorFill className={this.state.selected==='home' ? 'icon-selected' : "icons" }/></span>
				<span className="icons-span" onClick={()=>this.select('pen')}><BsPen className={this.state.selected==='pen' ? 'icon-selected' : "icons" }/></span>
				<span className="icons-span" onClick={()=>this.select('login')}><BsFillPersonFill className={this.state.selected==='login' ? 'icon-selected' : "icons" }/></span>
			</div>
			)
	}
}