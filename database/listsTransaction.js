const { FadabHelper, queryAsync, insertAsync } = require("fadab-mysql-helper");

class ListTrancactions extends FadabHelper {
  constructor() {
    super();
    this.baseTable = "Lists";
  }

  getListById(Id) {
    console.log("Call GetList!");
    return queryAsync(`SELECT * FROM Lists WHERE Id=${Id} `);
  }

  getAllLists() {
    console.log("CallGetallLists!");
    return queryAsync("SELECT * FROM Lists");
  }

  getUserLists(UserId,typeNumber) {
    console.log("Call GetUserList!");
    return queryAsync(`SELECT * FROM Lists WHERE UserId=${UserId} and ListType = ${typeNumber} `);
  }
}

module.exports = ListTrancactions;
