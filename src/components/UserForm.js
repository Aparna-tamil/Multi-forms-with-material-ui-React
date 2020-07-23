import React, { Component } from 'react'
import SignUp from './SignUp';
import Login from './Login';
import Success from './Success';
export class UserForm extends Component {
     state = {
         step: 1,
         firstName: '',
         lastName: '',
         email: '',
         
     }
// proceed to nxt step
  nextStep =()=>{
      const {step} = this.state;
      this.setState({
          step: step+1
      });
  }

  // go back 
  prevStep =()=>{
    const {step} = this.state;
    this.setState({
        step: step-1
    });
}

// Handle fields change
handleChange = input => e =>{
    this.setState({[input]:e.target.value});
};

    render() {
        const {step} = this.state;
        const {firstName, lastName,email} = this.state;
        const values = {firstName, lastName,email};
        
        switch (step) {
            case 1:
                return (
                    <SignUp
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values} 
                    />
                )
            case 2:
                return (
                    <Login
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values} 
                    />
                )
            case 3:
                return <Success/>      
        }




    }
}

export default UserForm;

