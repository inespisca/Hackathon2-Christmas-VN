import React, { Component } from "react";

class YourName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Wild Code School"
    };
  }

  handleChange = e => this.setState({ name: e.target.value });

  render() {
    return (
      <div>
        <h1>{this.state.name.replace("*","")}</h1>
        <label htmlFor="name">Write your name here :</label>
        <input
          id="name"
          type="text"
          value={this.state.name.replace("*","")}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default YourName;