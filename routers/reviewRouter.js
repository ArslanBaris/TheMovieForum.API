const ReviewTrancactions = require("../database/reviewTransaction");
const reviewTransactions = new ReviewTrancactions();
const router = require("express")();
const verifyToken = require("../middleware/verifyToken");

router.get("/review/:Id", verifyToken, async (req, res) => {
  const results = await reviewTransactions.getReviewById(req.params.Id);
  res.json(results);
});

router.get("/reviewAll", async (req, res) => {
  const results = await reviewTransactions.getAllReviews(req.body);
  res.json(results);
});

router.get("/movieReviewAll/:movieId", verifyToken, async (req, res) => {
  const results = await reviewTransactions.getMovieReviews(req.params.movieId);
  res.json(results);
});


router.get("/user/reviews/:userId", verifyToken, async (req, res) => {
  const results = await reviewTransactions.getUserReviews(
    Object.assign(req.params.userId)
  );
  res.json(results);
});

module.exports = router;
