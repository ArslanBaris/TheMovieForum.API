const ListTrancactions = require("../database/listsTransaction");
const listsTransactions = new ListTrancactions();
const router = require("express")();
const verifyToken = require("../middleware/verifyToken");

router.get("/list/:Id", verifyToken, async (req, res) => {
  const results = await listsTransactions.getListById(req.params.Id);
  res.json(results);
});

router.get("/listsAll", verifyToken, async (req, res) => {
  const results = await listsTransactions.getAllLists(req.body);
  res.json(results);
});

router.get("/userList/:userId/:typeNumber", verifyToken, async (req, res) => {
  const results = await listsTransactions.getUserLists(req.params.userId,req.params.typeNumber);
  res.json(results);
});

router.get("/user/lists/:userId", verifyToken, async (req, res) => {
  const results = await listsTransactions.getUserLists(Object.assign(req.params.userId));
  res.json(results);
});

module.exports = router;