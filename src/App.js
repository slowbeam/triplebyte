import React, { Component } from "react";
import "./App.css";
import TestComponent from "./components/TestComponent";
import TestComponentTwo from "./components/TestComponentTwo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TestComponentTwo />
      </div>
    );
  }
}

export default App;
