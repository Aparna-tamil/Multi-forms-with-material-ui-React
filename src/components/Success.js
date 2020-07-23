import React, { Component } from 'react';
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export class Success extends Component {
  continue = e => {
      e.preventDefault();
      this.props.nextStep();
  }


    render() {
        const {values} = this.props;
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success"/>
                    <h1>Your Submission is Successfull</h1>
                    <p>Confirmation mail has snt to your mail</p>
                        
                </React.Fragment>
                
            </MuiThemeProvider>
        )
    }
}


export default Success;
