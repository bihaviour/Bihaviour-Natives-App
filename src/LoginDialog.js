import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';


export default class LoginDialog extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
    };
  }

  textInputChanged_email = (event) => {
    this.setState({email: event.target.value});
  }
  
  textInputChanged_password = (event) => {
    this.setState({password: event.target.value});
  }
  
  onClick_elLoginButton276758 = (ev) => {
    // Go to screen 'HomeScreen'
    this.props.appActions.goToScreen('homescreen', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_email = {
        display: 'block',
        color: '#fbbc50',
     };
    const style_password = {
        display: 'block',
        color: '#fbbc50',
     };
    const style_loginButton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_loginButton_outer = {
        cursor: 'pointer',
     };
    
    return (
      <div className="LoginDialog" style={baseStyle}>
        <div className="layoutFlow">
          <div className='baseFont elEmail58097'>
            <Input style={style_email} type="email" hint={this.props.locStrings.comp1_field2_58097} onChange={this.textInputChanged_email} defaultValue={this.state.email}  />
          
          </div>
          
          <div className='baseFont elPassword512968'>
            <Input style={style_password} type="password" hint={this.props.locStrings.comp1_field_512968} onChange={this.textInputChanged_password} defaultValue={this.state.password}  />
          
          </div>
          
          <div className='actionFont elLoginButton276758' style={style_loginButton_outer}>
            <Button style={style_loginButton}  variant="raised" color="accent" onClick={this.onClick_elLoginButton276758} >
              {this.props.locStrings.loginDialog_login_button}
            </Button>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
