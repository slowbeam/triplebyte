import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class TestComponent extends React.Component {

  handleClick = () => {
    if (this.props.test === 'unclicked') {
      this.props.setTest('clicked')
    } else {
      this.props.setTest('unclicked')
    }
  };

  render() {
    return (
      <div>
        <h1>Test: {this.props.test}</h1>
        <button onClick={this.handleClick}> click me </button>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    test: state.test
  }
};

export default connect(mapStateToProps, actions)(TestComponent);
