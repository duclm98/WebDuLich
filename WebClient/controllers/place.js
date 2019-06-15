const place = require('../models/place');
const comment = require('../models/comment');
const hotel = require('../models/hotel');
const restaurant = require('../models/restaurant');

exports.info = async (req, res, next) => {
    const id = req.params['id'];
    const PLACE = await place.detail(id);
    const COMMENTS = await comment.list(id);
    const HOTELS = await hotel.listByIdDiaDanh(id);
    const RESTAURANTS = await restaurant.listByIdDiaDanh(id);
    res.render('place/info', {PLACE,COMMENTS,HOTELS,RESTAURANTS}); 
};