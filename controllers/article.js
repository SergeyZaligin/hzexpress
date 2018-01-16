const Article = require('../models/article');

exports.all = function (req, res) {
    Article.all(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.render('articles', { title: 'Article', articles: docs });
    });
};

exports.findById = function (req, res) {
    Article.findById(req.params.id, function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        //res.send(doc);
        console.log(req.params.id);
        res.render('articles', { article: docs });
    });
};

exports.create = function (req, res) {

    var article = {
        title: req.body.title,
        preview: req.body.preview,
        content: req.body.content,
        visible: req.body.visible,
        category: req.body.category,
        comments: [
            {name: null, content: null}
        ]
    };

    Article.create(article, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(article);
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