const express = require('express');
const router = express.Router();
const restaurant = require('../controllers/restaurant');

router.get('/list', restaurant.list);

router.get('/CUD', restaurant.CUD);

router.get('/add/:id', restaurant.add);
router.post('/add/:id', restaurant.addPost);

module.exports = router;