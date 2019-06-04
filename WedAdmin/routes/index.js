var express = require('express');
var router = express.Router();
const place = require('../models/place');

router.get('/', async function(req, res, next) {
  const data = await place.list();
  res.render('index', { data });
});

module.exports = router;
