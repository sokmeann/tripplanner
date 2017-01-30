'use strict';
//const Sequelize = require('sequelize');
const db = require('./db');

// require all the models
const Place = require('./place');
const Hotel = require('./hotel');
const Activity = require('./activity');
const Restaurant = require('./restaurant');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = db;
