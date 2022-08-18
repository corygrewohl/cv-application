import { Button } from "@mui/material";
import { red } from "@mui/material/colors";
import { Component } from "react";
import "../App.scss";

class Save extends Component {
    

    render(){
        function test(){
            console.log('test')
        }

        return (
            <Button variant="contained" className=".mui-button" style={{backgroundColor: '#1a5300'}} type="submit" >Save</Button>
        )
    }
}

export default Save;