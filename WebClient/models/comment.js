const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');
const COMMENTS = 'comments';

module.exports.list = async (idDiaDanh) => {
    return await dbs.production.collection(COMMENTS).find({idDiaDanh,pheDuyet:1}).toArray();
};