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
  var number =  req.params.id;
  console.log(number);
  Day.destroy({
    where: {
      number : number
    }
  }).then(function (deleted){
    Day.update({
      number: number
      },
      {
      where: {
        number : number - 1
      }
    })
    .then(function(){
      console.log('value updated!');
    })
    .catch(next)
    console.log('The deleted worked!');
  })
  .catch(next);

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
