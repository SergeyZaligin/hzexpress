const Article = require('../../models/admin/article');
const Category = require('../../models/admin/category');

exports.all = function (req, res) {
    Article.all(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.render('index', { title: 'Article', articles: docs });
    });
};

exports.findById = function (req, res) {
    Article.findById(req.params.id, function (err, doc) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    });
};

exports.create = function (req, res) {

    var article = {
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

    Article.create(article, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.redirect('/admin/create');
    });
};

exports.update = function (req, res) {
    Article.update(req.params.id, {
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
    Article.delete(req.params.id, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
};