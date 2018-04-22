import React, { Component } from 'react';
import './App.css';
import img_elHeaderb149901 from './images/LoginFirstScreen_elHeaderb149901_149901.jpg';
import Comp1 from './Comp1';
import img_elRoundimage688288 from './images/HomeScreen_elRoundimage147187_147187.png';


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
    
    const style_headerb = {
        backgroundImage: 'url('+img_elHeaderb149901+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: 'rgba(0, 0, 0, 0.6000)',
        pointerEvents: 'none',
     };
    const style_roundimage = {
        backgroundImage: 'url('+img_elRoundimage688288+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    
    return (
      <div className="AppScreen LoginFirstScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elHeaderb149901' style={style_headerb} />
          <div className='containerMinHeight elBackground516277' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elComp617422'>
            <div>
              <Comp1 appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elRoundimage688288' style={style_roundimage} />
          </div>
        </div>
      </div>
    )
  }
  

}
