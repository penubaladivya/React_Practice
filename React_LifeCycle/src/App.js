import React from "react";
import "./App.css";
import Lifecycles from "./lifecycle.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showChild: true,
      text: "",
      eno: 245,
    };
  }
  render() {
    console.log(this.state.showChild);
    console.log(this.state.text);
    return (
      <div className="App">
        <header className="App-header">
          <button
            onClick={() =>
              this.setState((state) => ({ showChild: !state.showChild }))
            }
          >
            Toggle Life Cycles
          </button>
          <button
            onClick={() =>
              this.setState((state) => ({ text: state.text + "hello" }))
            }
          >
            Update text
          </button>
          {/*lifecycle component is getting property as text,if the show child is true*/}
          {this.state.showChild ? (
            <Lifecycles text={this.state.text} eno={this.state.eno} />
          ) : null}
        </header>
      </div>
    );
  }
}
export default App
