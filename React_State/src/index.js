import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  /*state ,props
  ->state is volatile storage
  ->props we cannot change the data in middle of the program
  ->props means properties
  ->salaryDetails->sal,eno,ename
    ->sal ,eno,ename are properties of salary details
    ->Constructor is the first executable block in prog

  var a=10
      a=20 //possible with js

      this.state={
        a:10
      }
    this.state.a//10
    this.state={
      <variable>:<value>
    }
  we cannot be able to change state directly in react,
  we should change via setState method
  */
  constructor() {
    super();
    this.state = {
      name: "react",
      hideClick: true,
      ename: "ram",
      salary: 10000,
      location: "bengalis",
    };
    //bind function for this class
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.state.hideClick == true) {
      this.setState({ hideClick: false });
    } else if (this.state.hideClick == false) {
      this.setState({ hideClick: true });
    }
  }
  render() {
    return (
      <div>
        <p>welcome to {this.state.name}</p>
        {/*{<cond>?<true block>:<false block>}*/}
        {this.state.hideClick ? (
          <div
            style={{
              backgroundColor: "lightblue",
              height: "500px",
              width: "500px",
            }}
          >
            <h3>Employee details</h3>
            <p>Name of the Employee:{this.state.ename}</p>
            <p>Salary:{this.state.salary}</p>
            <p>Location:{this.state.location}</p>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "lightgray",
              height: "500px",
              width: "500px",
            }}
          >
            <table style={{ border: "1px solid black" }}>
              <tr style={{ border: "1px solid black" }}>
                <th style={{ border: "1px solid black" }}>Eno</th>
                <th style={{ border: "1px solid black" }}>Ename</th>
                <th style={{ border: "1px solid black" }}>Esal</th>
              </tr>
              <tr>
                <td>101</td>
                <td>saila</td>
                <td>10000</td>
              </tr>
              <tr>
                <td>102</td>
                <td>sravi</td>
                <td>20000</td>
              </tr>
            </table>
          </div>
        )}
        <br />
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));

