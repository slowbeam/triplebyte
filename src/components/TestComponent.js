import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class TestComponent extends React.Component {

  handleClick = () => {

  }

  render() {
    return (

    )
  }
};

const mapStateToProps = state => {
  return {
    test: state.test
  }
}

export default connect(mapStateToProps, actions)(TestComponent);
