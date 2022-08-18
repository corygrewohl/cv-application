import { Component } from "react";
import "../App.scss";

class Input extends Component {
  handleChange(event) {
    console.log(event.target.id);
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="input-container">
        <label for={this.props.id}>{this.props.text}</label>
        <input
          type={this.props.type}
          name={this.props.id}
          id={this.props.id}
          onChange={(e) => {
            this.props.onInputChange(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default Input;
