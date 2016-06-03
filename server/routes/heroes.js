var express = require('express');
var router = express.Router();
var Hero = require('../models/hero');

router.get('/', function (req, res) {

Hero.find({}, function (err, heroes) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(heroes);
  });
});


router.post('/', function (req, res) {
  var hero = new Hero(req.body);

  hero.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});

  router.delete('/:target', function(req, res){
  console.log('this ran', req.params.target);
  id = req.params.target;
  Hero.findByIdAndRemove(id, function(err, doc){

    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  })



  })


module.exports = router;
