require("dotenv").config();

const options = {
  host: "drona.db.elephantsql.com",
  database: "tkbowobo",
  user: "tkbowobo",
  password: "K2YWJMmSYD4i5LL-13t_uWu-yRzRPFhE"
};

const pgp = require("pg-promise")({
  query: function(e) {
    console.log("QUERY:", e.query);
  }
});

const db = pgp(options);

module.exports = db;
