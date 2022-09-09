// import React from "react"
// import {render} from 'react-dom'

// const App=()=>{
//   return(
//     <div style={{backgroundColor:"lightblue",height:"500px",width:"500px"}}>
//       <h3>Welcome to Functional Component</h3>
//       <p>Functional components wont have life cycle methods</p>
//       <p>Class components will have life cycle methods</p>
//       <p>Every class component will under go life cycle method in react</p>
//       <p>to store the data in react we use states and props</p>
//       <p>data stored in state variable can be change</p>
//       <p>data stored in props cant be changed on the flow</p>
//     </div> 
//   )
// }
// render (<App/> ,document.getElementById('root'))


import React,{Component} from 'react';
import {render} from 'react-dom';

const App=()=>{
  return(
    <div style={{backgroundColor:"lightblue",height:"500px",width:"500px"}}>
      <h3>Welcome to Functional Component</h3>
      <p>Functional components wont have life cycle methods</p>
      <p>Class components will have life cycle methods</p>
      <p>Every class component will under go life cycle method in react</p>
      <p>to store the data in react we use states and props</p>
      <p>data stored in state variable can be change</p>
      <p>data stored in props cant be changed on the flow</p>
    </div> 
  )
}
render(<App/>,document.getElementById('root'))