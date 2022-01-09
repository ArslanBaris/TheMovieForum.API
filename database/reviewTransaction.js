const { FadabHelper, queryAsync, insertAsync } = require("fadab-mysql-helper");

class ReviewTrancactions extends FadabHelper {
  constructor() {
    super();
    this.baseTable = "Reviews";
  }

  getReviewById(Id) {
    console.log("Call GetReview!");
    return queryAsync(`SELECT * FROM Reviews WHERE Id=${Id}` );
  }

  getAllReviews() {
    console.log("CallGetallReviews!");
    return queryAsync("SELECT * FROM Reviews R LEFT JOIN Users U on R.UserId=U.Id ");
  }

  getUserReviews(UserId) {
    console.log("Call GetUserReview!");
    return queryAsync(`SELECT * FROM Reviews WHERE UserId=${UserId}` );
  }
  getMovieReviews(movieId) {
    console.log("Call GetUserReview!");
    return queryAsync("SELECT * FROM ReviewUser WHERE MovieId=? ", movieId);
  }
  
}

module.exports = ReviewTrancactions;
