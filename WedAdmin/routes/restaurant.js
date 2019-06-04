const express = require('express');
const router = express.Router();
const restaurant = require('../controllers/restaurant');

router.get('/list', restaurant.list);

router.get('/CUD', restaurant.CUD);

router.get('/add/:id', restaurant.add);
router.post('/add/:id', restaurant.addPost);

router.get('/edit_list/:id', restaurant.edit_list);
router.get('/edit/:id', restaurant.edit);
router.post('/edit/:id', restaurant.editPost);

router.get('/delete_list/:id', restaurant.delete_list);
router.get('/delete/:id', restaurant.delete);

module.exports = router;