'use strict';

const db = require('./db');

// require all the models

const Activity = require('./activity');
const Hotel = require('./hotel');
const Place = require('./place');
const Restaurant = require('./restaurant');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = db;
