debug = require ('../models/conn');
const puppeteer = require('puppeteer');
const axios = require('axios');
const cheerio = require('cheerio');

let scrapeKey = 'https://www.indeed.com'
const input = document.querySelector(".query-input");

function searchJobs(i) {
    const query = scrapeKey + "q=" + input.value;
    axios.get(query)
        .then(function (response) {
            data = response.data;
            console.log(response.data);
        })
        .catch(function (error) {
        });
}

const button = document.querySelector(".query-button");
button.addEventListener("click", searchJobs);

module.exports = searchJobs;