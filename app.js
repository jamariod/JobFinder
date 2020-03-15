//This will load all enviroment variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express"),
  path = require("path"),
  cookieParser = require("cookie-parser"),
  logger = require("morgan"),
  es6Renderer = require("express-es6-template-engine"),
  app = express();
(puppeteer = require("puppeteer")),
  (axios = require("axios")),
  (passport = require("passport")),
  (flash = require("express-flash")),
  (session = require("express-session")),
  (methodOverride = require("method-override")),
  (cheerio = require("cheerio"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.engine("html", es6Renderer);
app.set("views", "./views");
app.set("view engine", "html");
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

app.get("/", checkAuthenticated, (req, res) => {
  res.render("partial-index.html", { name: req.user.name });
});

app.get("/login", checkNotAuthenticated, (req, res) => {
  res.render("partial-login.html");
});

app.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "login",
    failureFlash: true
  })
);

app.get("/register", checkNotAuthenticated, (req, res) => {
  res.render("partial-register.html");
});

app.post("/register", checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });
    res.redirect("/login");
  } catch {
    res.redirect("/register");
  }
  console.log(users);
});

app.delete("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}

const indexRouter = require("./routes/index");
const jobsRouter = require("./routes/jobs");

const initializedPassport = require("./passport-config");
initializedPassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
);

const users = [];

app.use("/", indexRouter);
app.use("/jobs", jobsRouter);

module.exports = app;
