import React from 'react'
import {BsHouseDoorFill,BsPen,BsFillPersonFill} from 'react-icons/bs'

export default class BottomHeader extends React.Component{
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
		return (
			<div className="header-span row mt-2">
            		<div className="col-md-4 col-sm-4 col-xs-4 text-center">
            			<span className="icons-span" onClick={()=>this.select('home')}><BsHouseDoorFill className={this.state.selected==='home' ? 'icon-selected' : "icons" }/></span>
            		</div>
            		<div className="col-md-4 col-sm-4 col-xs-4 text-center">
            			<span className="icons-span" onClick={()=>this.select('pen')}><BsPen className={this.state.selected==='pen' ? 'icon-selected' : "icons" }/></span>
            		</div>
            		<div className="col-md-4 col-sm-4 col-xs-4 text-center">
            			<span className="icons-span" onClick={()=>this.select('login')}><BsFillPersonFill className={this.state.selected==='login' ? 'icon-selected' : "icons" }/></span>
            		</div>
            	</div>
			)
	}
}