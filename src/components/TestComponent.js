import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class TestComponent extends React.Component {

  state = {
    name: ''
  };

  handleClick = () => {
    if (this.props.clicked === 'unclicked') {
      this.props.setClicked('clicked');
    } else {
      this.props.setClicked('unclicked');
    }
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.setName(this.state.name);
  }

  render() {

    return (
      <div>
        <h1>Test: {this.props.clicked}</h1>
        <button onClick={this.handleClick}>click me</button>
        <h1>Your Name: {this.props.name}</h1>
        <form>
          <label>
            Name:
            <input type='text' value={this.state.name} onChange={this.handleChange} />
          </label>
          <input type='submit' value='Submit' onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    clicked: state.test.clicked,
    name: state.test.name
  }
};

export default connect(mapStateToProps, actions)(TestComponent);
