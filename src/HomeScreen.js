import React, { Component } from 'react';
import './App.css';
import btn_icon_283829 from './images/btn_icon_283829.png';
import img_elRoundimage147187 from './images/HomeScreen_elRoundimage147187_147187.png';
import btn_icon_236422 from './images/btn_icon_236422.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';


export default class HomeScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      elSwapper125276_visible: true,
    };
  }

  onClick_elIconButton283829 = (ev) => {
    this.setState({elSwapper125276_visible: true});
  
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
    
    let contentElement_elSwapper125276;  // This element's content can vary based on screen size
    
    const elSwapper125276 = this.state.elSwapper125276_visible ? (
        <div className='hasNestedComps elSwapper125276'>
          <div>
            {contentElement_elSwapper125276}
          </div>
        
        </div>
        
     ) : null;
    const style_iconButton = {
        display: 'block',
        backgroundImage: 'url('+btn_icon_283829+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '89.572%',
        backgroundPosition: '0% 50%',
        cursor: 'pointer',
     };
    const style_roundimage = {
        backgroundImage: 'url('+img_elRoundimage147187+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    const style_iconButtonCopy = {
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
          { elSwapper125276 }
        </div>
        <Appbar className="navBar">
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='actionFont elIconButton283829' style={style_iconButton}  onClick={this.onClick_elIconButton283829}  />
            <div className='elRoundimage147187' style={style_roundimage} />
            <div className='actionFont elIconButtonCopy236422' style={style_iconButtonCopy}   />
          </div>
        </div>
      </div>
    )
  }
  

}
