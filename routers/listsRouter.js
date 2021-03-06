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

router.get("/userList/:userId/:typeNumber/:movieId", verifyToken, async (req, res) => {
  const results = await listsTransactions.checkUserMovieOnList(req.params.userId,req.params.typeNumber,req.params.movieId);
  if(Object.keys(results).length!==0){
    res.send({"isExist":true})   
  }
  else
  res.send({"isExist":false})
});

router.post("/list", verifyToken, async (req, res) => {
  const results = await listsTransactions.addList(req.body);
  res.json(results);
});

router.put("/list", verifyToken, async (req, res) => {
  const results = await listsTransactions.updateList(req.body);
  res.json(results);
});

router.delete("/list/:userId/:typeNumber/:movieId", verifyToken, async (req, res) => {
  const results = await listsTransactions.deleteList(req.params.userId,req.params.typeNumber,req.params.movieId);
  res.json(results);
});

module.exports = router;
