const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');
const PLACES = 'places';
const rand = Math.random()

const detail = async (id) => {
    const results = await dbs.production.collection(PLACES).find({_id: ObjectId(id)})
      .toArray();
    return results[0];
  };
exports.detail = detail;

module.exports.list = async () => {
    return await dbs.production.collection(PLACES).find().toArray();
};