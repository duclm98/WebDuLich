const restaurant = require('../models/restaurant');
const place = require('../models/place');

exports.list = async (req, res, next) => {
    const data = await restaurant.list();
    res.render('restaurant/list',{data});
};

exports.CUD = async (req, res, next) => {
    const data = await place.list();
    res.render('restaurant/CUD',{data});
};

exports.add = async (req, res, next) => {
    const id = req.params['id'];
    const data = await place.detail(id);
    res.render('restaurant/add',{data});
};
exports.addPost = async (req, res, next) => {
    const id = req.params['id'];
    const diaDanh = await place.detail(id);
    const data={
        ten:req.body.ten,
        diaChi:req.body.diaChi,
        sdt:req.body.sdt,
        email:req.body.email,
        gia:req.body.gia,
        moTa:req.body.moTa,
        idDiaDanh:id,
        tenDiaDanh:diaDanh.ten,
        viTriDiaDanh:diaDanh.viTri
    }
    await restaurant.add(data);
    res.redirect('../CUD');
};