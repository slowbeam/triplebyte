import React, { Component } from "react";
import "./App.css";
import ColumnContainer from "./containers/ColumnsContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColumnContainer />
      </div>
    );
  }
}

export default App;
