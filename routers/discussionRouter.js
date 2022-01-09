const DiscussionTrancactions = require("../database/discussionTransaction");
const discussionTransactions = new DiscussionTrancactions();
const router = require("express")();
const verifyToken = require("../middleware/verifyToken");

router.get("/discussion/:Id", verifyToken, async (req, res) => {
  const results = await discussionTransactions.getDiscussionById(req.params.Id);
  res.json(results);
});

router.get("/discussionAll", async (req, res) => {
  const results = await discussionTransactions
    .getAllDiscussions(req.body)
    .catch((e) => {
      console.log(e);
    });
  res.json(results);
});

router.get("/moviediscussionAll/:movieId", verifyToken, async (req, res) => {
  const results = await discussionTransactions.getMovieDiscussions(req.params.movieId);
  res.json(results);
});

router.get("/user/discussions/:userId", verifyToken, async (req, res) => {
  const results = await discussionTransactions.getUserDiscussions(
    Object.assign(req.params.userId)
  );
  res.json(results);
});

module.exports = router;
