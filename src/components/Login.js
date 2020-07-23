import React, { Component } from 'react';
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export class Login extends Component {
  continue = e => {
      e.preventDefault();
      this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
}

    render() {
        const {values} = this.props;
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Login Form"/>
                    <TextField
                        hintText="Enter First name"
                        floatin gLabellText="First naME"
                        onChange={this.props}
                        defaultValue={values.firstName}
                        />
                        <br/>

                    <TextField
                        hintText="Email Adress"
                        floatin gLabellText="e mail"
                        onChange={this.props}
                        defaultValue={values.email}
                        />
                        <br/>

                        <TextField
                        hintText="Password"
                        floatin gLabellText="email"
                        onChange={this.props}
                        defaultValue={values.email}
                        />
                        <br/>
                        <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={StyleSheet.button}
                        onClick={this.continue}
                        />

                        <RaisedButton 
                        label="Back"
                        primary={false}
                        style={StyleSheet.button}
                        onClick={this.back}
                        />

                </React.Fragment>
                
            </MuiThemeProvider>
        )
    }
}

const styles ={
    button:{
        margin: 15
    }
}

export default Login;
