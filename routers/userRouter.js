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

router.get("/verifyUserName/:UserName", async (req, res) => {
  const userName = await userTrancactions.getByUserName(req.params.UserName);
  if(Object.keys(userName).length!==0)
  res.send({"isExist":true})
  else
  res.send({"isExist":false})
});

router.get("/verifyEmail/:Email", async (req, res) => {
  const email = await userTrancactions.getByEmail(req.params.Email);
  if(Object.keys(email).length!==0)
    res.send({"isExist":true})    
  else
  res.send({"isExist":false})  
});

router.put("/user", verifyToken, async (req, res) => {
  const users = await userTrancactions.updateUser(Object.assign(req.body));
  res.json(users);
});


router.delete("/user/:Id", verifyToken, async (req, res) => {
  const users = await userTrancactions.deleteUser(req.params.Id);
  res.json(users);
});

module.exports = router;
