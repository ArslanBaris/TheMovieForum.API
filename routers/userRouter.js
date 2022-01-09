const UserTrancactions = require("../database/userTransaction");
const userTrancactions = new UserTrancactions();

const router = require("express")();
const verifyToken = require("../middleware/verifyToken");

router.get("/user/:Id", verifyToken, async (req, res) => {
  const users = await userTrancactions.getUserById(req.params.Id);
  res.json(users);
});

router.get("/userAll", verifyToken, async (req, res) => {
  const users = await userTrancactions.getAllUsers(req.body);
  res.json(users);
});


module.exports = router;
