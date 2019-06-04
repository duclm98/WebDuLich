const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');

module.exports.listBeReview = async () => {
    return await dbs.production.collection('comments').find({pheDuyet:1})
      .toArray();
};

module.exports.listBeingReview = async () => {
    return await dbs.production.collection('comments').find({pheDuyet:0})
      .toArray();
};

module.exports.update = async (id) => {
    return await dbs.production.collection('comments').updateOne({ _id: ObjectId(id)},{$set: {pheDuyet:1}});
};

module.exports.delete = async (id) => {
    return await dbs.production.collection('comments').deleteOne({ _id: ObjectId(id)});
};