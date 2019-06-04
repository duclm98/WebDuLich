const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');

const detail = async (id) => {
  const results = await dbs.production.collection('hotels').find({_id: ObjectId(id)})
    .toArray();
  return results[0];
};

module.exports.list = async () => {
  return await dbs.production.collection('hotels').find()
    .toArray();
};

module.exports.listByIdPlace = async (id) => {
  return await dbs.production.collection('hotels').find({idDiaDanh:id})
    .toArray();
};

module.exports.add = async (hotel) => {
    return await dbs.production.collection('hotels').insertOne(hotel);
};

module.exports.update = async (id,hotel) => {
    return await dbs.production.collection('hotels').updateOne({ _id: ObjectId(id)},{$set: hotel});
};

module.exports.delete = async (id) => {
    return await dbs.production.collection('hotels').deleteOne({ _id: ObjectId(id)});
  };

exports.detail = detail;