import { Component } from "react";
import "../App.scss";
import Input from "./Input";

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: ""
    }
  }

  render() {
    return (
      <div>
        <div className="title">Your Information</div>
        <div className="general-container">
          <Input id="firstName" text="First Name:" type="text" onInputChange={
            (firstName) => {
              this.setState({firstName: firstName});
              console.log(`first: ${this.state.firstName}`);
            }
          }/>
          <Input id="lastName" text="Last Name:" type="text" onInputChange={
            (lastName) => {
              this.setState({lastName: lastName});
              console.log(`last: ${this.state.lastName}`);
            }
          }/>
          <Input id="email" text="Email:" type="text" onInputChange={
            (email) => {
              this.setState({email: email});
              console.log(`email: ${this.state.email}`);
            }
          }/>
          <Input id="phoneNumber" text="Phone Number:" type="text" onInputChange={
            (phoneNumber) => {
              this.setState({phoneNumber: phoneNumber});
              console.log(`phone: ${this.state.phoneNumber}`);
            }
          }/>
        </div>
      </div>
    );
  }
}

export default General;
