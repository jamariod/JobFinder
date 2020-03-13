const express = require('express'),
  router = express.Router();
  jobModel = require('../models/jobModel');

// gets job page
router.get('/jobs', async function (req, res) {
    const jobData = await jobModel.getAllJobs();
  
  
    res.render('template', {
      locals: {
        title: 'jobs',
        jobData: jobData,
      },
      partials: {
        partial: 'partial-jobs'
      }
    });
  });

  module.exports = router;