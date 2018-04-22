import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id) {
    super(id);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "loginfirst_field_92372";
    item['en'] = "passwords";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "loginfirst_field2_76850";
    item['en'] = "username";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "loginfirst_button_286303";
    item['en'] = "New button";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "loginfirst_text_573988";
    item['en'] = "USERNAME";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "loginfirst_text2_951806";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "loginfirst_textcopy_91107";
    item['en'] = "USERNAME";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "loginfirst_password";
    item['en'] = "PASSW";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "homescreen_iconbutton_524691";
    item['en'] = "";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "homescreen_iconbutton_283829";
    item['en'] = "New button";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "homescreen_iconbuttoncopy_236422";
    item['en'] = "";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "homescreen_notifications";
    item['en'] = "";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "homescreen_menu";
    item['en'] = "";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "comp1_field2_58097";
    item['en'] = "username";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "comp1_field_512968";
    item['en'] = "passwords";
    
    item = {};
    item.key = key++;
    this.items.push(item);
    item['key'] = "comp1_button_276758";
    item['en'] = "ENTER";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
