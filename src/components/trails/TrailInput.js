import React, { Component } from "react";

class TrailInput extends Component {
  constructor() {
    super();
    this.state = {
      trails: [],
      name: "",
      length: ""
    };
  }

  handleOnChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addTrail(this.state.name, this.state.length);
    this.setState({
      name: "",
      length: ""
    })
  };

  render() {
    return (
      <div className="trail-input">
        <h3>Add a Trail</h3>
        <form onSubmit={this.handleOnSubmit}>
          <label>
            <strong>Name: </strong>
          </label>
          <input onChange={this.handleOnChange} type="text" id="name" value={this.state.name} placeholder="Trail Name" />
          <label>
            <strong>Length: </strong>
          </label>
          <input onChange={this.handleOnChange} type="text" id="length" value={this.state.length} placeholder="Trail Length" />
          <button type="submit">Add Trail</button>
        </form>
      </div>
    );
  }
}

export default TrailInput;
