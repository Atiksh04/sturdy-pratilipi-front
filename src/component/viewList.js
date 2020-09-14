import React from 'react'
import axios from 'axios'
import './components.scss'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default class ViewList extends React.Component{
	constructor(props){
		super(props)
		this.state={
			res:[],
			loading:false,
			error:false
		}
	}
	componentDidMount(){
		this.setState({
			loading:true
		})
		axios.get('/get-story-list')
		.then((res)=>{
			if(res.data!=='error')
				this.setState({
					res:res.data.reverse(),
					loading:false
				})
			else{
				this.setState({
					loading:false,
					error:true
				})
			}
		})
	}
	clicked=(id)=>{
		this.props.history.push(`/story/${id}`)
	}
	render(){
		return(
			<div className="view-list">
				{this.state.loading ? 
					<div className="text-center mt-5">
					<Loader
					 type="Oval" color="#d00b12" height={35} width={35}
					/>
					</div>
					:
					<p></p>
				}

				{this.state.error ? <p className="text-center text-danger">Seem's like some error</p>
				:
				<div className="card-display">
					{this.state.res.map((v)=>
						<div className="card " onClick={()=>this.clicked(v._id)} key={v._id}>
							<img src={v.coverImage} alt="coverImage" className="cover-image"/>
							<p className="text-left text">{v.title}</p>
						</div>)
					}
				</div>
				}
			</div>
			)
	}
}