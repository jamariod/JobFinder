const express = require('express'),
  router = express.Router();
  scraper = require('../models/scraper.js')


// gets search page
router.get('/', async (req, res) => {
  scraper().then(results => {
    
    
    console.log("results are ", results);
  
  res.render('tester', {
    locals: {
      title: 'jobs',
    },
    partials: {
      partial: 'partial-results',
    
    }
  });
  });
});



module.exports = router;
