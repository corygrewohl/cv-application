import { Component } from "react";
import "../App.scss";
import Input from "./Input";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: "",
      city: "",
      major: "",
      schoolName: "",
      startDate: "",
      endDate: "",
      isPresent: false,
    };
  }

  handleClick(e) {
    this.setState({ isPresent: e.target.checked });
  }

  render() {
    return (
      <div>
        <div className="title">Education</div>
        <div className="education-container">
          <Input
            id="schoolName"
            text="School Name:"
            type="text"
            onInputChange={(schoolName) => {
              this.setState({ schoolName: schoolName });
              console.log(`schoolName: ${this.state.schoolName}`);
            }}
          />
          <Input
            id="city"
            text="City:"
            type="text"
            onInputChange={(city) => {
              this.setState({ city: city });
              console.log(`city: ${this.state.city}`);
            }}
          />
          <Input
            id="major"
            text="Major:"
            type="text"
            onInputChange={(major) => {
              this.setState({ major: major });
              console.log(`major: ${this.state.major}`);
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

export default Education;
