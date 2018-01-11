const db = require('../db');
var ObjectID = require('mongodb').ObjectID;

exports.all = function (cb) {
    db.get().collection('article').find().toArray(function (err, docs) {
        cb(err, docs);
    });
};

exports.findById = function (id, cb) {
    db.get().collection('article').findOne({
        _id: ObjectID(id)
    }, function (err, doc) {
        cb(err, doc);
    });
};

exports.create = function (article, cb) {
    db.get().collection('article').insert(article, function (err, result) {
        cb(err, result);
    })
};

exports.update = function (id, newData, cb) {
    db.get().collection('article').updateOne({
        _id: ObjectID(id)
    }, {
        $set: newData
    }, {
        upsert: false
    }, function (err, result) {
        cb(err, result);
    });
};

exports.delete = function (id, cb) {
    db.get().collection('article').deleteOne({
        _id: ObjectID(id)
    }, function (err, result) {
        cb(err, result);
    })
};