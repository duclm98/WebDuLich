const express = require('express');
const router = express.Router();
const place = require('../controllers/place');

router.get('/list', place.list);

router.get('/add', place.add);
router.post('/add', place.addPost);

router.get('/edit_list', place.edit_list);
router.get('/edit/:id', place.edit);
router.post('/edit/:id', place.editPost);

router.get('/delete_list', place.delete_list);
router.get('/delete_list/:id', place.delete);

module.exports = router;