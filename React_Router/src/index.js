import React, {Component} from "react"
import {render} from "react-dom"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import About from "./About"
import ContactUs from "./ContactUs"
import Home from "./Home"

class App extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <Router>
        <Header/>
        <div className="wrapper">
          <Switch>
            <Route path={'/'} exact component={Home}/>
            <Route path={'/about'} component={About}/>
            <Route path={'/ContactUs'} component={ContactUs}/>
          </Switch>
        </div>
        <Footer/>
      </Router>
    )
  }
}
render(<App/>,document.getElementById('root'))