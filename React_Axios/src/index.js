import React, { Component } from "react";
import { render } from "react-dom";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      getData: "",
      postData:""
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      this.setState({ getData: res.data.filter((item) => item.id === 2) });
    });
    let payload={
      userId:100,
      id:101,
      title:"post data inserted",
      body:"post call"
    }
    axios.post("https://jsonplaceholder.typicode.com/posts",payload)
    .then(
      res=>{this.setState({postData:res.data})}
    )
    axios.delete("https://jsonplaceholder.typicode.com/posts")
    .then(
      res=>{this.setState({postData:res.data}).filter(item=>item.id===101)}
    )
  }

  render() {
    return (
      <div>
        {Object.keys(this.state.getData).map((key) => {
          return (
            <div>
              <label>get call data</label>
              <hr />
              <span className="Left">
                {"userID : " + this.state.getData[key].userId}
              </span>
              <br />
              <span className="Right">
                {"ID : " + this.state.getData[key].id}
              </span>
              <br />
              <span className="Right">
                {"title : " + this.state.getData[key].title}
              </span>
              <br />
              <span className="Right">
                {"body : " + this.state.getData[key].body}
              </span>
              <br />
            </div>
          );
        })}

        {Object.keys(this.state.postData).map(
          (key)=>{
            return(
              <div className="container">
                <hr/>
                <label>post call</label><br/>
                <span className="Left">{key}</span><br/>
                <span className="Right">{" : "+this.state.postData[key]}</span>
              </div>
            )
          }
        )}
        
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
