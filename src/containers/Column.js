import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import ColumnCard from "../components/ColumnCard";

class Column extends React.Component {
  renderCards = cardsArr => {
    if (cardsArr) {
      cardsArr.map(card => {
        return <ColumnCard />;
      });
    }
  };

  render() {
    return (
      <div className="column">
        <div className="column-title">sample title</div>
        {this.renderCards()}
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
)(Column);
