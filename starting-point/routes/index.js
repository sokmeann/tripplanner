'use strict';

const Promise = require('bluebird');

const router = require('express').Router();
const models = require('../models').models;
const Hotel = models.hotel;
const Activity = models.activity;
const Restaurant = models.restaurant;
const Place = models.place;

router.get('/', function (req, res, next) {
  let hotelPromise = Hotel.findAll();
  let activityPromise = Activity.findAll();
  let restaurantPromise = Restaurant.findAll();

  Promise.all([hotelPromise, activityPromise, restaurantPromise])
  .then(([hotels, activities, restaurants]) => {
    res.render('home', {
      hotels: hotels,
      activities: activities,
      restaurants: restaurants
    })
  })
  .catch(next);
});

module.exports = router;
