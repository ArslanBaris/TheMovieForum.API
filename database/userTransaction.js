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

  addUser(values) {
    const body_data = [
      values.UserName,
      values.FirstName,
      values.LastName,
      values.Email,
      values.Password,
      values.AvatarUrl,
    ];
    console.log("CallAddNewUser!");
    return queryAsync(
      "INSERT INTO Users (UserName,FirstName,LastName,Email,Password,AvatarUrl) VALUES (?,?,?,?,?,?) ",
      body_data
    );
  } 
  updateUser(values) {
    const body_data = [
      values.UserName,
      values.FirstName,
      values.LastName,
      values.Email,
      values.Password,
      values.AvatarUrl,
      values.Id,
    ];
    console.log("Updating was successfully");
    return queryAsync(
      "UPDATE Users SET UserName = ?, FirstName = ?, LastName = ?, Email = ?, Password = ?, AvatarUrl = ? WHERE Id = ?",
      body_data
    );
  }

  deleteUser(Id) {
    console.log("Deleting This User !");
    return queryAsync("DELETE FROM Users WHERE Id = ? ", Id);
  }

  
  getByUserName(userName) {
    console.log("Call GetUserName!", userName);
    return queryAsync("SELECT * FROM Users WHERE UserName = ? ", userName);
  } 

  getByEmail(eMail) {
    console.log("Call GetUserEmail!", eMail);
    return queryAsync("SELECT * FROM Users WHERE Email = ? ", eMail);
  }
}

module.exports = UserTrancactions;
