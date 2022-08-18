import "../App.scss";
import Education from "./Education";
import General from "./General";
import Practical from "./Practical";
import Save from "./Save";
import Button from "@mui/material/Button";
import { Component } from "react";

class MainForm extends Component {
    constructor(props) {
        super(props)

    }

  handleSubmit(event) {
    alert();
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <General />
        <Education />
        <Button variant="contained" className="mui-button" style={{ backgroundColor: "#88A4BF" }}> Add Experience </Button>
        <Practical />
        <Button variant="contained" className="mui-button" style={{ backgroundColor: "#88A4BF" }}> Add Education </Button>
        <br />
        <Save />
      </form>
    );
  }
}

export default MainForm;
