import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class TestComponentTwo extends React.Component {
  state = {
    name: ""
  };

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.setName(this.state.name);
  };

  render() {
    return (
      <div>
        <h1>Your Name: {this.props.name}</h1>
        <form>
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.test.name
  };
};

export default connect(
  mapStateToProps,
  actions
)(TestComponentTwo);
