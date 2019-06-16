const restaurant = require('../models/restaurant');
const place = require('../models/place');

//Danh sach nha hang
exports.list = async (req, res, next) => {
    const data = await restaurant.list();
    res.render('restaurant/list',{data});
};

//Hien thi man hinh cho phep them, sua, xoa
exports.CUD = async (req, res, next) => {
    const data = await place.list();
    res.render('restaurant/CUD',{data});
};

//Vao man hinh them nha hang
exports.add = async (req, res, next) => {
    const id = req.params['id'];
    const data = await place.detail(id);
    res.render('restaurant/add',{data});
};
//Them nha hang
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
        hinhAnh:req.body.hinhAnh,
        idDiaDanh:id,
        tenDiaDanh:diaDanh.ten,
        viTriDiaDanh:diaDanh.viTri
    }
    await restaurant.add(data);
    res.redirect('../CUD');
};

//Vao man hinh hien thi danh sach cac nha hang o 1 dia danh nao do
exports.edit_list = async (req, res, next) => {
    const idDiaDanh = req.params['id'];
    const data = await restaurant.listByIdPlace(idDiaDanh);
    res.render('restaurant/edit_list',{data});
};
//Chon 1 nha hang can sua, vao man hinh sua
exports.edit = async (req, res, next) => {
    const idNhaHang = req.params['id'];
    const data = await restaurant.detail(idNhaHang);
    res.render('restaurant/edit',{data});
};
//Chinh sua
exports.editPost = async (req, res, next) => {
    const idNhaHang = req.params['id'];
    await restaurant.update(idNhaHang,req.body);
    const detail = await restaurant.detail(idNhaHang);
    const data = await restaurant.listByIdPlace(detail.idDiaDanh);
    res.render('restaurant/edit_list',{data});
};

//Vao man hinh hien thi danh sach cac nha hang o 1 dia danh nao do
exports.delete_list = async (req, res, next) => {
    const idDiaDanh = req.params['id'];
    const data = await restaurant.listByIdPlace(idDiaDanh);
    res.render('restaurant/delete_list',{data});
};
//Xoa nha hang
exports.delete = async (req, res, next) => {
    const idNhaHang = req.params['id'];
    const detail = await restaurant.detail(idNhaHang);
    await restaurant.delete(idNhaHang);
    const data = await restaurant.listByIdPlace(detail.idDiaDanh);
    res.render('restaurant/delete_list',{data});
};