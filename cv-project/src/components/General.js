import { Component } from "react";
import "../App.scss"

class General extends Component {
  render() {
    return (
      <div className="general">
        <div className="name">
          <label>
            First Name:
            <input type="text" name="firstName" />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" />
          </label>
        </div>
        <div className="contact">
          <label>
            Email:
            <input type="text" name="email" />
          </label>
          <label>
            Phone Number:
            <input type="text" name="phoneNumber" />
          </label>
        </div>
      </div>
    );
  }
}

export default General;
