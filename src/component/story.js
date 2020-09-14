import React from 'react'
import axios from 'axios'
import {GiRead} from 'react-icons/gi'
import {BsEye} from 'react-icons/bs'
import io from 'socket.io-client'


export default class Story extends React.Component{
	constructor(props){
		super(props)
		this.location=window.location.href.split('/')
		this.id=this.location[this.location.length-1]
		this.state={
			data:{},
			length:'',
			username:'',
			currentUser:'',
			error:false
		}
		this.socket =io('/')
	}
	componentDidMount(){
		axios.post('/get-story',{
			id:this.id
		},{
			headers:{
				authorization:localStorage.getItem('pratilipi_assignment_token')
		}
			})
		.then((res)=>{
			if(res.data!=='error'){
							this.setState({
								data:res.data,
								length:res.data.totalPeopleReadIds.length
							})
			this.socket.emit('imin',this.id,localStorage.getItem('pratilipi_assignment_token'))				
			}
		})
		this.socket.on('notification',(arr)=>{
			let result=arr.filter((v)=>v.id===this.id)
			this.setState({
				currentUser:result.length
			})
		})
		this.socket.on('errorOccured',()=>{
			this.setState({error:true})
		})

		window.addEventListener("beforeunload", (ev) => 
		{  
			this.socket.emit('exit',localStorage.getItem('pratilipi_assignment_token'),this.id)
			this.socket.disconnect()
		    ev.preventDefault()
		    return ev.returnValue = 'Are you sure you want to close?'
		})
	}
	componentWillUnmount(){
		this.socket.emit('exit',localStorage.getItem('pratilipi_assignment_token'),this.id)
		this.socket.disconnect()
 	}
	render(){
		return(
			<div className="story">
				<h3 className="text-center mt-4">{this.state.data.title}</h3>
				<div className="row">
					<div className="col-md-6 col-sm-6 col-lg-6">
						<a data-toggle="tooltip" title="Total Read Count for the Story"><GiRead className="icons"/>: {this.state.length} (total read count)</a>
					</div>
					<div className="col-md-6 col-sm-6 col-lg-6">
						<a data-toggle="tooltip" title="Total User's Currently Viewing"> <BsEye className="icons"/>: {this.state.currentUser} (Total User's currently viewing)</a>	
					</div>
				</div>
				{this.state.error ? <p className="text-center text-danger">Seem's like some error. Please try again.</p>
			 	: 
				<div className="text-center text mt-3" dangerouslySetInnerHTML={{__html: this.state.data.data}}></div>
				}
			</div>
			)
	}
}