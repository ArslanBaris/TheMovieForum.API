const AuthTrancactions = require("../database/authTransaction");

const authTrancactions = new AuthTrancactions();
const router = require("express")();
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  const user = await authTrancactions
    .findOneAsync({
      Email: req.body.Email,
      Password: req.body.Password,
    })
    .catch();
  if (!user) {
    res.status(400).json("Kullanıcı adı ya da şifrenizi kontrol ediniz");
    return;
  }
  var token = jwt.sign({ PersonID: user.PersonID }, "secret", {
    expiresIn: "14d",
  });
  res.json({ user, token });
});


module.exports = router;
