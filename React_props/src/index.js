import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <p>this.props is used to read the data</p>
        <p>props cannot be modified ,this.props mentions current properties of 
          Component
        </p>
        <p>Hello this is {this.props.name}</p>
        <p>array  {this.props.propArray}</p>
        <p>available  {this.props.propBool}</p>
        <p>call function  {this.props.propFunc(5)}</p>
        <p>Emp number  {this.props.propNum}</p>
        <p>Emp Name {this.props.propObject.name}</p>
        <p>Account Number   {this.props.account_Num}</p>
        <p>state {this.props.state}</p>
        <p>city {this.props.city}</p>
      </div>
    )
  }
}
App.defaultProps={
    name:'divya',
    propArray:[1,3,5],
    propBool:true,
    propFunc:function(p){
      return p*100
    },
    propNum:215,
    propObject:{name:'ram',eno:'315'},
    account_Num:154301503294,
    city:'Banglore',
    state:'Karnataka'
}
render(<App/>,document.getElementById('root'))