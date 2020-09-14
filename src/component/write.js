import React from 'react'
import './components.scss'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Loader from './loader'
import axios from 'axios'
import {Redirect} from 'react-router'
export default class Write extends React.Component{
	constructor(props){
		
		super(props)
		this.state={
			story:"",
			loading:false,
			title:"",
			url:"",
			error:false,
			redirect:false,
		}
	}
	onEditorStateChange=(event, editor)=>{
		this.setState({story:editor.getData()})
	}
	submit=()=>{
		this.setState({loading:true})
		axios.post('/new-story',{
			title:this.state.title,
			data:this.state.story,
			coverImage:this.state.url
		},{
			headers:{
				authorization:localStorage.getItem('pratilipi_assignment_token')
		}
		})
		.then((res)=>{
			if(res.data!=='error'){
				this.setState({
					loading:false,
					error:false
				})
				// ,redirect:true,
				// 	urlID:'/story/'+res.data.
				//debugger
				this.props.history.push(`/story/${res.data._id}`)
			}
			else{
				this.setState({
					loading:false,
					error:true
				})
			}
		})
	}
	title=(e)=>{
		this.setState({title:e.target.value})
	}
	url=(e)=>{
		this.setState({url:e.target.value})
	}
	render(){

		return(
			<div className="write">
				<h4 className="left-border mt-5">Add a Story</h4>
				<div className="row mt-3 form-group">
					<div className="col-md-6 col sm-6 col-lg-6">
						<p className="text">Story Title:</p>
						<input type="text" placeholder="Enter the Story Title" className="form-control" onChange={this.title}/>
					</div>
					<div className="col-md-6 col sm-6 col-lg-6">
						<p className="text">Cover Image Url:</p>
						<input className="form-control" type="text" placeholder="Url for cover image" onChange={this.url}/>
					</div>
				</div>
				<div className="text-center">
					<CKEditor
	                    editor={ ClassicEditor }
	                    data="<p>Add your Story here!!</p>"
	                    onChange={ ( event, editor ) => {
	                     	this.onEditorStateChange(event,editor)
	                    } }
                	/>
                	<button className="btn submit-button mt-3" onClick={this.submit}>{this.state.loading ? <Loader height={20} width={20}/> : 'Add Story'}</button>
                	{this.state.error ? <p className="text-danger text-center">Seems some error in saving the Story. Please try again</p> : <p></p>}
				</div>
			</div>
			)	

	}
}
