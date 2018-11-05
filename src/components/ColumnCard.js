import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class ColumnCard extends React.Component {
  render() {
    return <div className="column-card">sample card data</div>;
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
)(ColumnCard);
