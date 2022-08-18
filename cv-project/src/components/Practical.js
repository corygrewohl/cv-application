import Input from "./Input";
import { Component } from "react";
import "../App.scss";

class Practical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      title: "",
      startDate: "",
      endDate: "",
      description: "",
      isPresent: false,
    };
  }

  handleClick(e) {
    this.setState({ isPresent: e.target.checked });
  }

  render() {
    return (
      <div>
        <div className="title">Experience</div>
        <div className="practical-container">
          <Input
            id="companyName"
            text="Company Name:"
            type="text"
            onInputChange={(companyName) => {
              this.setState({ companyName: companyName });
              console.log(`companyName: ${this.state.companyName}`);
            }}
          />
          <Input
            id="title"
            text="Title:"
            type="text"
            onInputChange={(title) => {
              this.setState({ title: title });
              console.log(`title: ${this.state.title}`);
            }}
          />
          <Input
            id="startDate"
            text="Start Date:"
            type="text"
            onInputChange={(startDate) => {
              this.setState({ startDate: startDate });
              console.log(`startDate: ${this.state.startDate}`);
            }}
          />
          <Input
            id="endDate"
            text="End Date:"
            type="text"
            onInputChange={(endDate) => {
              this.setState({ endDate: endDate });
              console.log(`endDate: ${this.state.endDate}`);
            }}
          />
          <Input
            id="description"
            text="Description of Tasks:"
            type="text"
            onInputChange={(description) => {
              this.setState({ description: description });
              console.log(`description: ${this.state.description}`);
            }}
          />
          <div className="input-container">
            <label for="isPresent">On Going?</label>
            <input
              type="checkbox"
              name="isPresent"
              id="isPresent"
              onClick={(e) => {
                this.handleClick(e);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Practical;
