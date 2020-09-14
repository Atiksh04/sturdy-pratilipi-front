import React from 'react'
import './App.scss'
import Home from './pages/home'
import {Route,BrowserRouter as Router,Switch } from 'react-router-dom'
import Login from './pages/login'
import Write from './pages/write'
import Story from './pages/story'
function App() {
  return (
    <div className="App">
    	<Router>
    		<Switch>
    			<Route path="/login" component={Login}/>
                <Route path="/write" component={Write}/>
                <Route path="/story/:id" component={Story}/>
    			<Route path="/" component={Home}/>
    		</Switch>
    	</Router>

    </div>
  )
}

export default App
