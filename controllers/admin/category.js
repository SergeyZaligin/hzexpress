const Category = require('../../models/admin/category');

exports.all = function (req, res) {
    Category.all(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.render('admin/create', { title: 'Category', categories: docs });
    });
};

exports.findById = function (req, res) {
    Category.findById(req.params.id, function (err, doc) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    });
};

exports.create = function (req, res) {

    var category = {
        title: req.body.title,
        description: req.body.description,
        keywords: req.body.keywords,
        preview: req.body.preview,
        content: req.body.content,
        category: req.body.category,
        comments: [
            {name: null, content: null}
        ],
        visible: req.body.visible
    };

    Category.create(category, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(category);
    });
};

exports.update = function (req, res) {
    Category.update(req.params.id, {
        name: req.body.name
    }, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
};

exports.delete = function (req, res) {
    Category.delete(req.params.id, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
};