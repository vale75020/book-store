import React, { Component } from "react";

class Counter extends Component {
  state = {
    quantity: 1
  };

  handleChange = e => {
    this.setState({
      quantity: e.target.value
    });
  };

  render() {
      console.log(this.state.quantity)
    return (
      <div style={{ margin: "5px" }}>
        <input
          className="quantity"
          value={this.state.quantity}
          type="number"
          min="1"
          max="100"
          step="1"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Counter;
