debug = require("../models/conn");
// const puppeteer = require("puppeteer");
const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../public/scripts/db")

async function searchJobs() {
  const url = await axios
    .get("https://indeed.com/jobs?q=Web+Developer&l=Atlanta&fromage=last")
    .then(response => response)

    .then(res => {
      const jobs = [];
      const $ = cheerio.load(res.data);

      $(".result").each((index, element) => {
        const title = $(element)
          .children(".title")
          .text();
        const linkToJob = $(element)
          .children(".title")
          .children("a")
          .attr("href");
        const body = $(element)
          .children(".summary")
          .text();
        jobs.push({ title, linkToJob, body });
      });

      
      db.set('jobs', jobs).write();

    });
}

module.exports = searchJobs;
