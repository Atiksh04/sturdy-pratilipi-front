import React from 'react'
import './components.scss'
import Loader from './loader'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

export default class Login extends React.Component{
	constructor(props){
		super(props)
		this.state={
			email:"",
			pass:"",
			regLoading:false,
			sLoading:false,
			redirect:false,
			error:false
		}
	}
	email=(val)=>{
		this.setState({
			email:val.target.value
		})
	}
	pass=(v)=>{
		this.setState({
			pass:v.target.value
		})
	}
	componentDidMount(){
		console.log(localStorage.getItem('pratilipi_assignment_token'))
		if(localStorage.getItem('pratilipi_assignment_token')!==null){
			this.setState({redirect:true})
		}
	}
	regitser=(e)=>{
		e.preventDefault()
		let ob={
			email:this.state.email,
			password:this.state.pass
		}
		this.setState({regLoading:true})
		axios.post('/register',ob)
		.then((res)=>{
			if(res.data!=='error'){
				localStorage.setItem('pratilipi_assignment_token',res.data.token)
				this.setState({
					redirect:true,
					regLoading:false
				})
			}
			else{
				this.setState({
					regLoading:false,
					error:true
				})
			}
		})
	}
	submit=(e)=>{
		e.preventDefault()
		this.setState({
			sLoading:true
		})
		axios.post('/login',{email:this.state.email,password:this.state.pass})
		.then((res)=>{
			if(res.data==='error' || res.data==='No User Found' ){

				this.setState({
					sLoading:false,
					error:true
				})
				
				console.log(res.data)
				
			}
			else{
				localStorage.setItem('pratilipi_assignment_token',res.data.token)
				this.setState({
					redirect:true,
					sLoading:false
				})
			}
		})
	}
	render(){
	if(this.state.redirect){
		return(
			<Redirect to="/write"/>
			)
	}
	else
	return(
		<div className="login">
			<h4 className="left-border">Join</h4>
			<div className="row mt-5">
				<div className="col-md-6 col-lg-6">
					<form className="form-group mb-4">
						<input type="text" placeholder="Enter your email" className="form-control mb-3" onChange={this.email}/>
						<input tyoe="password" placeholder="Enter your password" className="form-control mb-3" onChange={this.pass}/>
						<button className="btn submit-button mr-1" onClick={this.regitser}>{this.state.regLoading ? <Loader height={20} width={20}/> : "Register"}</button>
						<button className="btn submit-button" onClick={this.submit}>{this.state.sLoading ? <Loader height={20} width={20}/> : 'Sign In'}</button>
					</form>	
					{this.state.error? <p className="text-danger">Oops there's some error </p>:<p></p>}
				</div>
				<div className="col-md-6 col-lg-6">
					<h4 className="left-border">Benefits Of Login</h4>
					<p className="text">Add stories and read anywhere, anytime.</p>
					<p className="text">Write and win prizes</p>
					<p className="text">Connect with friends and read stories together</p>
				</div>
			</div>
		</div>
		)
	}
}
