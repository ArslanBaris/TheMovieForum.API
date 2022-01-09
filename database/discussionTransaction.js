const { FadabHelper, queryAsync } = require("fadab-mysql-helper");

class DiscussionTrancactions extends FadabHelper {
  constructor() {
    super();
    this.baseTable = "Discussions";
  }

  getDiscussionById(Id) {
    console.log("Call GetDiscussion!");
    return queryAsync(`SELECT * FROM Discussions WHERE Id=${Id}`);
  }

  getAllDiscussions() {
    console.log("CallGetallDiscussions!");
    return queryAsync("SELECT * FROM Discussions").catch((e) => {
      console.log(e);
    });
  }
 
  getUserDiscussions(userId) {
    console.log("Call GetUserDiscussion!");
    return queryAsync(`SELECT * FROM Discussions WHERE UserId=${userId}`);
  }
  
  getMovieDiscussions(movieId) {

    console.log("Call GetMovieDiscussions!");
    return queryAsync(`SELECT * FROM DiscussionUser WHERE MovieId=${movieId}`);
  }


}

module.exports = DiscussionTrancactions;
