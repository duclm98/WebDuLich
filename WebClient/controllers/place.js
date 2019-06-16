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

exports.comment = async (req, res, next) => {
    const id = req.params['id'];
    const PLACE = await place.detail(id);
    const cmt = {
        tenUser:req.body.tenUser,
        email:req.body.email,
        nhanXet:req.body.nhanXet,
        idDiaDanh:id,
        tenDiaDanh:PLACE.ten,
        pheDuyet:0
    }  
    await comment.add(cmt);
    const path = "../info/"+id;
    res.redirect(path);
};