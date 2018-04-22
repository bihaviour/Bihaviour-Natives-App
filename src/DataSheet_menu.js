import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_menu extends DataSheetBase {

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
    item['MenuDesc'] = "Go to homescreen";
    item['MenuTitle'] = "Home";
    item['MenuCode'] = "home";
  }

}
