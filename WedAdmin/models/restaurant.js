const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');

const detail = async (id) => {
  const results = await dbs.production.collection('restaurants').find({_id: ObjectId(id)})
    .toArray();
  return results[0];
};

module.exports.list = async () => {
  return await dbs.production.collection('restaurants').find()
    .toArray();
};

module.exports.add = async (restaurant) => {
    return await dbs.production.collection('restaurants').insertOne(restaurant);
};

module.exports.update = async (id,restaurant) => {
    return await dbs.production.collection('restaurants').updateOne({ _id: ObjectId(id)},{$set: restaurant});
};

module.exports.delete = async (id) => {
    return await dbs.production.collection('restaurants').deleteOne({ _id: ObjectId(id)});
  };

exports.detail = detail;