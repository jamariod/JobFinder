const express = require('express'),
  router = express.Router();
  jobModel = require('../models/jobModel');


// gets search page
router.get('/', async (req, res) => {

  res.render('template', {
    locals: {
      title: 'jobs',
    },
    partials: {
      partial: 'partial-search'
    }
  });
});

module.exports = router;
