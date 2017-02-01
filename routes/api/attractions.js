var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var daysRouter = require('./api/days');

router.use('/days', daysRouter);

router.get('/hotels', function(req, res, next){
  Hotel.findAll()
       .then(function (foundHotels){
         res.json(foundHotels)
       })
       .catch(function(err){
        console.error(err);
       })
})

router.get('/restaurants', function(req, res, next){
  Restaurant.findAll()
       .then(function (foundRestaurants){
         res.json(foundRestaurants)
       })
})

router.get('/activities', function(req, res, next){
  Activity.findAll()
       .then(function (foundActivities){
         res.json(foundActivities)
       })
})

module.exports = router;
