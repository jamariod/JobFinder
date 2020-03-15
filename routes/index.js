const express = require('express'),
  router = express.Router();
  jobModel = require('../models/jobModel');
  scraper = require('../models/webScraper')


// gets search page
router.get('/', async (req, res) => {
  scraper().then(results => {
    console.log("results are ", results);
  
  res.render('template', {
    locals: {
      title: 'jobs',
    },
    partials: {
      partial: 'partial-search'
    }
  });
  });
});

module.exports = router;
