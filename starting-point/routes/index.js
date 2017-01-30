'use strict';
const Promise = require('bluebird');
const router = require('express').Router();

const models = require('../models');

const Place = require('../models/place');
const Restaurant = require('../models/restaurant');
const Activity = require('../models/activity');
const Hotel = require('../models/hotel');


router.get('/', function (req, res, next) {
  const restPromise = Restaurant.findAll();
  const actPromise = Activity.findAll();
  const hotelPromise = Hotel.findAll();

  return Promise.all([restPromise, hotelPromise, actPromise])
  .spread(function(restaurants, hotels, activities) {
    res.render('index', {
      restaurants,
      hotels,
      activities
    });
  })
  .catch(next);
});

module.exports = router;
