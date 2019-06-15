var express = require('express');
var router = express.Router();
const index = require('../controllers');

router.get('/', index.home);

module.exports = router;
