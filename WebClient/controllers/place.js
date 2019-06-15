const place = require('../models/place');

exports.info = async (req, res, next) => {
    const id = req.params['id'];
    const data = await place.detail(id);
    res.render('place/info', {data}); 
};