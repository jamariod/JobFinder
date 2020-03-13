const express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    es6Renderer = require('express-es6-template-engine'),
    app = express();
    puppeteer = require('puppeteer'),
    axios = require('axios'),
    cheerio = require('cheerio');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('html', es6Renderer);
app.set('views','./views');
app.set('view engine','html');

const indexRouter = require('./routes/index');
const jobsRouter = require('./routes/jobs');

app.use('/', indexRouter);
app.use('/jobs', jobsRouter);


module.exports = app;
