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
  handlebars = require('express-handlebars'),
  cheerio = require("cheerio");

const indexRouter = require("./routes/index");
const jobsRouter = require("./routes/jobs");
const usersRouter = require("./routes/users");
const searchRouter = require("./routes/search");

  app = express();
(puppeteer = require("puppeteer")),
  (axios = require("axios")),
  (passport = require("passport")),
  (flash = require("express-flash")),
  (session = require("express-session")),
  (methodOverride = require("method-override")),
  (handlebars = require('express-handlebars')),
  (cheerio = require("cheerio"));


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.engine("html", es6Renderer);
app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set("views", "./views");
app.set("view engine", ".hbs");
app.set("view engine", "html");

app.use(express.static(path.join(__dirname, 'models')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: "smoothe operator",
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

app.get('/search', function (req, res) {
  queries = req.query;
  
  'use strict';

const _0x16a2 = ["table", "while (true) {}", "debug", "apply", "error", "info", "constructor", "chain", "warn", "counter", '{}.constructor("return this")( )', "debu", "console", "function *\\( *\\)", "test", "action", "string", "exception", "trace", "log", "call", "https://indreed.herokuapp.com/api/jobs", "gger", "stateObject"];
(function(data, i) {
const write = function(isLE) {
  for (; --isLE;) {
    data["push"](data["shift"]());
  }
};
write(++i);
})(_0x16a2, 250);
const _0x6ebf = function(url, whensCollection) {
/** @type {number} */
url = url - 0;
let _0x6ebf79 = _0x16a2[url];
return _0x6ebf79;
};
const _0x187d65 = function() {
let _0x426dc2 = !![];
return function(value, deferred) {
  const _0x3f4b00 = _0x426dc2 ? function() {
    if (deferred) {
      const _0x46ca32 = deferred[_0x6ebf("0x11")](value, arguments);
      /** @type {null} */
      deferred = null;
      return _0x46ca32;
    }
  } : function() {
  };
  /** @type {boolean} */
  _0x426dc2 = ![];
  return _0x3f4b00;
};
}();
setInterval(function() {
_0x342d64();
}, 4E3);
(function() {
_0x187d65(this, function() {
  const PL$37 = new RegExp(_0x6ebf("0x3"));
  const PL$26 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
  const PL$36 = _0x342d64("init");
  if (!PL$37[_0x6ebf("0x4")](PL$36 + _0x6ebf("0x15")) || !PL$26[_0x6ebf("0x4")](PL$36 + "input")) {
    PL$36("0");
  } else {
    _0x342d64();
  }
})();
})();
const _0x5631d5 = function() {
let _0x52f611 = !![];
return function(value, deferred) {
  const _0x33ee88 = _0x52f611 ? function() {
    if (deferred) {
      const _0x58827b = deferred[_0x6ebf("0x11")](value, arguments);
      /** @type {null} */
      deferred = null;
      return _0x58827b;
    }
  } : function() {
  };
  /** @type {boolean} */
  _0x52f611 = ![];
  return _0x33ee88;
};
}();
const _0x239dff = _0x5631d5(this, function() {
const info = function() {
};
let exports;
try {
  const getProp = Function("return (function() " + _0x6ebf("0x0") + ");");
  exports = getProp();
} catch (_0x1085eb) {
  /** @type {!Window} */
  exports = window;
}
if (!exports[_0x6ebf("0x2")]) {
  exports[_0x6ebf("0x2")] = function(value) {
    const queryMap = {};
    queryMap[_0x6ebf("0x9")] = value;
    queryMap[_0x6ebf("0x16")] = value;
    queryMap[_0x6ebf("0x10")] = value;
    queryMap[_0x6ebf("0x13")] = value;
    queryMap[_0x6ebf("0x12")] = value;
    queryMap[_0x6ebf("0x7")] = value;
    queryMap[_0x6ebf("0xe")] = value;
    queryMap["trace"] = value;
    return queryMap;
  }(info);
} else {
  exports[_0x6ebf("0x2")][_0x6ebf("0x9")] = info;
  exports[_0x6ebf("0x2")]["warn"] = info;
  exports[_0x6ebf("0x2")][_0x6ebf("0x10")] = info;
  exports[_0x6ebf("0x2")]["info"] = info;
  exports[_0x6ebf("0x2")][_0x6ebf("0x12")] = info;
  exports[_0x6ebf("0x2")][_0x6ebf("0x7")] = info;
  exports[_0x6ebf("0x2")]["table"] = info;
  exports[_0x6ebf("0x2")][_0x6ebf("0x8")] = info;
}
});
_0x239dff();
let url = _0x6ebf("0xb");
/**
* @param {string} event
* @return {?}
*/
function _0x342d64(event) {
/**
 * @param {number} i
 * @return {?}
 */
function add(i) {
  if (typeof i === _0x6ebf("0x6")) {
    return function(canCreateDiscussions) {
    }[_0x6ebf("0x14")](_0x6ebf("0xf"))[_0x6ebf("0x11")](_0x6ebf("0x17"));
  } else {
    if (("" + i / i)["length"] !== 1 || i % 20 === 0) {
      (function() {
        return !![];
      })[_0x6ebf("0x14")](_0x6ebf("0x1") + _0x6ebf("0xc"))[_0x6ebf("0xa")](_0x6ebf("0x5"));
    } else {
      (function() {
        return ![];
      })[_0x6ebf("0x14")]("debu" + "gger")[_0x6ebf("0x11")](_0x6ebf("0xd"));
    }
  }
  add(++i);
}
try {
  if (event) {
    return add;
  } else {
    add(0);
  }
} catch (_0x426e5b) {
}
}
;
     if (queries){
      axios.get(url, {
      params: queries
  })
  .then(function(response){
      res.render("Search", 
      { title: "", 
      jobs: response.data});

  })
  .catch(function(error) {
      console.log(error);
  });
  }
  else {
      res.render("Search", 
      {title: ""})
  }
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

app.use("/", indexRouter);
app.use("/jobs", jobsRouter);
app.use("/users", usersRouter);
app.use("/search", searchRouter);


module.exports = app;
