import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };
    this.handleChnage = this.handleChnage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChnage(e) {
    this.setState({
      body: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.body.length === 0) return;
    this.props.handleAdd(this.state.body);
    this.setState({
      body: "",
    });
  }

  render() {
    return (
      <form action="/" method="post">
        <input type="text" onChange={this.handleChnage} value={this.state.body} />
        <button type="submit" onClick={this.handleSubmit}>+</button>
      </form>
    );
  }
}

Form.propTypes = {
  handleAdd: PropTypes.func,
}
