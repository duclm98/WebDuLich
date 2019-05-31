const place = require('../models/place');


exports.list = async (req, res, next) => {
    const data = await place.list();
    res.render('place/list', { data })
};


exports.add = async (req, res, next) => {
    res.render('place/add')
};
exports.addPost = async (req, res, next) => {
    await place.add(req.body);
    res.render('place/add');
};


exports.edit_list = async (req, res, next) => {
    const data = await place.list();
    res.render('place/edit_list', { data })
};
exports.edit = async (req, res, next) => {
    const id = req.params['id'];
    const data = await place.detail(id);
    res.render('place/edit', { data })
};
exports.editPost = async (req, res, next) => {
    const id = req.params['id'];
    await place.update(id,req.body);
    res.redirect('../edit_list');
};


exports.delete_list = async (req, res, next) => {
    const data = await place.list();
    res.render('place/delete_list', { data })
};
exports.delete = async (req, res, next) => {
    const id = req.params['id'];
    const data = await place.delete(id);
    res.redirect('./')
};