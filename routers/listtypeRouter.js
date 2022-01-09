const ListTypeTrancactions = require("../database/listtypeTransaction");
const listtypeTransactions = new ListTypeTrancactions();
const router = require("express")();
const verifyToken = require("../middleware/verifyToken");

router.get("/listtype/:Id", verifyToken, async (req, res) => {
  const results = await listtypeTransactions.getListTypeById(req.params.Id);
  res.json(results);
});
router.get("/listtypeAll", verifyToken, async (req, res) => {
  const results = await listtypeTransactions.getAllListTypes(req.body);
  res.json(results);
});



module.exports = router;
