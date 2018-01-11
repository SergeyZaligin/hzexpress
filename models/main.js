const db = require('../db');
var ObjectID = require('mongodb').ObjectID;

// exports.articlePreview = function (cb, page) {
//     db.get().collection('article').find({visible: "on"}).sort({time: -1}).skip((page-1)*2).limit(2).toArray(function (err, docs) {
//         cb(err, docs);
//     });
// };
// 
//db.users.find().skip(pagesize*(n-1)).limit(pagesize)

exports.articlePreview = function (cb, page) {
    db.get().collection('article').find({visible: "on"}).sort({time: -1}).skip(2 * (page-1)).limit(2).toArray(function (err, docs) {
        cb(err, docs);
    });
};

exports.articleCount = function (cb) {
    db.get().collection('article').find({visible: "on"}).count(function (err, doc) {
        cb(err, doc);
    });
};