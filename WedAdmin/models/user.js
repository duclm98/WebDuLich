const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');

module.exports.list = async () => {
    return await dbs.production.collection('users').find()
      .toArray();
};

module.exports.delete = async (id) => {
    return await dbs.production.collection('users').deleteOne({ _id: ObjectId(id)});
};