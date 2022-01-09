const MessageTrancactions = require("../database/messageTransaction");
const MessageTransactions = new MessageTrancactions();
const router = require("express")();
const verifyToken = require("../middleware/verifyToken");

router.get("/message/:Id", verifyToken, async (req, res) => {
  const results = await MessageTransactions.getMessageById(req.params.Id);
  res.json(results);
});

router.get("/messagesAll", verifyToken, async (req, res) => {
  const results = await MessageTransactions.getAllMessages(req.body);
  res.json(results);
});

router.get("/DiscussionMessages/:discussionId", verifyToken, async (req, res) => {
  const results = await MessageTransactions.getDiscussionMessages(req.params.discussionId);
  res.json(results);
});

router.get("/user/messages/:userId", verifyToken, async (req, res) => {
  const results = await MessageTransactions.getUserMessages(
    Object.assign(req.params.userId)
  );
  res.json(results);
});



module.exports = router;
