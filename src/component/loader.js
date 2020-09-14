import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import React from 'react'
import Loader from 'react-loader-spinner'

export default function loader (props){
	return(
		<Loader
		 type="Oval" color="white" height={props.height} width={props.width}
		/>
		)
}