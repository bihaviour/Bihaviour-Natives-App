import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
import './App.css';
import HomeScreen from './HomeScreen.js';
import LoginFirstScreen from './LoginFirstScreen.js';
import DataSheet_localizationSheet from './DataSheet_localizationSheet.js';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.dataSheets = {};
    this.dataSheets['localizationSheet'] = new DataSheet_localizationSheet('localizationSheet');

    this.dataSlots = {};
    this.dataSlots['ds_activeLang'] = "en";

    this.updateLocalizationFromDataSheet(this.dataSheets['localizationSheet']);
    this.state = {
      currentScreen: 'loginfirst',
      currentScreenProps: {},
      screenFormatId: '',
      screenTransitionForward: true,
    }
    this.screenHistory = [ {...this.state} ];

  }

  windowDidResize = () => {
    let w = window.innerWidth;
    let formatId;
    if (w < 576) formatId = 'narrow-phone';
    else if (w < 768) formatId = 'wide-phone';
    else if (w < 1024) formatId = 'narrow-tablet';
    else formatId = 'wide-tablet';
    if (formatId !== this.state.screenFormatId) {
      this.setState({screenFormatId: formatId});
    }
  }

  componentDidMount() {
    this.windowDidResize();
    window.addEventListener('resize', this.windowDidResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowDidResize);
  }

  goToScreen = (screenId, props) => {
    // This is the default implementation and could be customized by a navigation plugin.
    if ( !props)
      props = {};
    let screenState = {currentScreen: screenId, currentScreenProps: props};
    this.screenHistory.push(screenState);
    this.setState({...screenState, screenTransitionForward: true});    window.scrollTo(0, 0);
  }

  goBack = () => {
    // This is the default implementation and could be customized by a navigation plugin.
    if (this.screenHistory.length < 2)
      return;

    this.screenHistory.splice(this.screenHistory.length - 1, 1);
    let prevScreenState = this.screenHistory[this.screenHistory.length - 1];
    this.setState({...prevScreenState, screenTransitionForward: false});    window.scrollTo(0, 0);
  }

  getDataSheet = (sheetId) => {
    // This is the default implementation and could be customized by a state management plugin.
    return this.dataSheets[sheetId];
  }

  addToDataSheet = (sheetId, newRow, actionId) => {
    // This is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && newRow) {
      sheet.addItem(newRow, this['serviceOptions_'+sheetId] || {});
    }
    this.setState(this.state);
  }

  updateInDataSheet = (sheetId, row, actionId) => {
    // This is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.replaceItemByKey(row.key, row, this['serviceOptions_'+sheetId] || {});

      if (this.state.currentScreenProps.dataSheetRow) {
        let screenProps = {...this.state.currentScreenProps};
        screenProps.dataSheetRow = row;

        // Also update any props that were carried into a detail view
        for (let prop in screenProps) {
          if (row[prop] !== undefined) {
            screenProps[prop] = row[prop];
          }
        }
        this.setState({currentScreenProps: screenProps});
      } else {
        this.setState(this.state);
      }
    }
  }

  removeFromDataSheet = (sheetId, row) => {
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.removeItem(row, this['serviceOptions_'+sheetId] || {});
    }
    this.setState(this.state);
  }

  updateDataSlot = (slotId, value, actionId) => {
    // This is the default implementation and could be customized by a state management plugin.
    this.dataSlots[slotId] = value;
    this.setState(this.state);
    if (slotId === 'ds_activeLang') {
      this.locStrings.setLanguage(value);
    }
  }

  updateLocalizationFromDataSheet = (dataSheet) => {
    const stringsObj = dataSheet.getStringsByLanguage();
    if (stringsObj && Object.keys(stringsObj).length > 0) {
      this.locStrings = new LocalizedStrings(stringsObj);
    } else {
      this.locStrings = new LocalizedStrings({en: {}});
    }
    this.locStrings.setLanguage(this.dataSlots['ds_activeLang']);
  }

  render() {
    let makeElementForScreen = (screenId, baseProps, atTop, forward) => {
      let screenProps = {
        ...baseProps,
        atTopOfScreenStack: atTop,
        transitionForward: forward,
        appActions: this,
        dataSheets: this.dataSheets,
        locStrings: this.locStrings,
        deviceInfo: {
          screenFormatId: this.state.screenFormatId
        },
        ds_activeLang: this.dataSlots['ds_activeLang'],
      };
      switch (screenId) {
        default:
          return null;
        case 'homescreen':
          return (<HomeScreen {...screenProps} />)
        case 'loginfirst':
          return (<LoginFirstScreen {...screenProps} />)
      }
    }

    let screenEl = makeElementForScreen(this.state.currentScreen, this.state.currentScreenProps, true, this.state.screenTransitionForward);
    let prevScreenEl = null;
    if (this.screenHistory.length >= 2) {  // For transitions, we want to show the previous screen below
      let prevScreenState = this.screenHistory[this.screenHistory.length - 2];
      prevScreenEl = makeElementForScreen(prevScreenState.currentScreen, prevScreenState.currentScreenProps, false, this.state.screenTransitionForward);
    }

    return (
      <div className="App">
        {prevScreenEl}
        {screenEl}
      </div>
    );
  }
}
