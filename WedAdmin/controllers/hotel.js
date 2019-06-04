const hotel = require('../models/hotel');
const place = require('../models/place');

//Danh sach khach san
exports.list = async (req, res, next) => {
    const data = await hotel.list();
    res.render('hotel/list',{data});
};

//Hien thi man hinh cho phep them, sua, xoa
exports.CUD = async (req, res, next) => {
    const data = await place.list();
    res.render('hotel/CUD',{data});
};

//Vao man hinh them khach san
exports.add = async (req, res, next) => {
    const idDiaDanh = req.params['id'];
    const data = await place.detail(idDiaDanh);
    res.render('hotel/add',{data});
};
//Them khach san
exports.addPost = async (req, res, next) => {
    const idDiaDanh = req.params['id'];
    const diaDanh = await place.detail(idDiaDanh);
    const data={
        ten:req.body.ten,
        diaChi:req.body.diaChi,
        sdt:req.body.sdt,
        email:req.body.email,
        moTa:req.body.moTa,
        single:req.body.single,
        double:req.body.double,
        queen:req.body.queen,
        king:req.body.king,
        idDiaDanh:idDiaDanh,
        tenDiaDanh:diaDanh.ten,
        viTriDiaDanh:diaDanh.viTri
    }
    await hotel.add(data);
    res.redirect('../CUD');
};

//Vao man hinh hien thi danh sach cac khach san o 1 dia danh nao do
exports.edit_list = async (req, res, next) => {
    const idDiaDanh = req.params['id'];
    const data = await hotel.listByIdPlace(idDiaDanh);
    res.render('hotel/edit_list',{data});
};
//Chon 1 khach san can sua vao man hinh sua
exports.edit = async (req, res, next) => {
    const idKhachSan = req.params['id'];
    const data = await hotel.detail(idKhachSan);
    res.render('hotel/edit',{data});
};
//Chinh sua
exports.editPost = async (req, res, next) => {
    const idKhachSan = req.params['id'];
    await hotel.update(idKhachSan,req.body);
    const detail = await hotel.detail(idKhachSan);//Lấy ra khách sạn dựa vào id
    const data = await hotel.listByIdPlace(detail.idDiaDanh);//Lấy ra danh sách khách sạn của địa danh chứa khác sạn đã sửa ở trên
    res.render('hotel/edit_list',{data});
};

//Vao man hinh hien thi danh sach cac khach san o 1 dia danh nao do
exports.delete_list = async (req, res, next) => {
    const idDiaDanh = req.params['id'];
    const data = await hotel.listByIdPlace(idDiaDanh);
    res.render('hotel/delete_list',{data});
};
//Xoa khach san
exports.delete = async (req, res, next) => {
    const idKhachSan = req.params['id'];
    const detail = await hotel.detail(idKhachSan);//Lấy ra khách sạn dựa vào id
    await hotel.delete(idKhachSan);
    const data = await hotel.listByIdPlace(detail.idDiaDanh);//Lấy ra danh sách khách sạn của địa danh chứa khác sạn đã xóa ở trên
    res.render('hotel/delete_list',{data});
};