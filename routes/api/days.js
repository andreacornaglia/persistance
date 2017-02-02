var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Day = require('../../models/day');

router.get('/', function(req, res, next){
  Day.findAll().then(function(foundDays){
    res.send(foundDays);
  })
  .catch(next);
});

router.delete('/:id', function(req, res, next){
  res.send('this will delete this day');
});

router.post('/', function(req, res, next){
  //console.log(req.body)
  Day.create({
    number: parseInt(req.body.number)
  })
  .then(function (day){
    res.send(day)
  })
  .catch(next);
});

router.get('/:id/restaurants', function(req, res, next){
  var day = req.params.id;
  res.send(day);
});

router.get('/:id/hotels', function(req, res, next){
  var day = req.params.id;
  res.send(day);
});

router.get('/:id/activities', function(req, res, next){
  var day = req.params.id;
  res.send(day);
});

module.exports = router;
