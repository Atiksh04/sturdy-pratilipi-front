import React from 'react'
import Header from '../component/header'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import View from '../component/viewList'
import BottomHeader from '../component/bottomHeader'


export default class Home extends React.Component{
	constructor(props){
		super(props)
		this.state={
			selected:"home"
		}
	}
	select=(val)=>{
		this.setState({
			selected:val
		})
	}
	render(){
		return(
			<div className="home">
				<Header selected="home" history={this.props.history}/>
				<div className="mt-4">
					<Carousel showThumbs={false} infiniteLoop={true}>
	                <div >
	                    <img className="car-image" src="https://static-assets.pratilipi.com/init/banner?language=ENGLISH&name=en_0419_poems.jpg&quality=high&type=webp" alt="banner1"/>
	                </div>
	                <div >
	                    <img className="car-image" src="https://static-assets.pratilipi.com/init/banner?language=ENGLISH&name=en_0519_bythebay.jpg&quality=high&type=webp" alt="banner-2"/>
	                </div>
	                <div >
	                    <img className="car-image" src="https://static-assets.pratilipi.com/init/banner?language=ENGLISH&name=4_short_eng.jpg&quality=high&type=webp" alt="banner-3"/>
	                </div>
	            	</Carousel>
            	</div>
            	<div className="view-list">
            		<View history={this.props.history}/>
            	</div>
            	<BottomHeader selected="home" history={this.props.history}/>
			</div>
			)
	}
}
