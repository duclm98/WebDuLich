const user = require('../models/user');
const comment = require('../models/comment');

//Hiển thị danh sách user
exports.listUser = async (req, res, next) => {
    const data = await user.list();
    res.render('user/listUser',{data});
};

//Hiển thị danh sách user
exports.deleteUser_list = async (req, res, next) => {
    const data = await user.list();
    res.render('user/deleteUser_list',{data});
};
//Xóa user với id truyền vào
exports.deleteUser = async (req, res, next) => {
    const id = req.params['id'];
    await user.delete(id);
    res.redirect('../deleteUser_list');
};

//Hiển thị danh sách comment đã được phê duyệt
exports.listComment = async (req, res, next) => {
    const data = await comment.listBeReview();
    res.render('user/listComment',{data});
};

//Hiển thị danh sách comment đã được phê duyệt
exports.deleteComment_list = async (req, res, next) => {
    const data = await comment.listBeReview();
    res.render('user/deleteComment_list',{data});
};
//Xóa comment đã được phê duyệt
exports.deleteCommentBeReview = async (req, res, next) => {
    const id = req.params['id'];
    await comment.delete(id);
    res.redirect('../deleteComment_list');
};

//Hiển thị danh sách comment chưa được phê duyệt
exports.reviewComments = async (req, res, next) => {
    const data = await comment.listBeingReview();
    res.render('user/reviewComments',{data});
};
//Phê duyệt comment
exports.review = async (req, res, next) => {
    const id = req.params['id'];
    await comment.update(id);
    res.redirect('../reviewComments');
};
//Xóa comment không đáp ứng
exports.delete = async (req, res, next) => {
    const id = req.params['id'];
    await comment.delete(id);
    res.redirect('../reviewComments');
};
