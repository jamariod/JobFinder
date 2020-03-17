const express = require("express"),
  bcrypt = require("bcryptjs"),
  usersModel = require("../models/usersModel"),
  router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
  res.render("template", {
    locals: {
      title: "Login"
    },
    partials: {
      partial: "partial-login"
    }
  });
});

router.post("/login", async function(req, res, next) {
  const { email, password } = req.body;

  const user = new usersModel(null, null, null, null, email, password);
  const loginResponse = await user.loginUser();
  console.log("login response is", loginResponse);
<<<<<<< HEAD
=======

  const user = new UserModel(null, null, email, password);
  const loginResponse = await user.userLogin();
  // console.log('login response is', loginResponse);

>>>>>>> 668c830dc769f4ce484f7821fa816046fcf1a2af
  if (!!loginResponse.isValid) {
    req.session.is_logged_in = loginResponse.isValid;
    req.session.user_id = loginResponse.id;
    req.session.name = loginResponse.name;
    res.redirect("../jobs");
  } else {
    res.sendStatus(403);
  }
});

router.get("/register", (req, res) => {
  res.render("template", {
    locals: {
      title: "Register",
      is_logged_in: req.session.is_logged_in
    },
    partials: {
      partial: "partial-register"
    }
  });
});

router.post("/register", async (req, res) => {
  const { name, email } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const user = new usersModel(null, null, null, name, email, hash);
  user.addUser().then(() => {
    console.log(user);
    res.redirect("/");
<<<<<<< HEAD
=======

  const user = new UserModel(null, name, email, hash);
  user.save().then(() => {
    res.redirect("/users/login");

>>>>>>> 668c830dc769f4ce484f7821fa816046fcf1a2af
  });
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
