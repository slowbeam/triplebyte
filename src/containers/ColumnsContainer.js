import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Column from "./Column";

class ColumnContainer extends React.Component {
  handleAddColumn = event => {
    const name = window.prompt("enter a name for your item!", "type here");

    const currentColumn = document.getElementById(event.target.id);
    currentColumn.innerHTML += `<div class='column-item'>${name}</div>`;
  };

  render() {
    return (
      <div className="wrapper">
        <h1> container of columns </h1>
        <div className="column-container">
          <div id="column-one" className="column">
            <div className="column-title">column 1</div>
            <div className="column-item">cereal</div>
            <div className="column-item">bacon</div>
            <button id="column-one" onClick={this.handleAddColumn}>
              add card
            </button>
          </div>
          <div id="column-two" className="column">
            <div className="column-title">column 2</div>
            <div className="column-item">pancakes</div>
            <div className="column-item">sausage</div>
            <button id="column-two" onClick={this.handleAddColumn}>
              add card
            </button>
          </div>
          <div id="column-three" className="column">
            <div className="column-title">column 3</div>
            <div className="column-item">oatmeal</div>
            <div className="column-item">fruit</div>
            <button id="column-three" onClick={this.handleAddColumn}>
              add card
            </button>
          </div>
          <div column="column-four" className="column">
            <div className="column-title">column 4</div>
            <div className="column-item">milk</div>
            <div className="column-item">orange juice</div>
            <button id="column-four" onClick={this.handleAddColumn}>
              add card
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    columnOneTitle: state.columns.columnOneTitle,
    columnTwoTitle: state.columns.columnTwoTitle,
    columnThreeTitle: state.columns.columnThreeTitle,
    columnFourTitle: state.columns.columnFourTitle
  };
};

export default connect(
  mapStateToProps,
  actions
)(ColumnContainer);
