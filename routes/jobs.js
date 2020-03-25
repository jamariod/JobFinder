const express = require("express"),
  router = express.Router();
jobModel = require("../models/jobModel");

// gets job page
router.get("/", async function(req, res) {
  const jobData = db.get('jobs').value();
  res.render("template", {
    locals: {
      title: "jobs",
      jobData: jobData
    },
    partials: {
      partial: "partial-jobs"
    }
  });
});
  // res.json(jobData);


module.exports = router;