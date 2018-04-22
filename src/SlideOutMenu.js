import React, { Component } from 'react';
import './App.css';


export default class SlideOutMenu extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_card = {
        width: '100%',
        height: '100%',
     };
    const style_card_outer = {
        backgroundColor: '#505052',
        pointerEvents: 'none',
     };
    
    return (
      <div className="SlideOutMenu" style={baseStyle}>
        <div className="background">
          <div className='elCard310236' style={style_card_outer}>
            <div style={style_card} />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
