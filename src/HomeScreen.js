import React, { Component } from 'react';
import './App.css';
import SlideOutMenu from './SlideOutMenu';
import btn_icon_283829 from './images/btn_icon_283829.png';
import img_elLogoIcon147187 from './images/HomeScreen_elLogoIcon147187_147187.png';
import btn_icon_236422 from './images/btn_icon_236422.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';


export default class HomeScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      elMenuSlideOut73311_visible: true,
    };
  }

  onClick_elMenuSlideOut73311 = (ev) => {
  
  }
  
  
  onClick_elMenuIcon283829 = (ev) => {
    this.setState({elMenuSlideOut73311_visible: false});
  
  }
  
  
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
    const style_menuSlideOut_outer = {
        boxShadow: '0.0px 2.3px 18px rgba(0, 0, 0, 0.1600)',
        cursor: 'pointer',
     };
    const elMenuSlideOut73311 = this.state.elMenuSlideOut73311_visible ? (
        <div className='hasNestedComps elMenuSlideOut73311' style={style_menuSlideOut_outer}>
          <div onClick={this.onClick_elMenuSlideOut73311} >
            <SlideOutMenu appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
        
        </div>
        
     ) : null;
    
    let contentElement_elSwapper125276;  // This element's content can vary based on screen size
    
    const style_menuIcon = {
        display: 'block',
        backgroundImage: 'url('+btn_icon_283829+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '89.572%',
        backgroundPosition: '0% 50%',
        cursor: 'pointer',
     };
    const style_logoIcon = {
        backgroundImage: 'url('+img_elLogoIcon147187+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    const style_notificationIcon = {
        display: 'block',
        backgroundImage: 'url('+btn_icon_236422+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '89.709%',
        backgroundPosition: '0% 50%',
        pointerEvents: 'none',
     };
    
    return (
      <div className="AppScreen HomeScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground732314' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="flowRow flowRow_HomeScreen_elMenuSlideOut73311_73311">
          { elMenuSlideOut73311 }
          </div>
          <div className='hasNestedComps elSwapper125276'>
            <div>
              {contentElement_elSwapper125276}
            </div>
          
          </div>
          
        </div>
        <Appbar className="navBar">
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='actionFont elMenuIcon283829' style={style_menuIcon}  onClick={this.onClick_elMenuIcon283829}  />
            <div className='elLogoIcon147187' style={style_logoIcon} />
            <div className='actionFont elNotificationIcon236422' style={style_notificationIcon}   />
          </div>
        </div>
      </div>
    )
  }
  

}
