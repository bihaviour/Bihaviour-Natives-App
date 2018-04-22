import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';


export default class Comp1 extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      field2: '',
      field: '',
    };
  }

  textInputChanged_field2 = (event) => {
    this.setState({field2: event.target.value});
  }
  
  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
  }
  
  onClick_elButton276758 = (ev) => {
    // Go to screen 'HomeScreen'
    this.props.appActions.goToScreen('homescreen', { transitionId: 'slideIn_right' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_field2 = {
        display: 'block',
        color: '#fbbc50',
     };
    const style_field = {
        display: 'block',
        color: '#fbbc50',
     };
    const style_button = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_button_outer = {
        cursor: 'pointer',
     };
    
    return (
      <div className="Comp1" style={baseStyle}>
        <div className="layoutFlow">
          <div className='baseFont elField258097'>
            <Input style={style_field2} type="email" hint={this.props.locStrings.comp1_field2_58097} onChange={this.textInputChanged_field2} defaultValue={this.state.field2}  />
          
          </div>
          
          <div className='baseFont elField512968'>
            <Input style={style_field} type="password" hint={this.props.locStrings.comp1_field_512968} onChange={this.textInputChanged_field} defaultValue={this.state.field}  />
          
          </div>
          
          <div className='actionFont elButton276758' style={style_button_outer}>
            <Button style={style_button}  variant="raised" color="accent" onClick={this.onClick_elButton276758} >
              {this.props.locStrings.comp1_button_276758}
            </Button>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
