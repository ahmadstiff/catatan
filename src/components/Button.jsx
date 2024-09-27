import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.onClick} className="btn btn-primary w-full">
        {this.props.text}
      </button>
    );
  }
}

export default Button;
