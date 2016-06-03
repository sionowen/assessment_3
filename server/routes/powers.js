var express = require('express');
var router = express.Router();
var Power = require('../models/power');

router.get('/', function (req, res) {
  console.log('correct route');
Power.find({}, function (err, powers) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    console.log(powers);
    res.send(powers);
  });
});


module.exports = router;
