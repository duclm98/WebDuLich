const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');

const detail = async (id) => {
  const results = await dbs.production.collection('places').find({_id: ObjectId(id)})
    .toArray();
  return results[0];
};

module.exports.list = async () => {
  return await dbs.production.collection('places').find()
    .toArray();
};

module.exports.add = async (place) => {
    return await dbs.production.collection('places').insertOne(place);
};

module.exports.update = async (id,product) => {
    return await dbs.production.collection('places').updateOne({ _id: ObjectId(id)},{$set: product});
};

module.exports.delete = async (id) => {
    return await dbs.production.collection('places').deleteOne({ _id: ObjectId(id)});
  };

exports.detail = detail;