//This will load all enviroment variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express"),
  path = require("path"),
  cookieParser = require("cookie-parser"),
  logger = require("morgan"),
  es6Renderer = require("express-es6-template-engine"),
  app = express(),
  puppeteer = require("puppeteer"),
  axios = require("axios"),
  passport = require("passport"),
  flash = require("express-flash"),
  session = require("express-session"),
  methodOverride = require("method-override"),
  cheerio = require("cheerio");

const indexRouter = require("./routes/index");
const jobsRouter = require("./routes/jobs");
const usersRouter = require("./routes/users");

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
    secret: "smoothe operator",
    resave: false,
    saveUninitialized: false
  })
);

app.use("/", indexRouter);
app.use("/jobs", jobsRouter);
app.use("/users", usersRouter);

module.exports = app;
