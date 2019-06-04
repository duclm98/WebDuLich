const express = require('express');
const router = express.Router();
const hotel = require('../controllers/hotel');

router.get('/list', hotel.list);

router.get('/CUD', hotel.CUD);

router.get('/add/:id', hotel.add);
router.post('/add/:id', hotel.addPost);

router.get('/edit_list/:id', hotel.edit_list);
router.get('/edit/:id', hotel.edit);
router.post('/edit/:id', hotel.editPost);

router.get('/delete_list/:id', hotel.delete_list);
router.get('/delete/:id', hotel.delete);

module.exports = router;