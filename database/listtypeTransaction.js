const { FadabHelper, queryAsync } = require("fadab-mysql-helper");

class ListTypeTrancactions extends FadabHelper {

  constructor() {
    super();
    this.baseTable = "ListType";
  }

  getListTypeById(Id) {
    console.log("Call GetListType!");
    return queryAsync(`SELECT * FROM ListType WHERE Id=${Id} `);
  }

  getAllListTypes() {
    console.log("CallGetallListType!");
    return queryAsync("SELECT * FROM ListType");
  }

}

module.exports = ListTypeTrancactions;
