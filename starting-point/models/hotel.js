const db = require('./db');
const Sequelize = require('sequelize');

const hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  amenities: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = hotel;
