import React from 'react';
/*
1)initialiZation phase:
variables are initialized 
constructor->gets all the state variables

2)Mounting Phase:
mounting phase,component component will be mounted on DOM/browser

componentWillMount()->render()->gets all html elements
->componentDidMount()

3)Updation phase:
    a)shouldComponentUpdate->return value as boolean
    b)all variable and all state variables are updated
    c)componentWillUpdate
    d)componentDidUpdate

4)unmounting phase:componentWillUnmount

->when component loads for the first time initialization and mounting phase will happen by default
->if you update the component updation phase will happen
->if you are not using the component or navigating to other pages,then previous mounted component will be unmounted from dom->unmounting phase
*/

class LifeCycles extends React.Component{
  constructor(){
    super()
    console.log('in constructor')
  }
  componentWillMount(){
    console.log('component will mount')
  }
  componentDidMount(){
    console.log('component did mount')
  }
  shouldComponentUpdate(nextProps){
    console.log('should component update')
    console.log('nextProps',nextProps)
    //''!=='hello'
    return nextProps.text!==this.props.text
  }
  componentDidUpdate(){
    console.log('component did update')
  }
  componentWillUnmount(){
    console.log('component unmount')
  }
  render(){
    console.log('render')
    return(
      <div>
        <h3>Life Cycle Components</h3>
        {this.props.text}
        <p style={{color:'black'}}>Employee no:{this.props.eno}</p>
      </div>
    )
  }
}
export default LifeCycles
