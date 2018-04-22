import React, { Component } from 'react';
import './App.css';
import img_elHeaderb149901 from './images/LoginFirstScreen_elHeaderb149901_149901.jpg';


export default class LoginFirstScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: '#f4f4f4',
        pointerEvents: 'none',
     };
    const style_headerb = {
        backgroundImage: 'url('+img_elHeaderb149901+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    
    return (
      <div className="AppScreen LoginFirstScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground516277' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='containerMinHeight elHeaderb149901' style={style_headerb} />
          </div>
        </div>
      </div>
    )
  }
  

}
