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

  addListType(values) {
    const body_data = [values.TypeName];
    console.log("CallAddNewListType!");
    return queryAsync("INSERT INTO ListType (TypeName) VALUES (?) ", body_data);
  }

  updateListType(values) {
    const body_data = [values.TypeName, values.Id];
    console.log("Updating ListType was successfully");
    return queryAsync(
      "UPDATE ListType SET TypeName = ?  WHERE Id = ?",
      body_data
    );
  }

  deleteListType(Id) {
    console.log("Deleting This ListType !");
    return queryAsync("DELETE FROM ListType WHERE Id = ? ", Id);
  }

}

module.exports = ListTypeTrancactions;
