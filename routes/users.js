const express = require("express"),
  bcrypt = require("bcryptjs"),
  UserModel = require("../models/usersModel"),
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

router.get("/signup", function(req, res) {
  res.render("template", {
    locals: {
      title: "Register"
    },
    partials: {
      partial: "partial-register"
    }
  });
});

// router.post("/login", function(req, res, next) {
//   const { email, password } = req.body;

//   const hash = password;
//   const user = new UserModel(null, email, hash);
//   user.addUser();
//   res.sendStatus(200);
// });

// router.post("/signup", function(req, res, next) {
//   res.sendStatus(200);
// });
outer.post("/login", async function(req, res, next) {
  const { email, password } = req.body;

  const user = new usersModel(null, null, email, password);
  const loginResponse = await user.userLogin();
  // console.log('login response is', loginResponse);
  if (!!loginResponse.isValid) {
    req.session.is_logged_in = loginResponse.isValid;
    req.session.user_id = loginResponse.id;
    req.session.name = loginResponse.name;
    res.redirect("/");
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

  const user = new usersModel(null, name, email, hash);
  user.save().then(() => {
    res.redirect("/users/login");
  });
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
