const { FadabHelper, queryAsync } = require("fadab-mysql-helper");

class UserTrancactions  extends FadabHelper{
  constructor() {
    super();
    this.baseTable = "Users";
  }

  getUserById(Id) {
    console.log("Call Getuser!", Id);
    return queryAsync("SELECT * FROM Users WHERE Id = ? ", Id);
  }

  getAllUsers() {
    console.log("CallGetallusers!");
    return queryAsync("SELECT * FROM Users");
  }
}

module.exports = UserTrancactions;
