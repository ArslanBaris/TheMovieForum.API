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

  addReview(values) {
    const body_data = [
      values.UserId,
      values.Title,
      values.MovieId,
      values.MessageText,
      values.CreatedDate,
    ];
    console.log("CallAddNewReview!");
    return queryAsync(
      "INSERT INTO Reviews (UserId,Title,MovieId,MessageText,CreatedDate) VALUES (?,?,?,?,?) ",
      body_data
    );
  }

  updateReview(values) {
    const body_data = [
      values.UserId,
      values.Title,
      values.MovieId,
      values.MessageText,
      values.CreatedDate,
      values.Id,
    ];
    console.log("Updating review was successfully");
    return queryAsync(
      "UPDATE Reviews SET UserId = ?, Title = ?, MovieId = ?, MessageText = ?,  CreatedDate = ? WHERE Id = ?",
      body_data
    );
  }
  
  deleteReview(Id) {
    console.log("Deleting This Review !");
    return queryAsync("DELETE FROM Reviews WHERE Id = ? ", Id);
  }
 

}

module.exports = ReviewTrancactions;
