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

  addList(values) {
    const body_data = [values.ListType, values.UserId, values.MovieId];
    console.log("CallAddNewList!");
    return queryAsync(
      "INSERT INTO Lists (ListType,UserId,MovieId) VALUES (?,?,?) ",
      body_data
    );
  }
  
  updateList(values) {
    const body_data = [
      values.ListType,
      values.UserId,
      values.MovieId,
      values.Id,
    ];
    console.log("Updating List was successfully");
    return queryAsync(
      "UPDATE Lists SET ListType = ?, UserId = ?, MovieId = ? WHERE Id = ?",
      body_data
    );
  }

  deleteList(UserId,typeNumber,movieId) {
    console.log("Deleting This List !");
    return queryAsync(`DELETE FROM Lists WHERE UserId=${UserId} and ListType = ${typeNumber}   and MovieId = ${movieId}`);
  }
  
  checkUserMovieOnList(UserId,typeNumber,movieId) {
    console.log("Call checkUserMovieOnList!");
    return queryAsync(`SELECT * FROM Lists WHERE UserId=${UserId} and ListType = ${typeNumber}   and MovieId = ${movieId}`);
  }
}

module.exports = ListTrancactions;
