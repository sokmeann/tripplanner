'use strict';

// built-in modules

const path = require('path');

// npm packages

const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

// our modules

const db = require('./models');
const routes = require('./routes');

// init

const app = express();

// nunjucks rendering boilerplate
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

// middleware

app.use(volleyball);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routing

app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));

// 404 catching, and maybe some custom error handling?

app.use(function (req, res, next) {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.render('error');
});

// start

const PORT = 3000;

db.sync()
.then(() => {
  app.listen(PORT, function () {
    console.log(`Are you watching closely? http://localhost:${PORT}`);
  });
})
.catch(err => {
  console.error('Error starting app', err);
});
