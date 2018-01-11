const Main = require('../models/main');
//var mailer = require('express-mailer');
exports.articlePreview = function (req, res) {
    if(req.query.page == ''){
        req.query.page = 1;
    }
    Main.articlePreview(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }

        req.session.message = 'Session is Work!!!';

        var mess = req.session.message;
        // res.mailer.send('email', {
        //     to: 'cplusplusjs@gmail.com',
        //     subject: 'Test Email',
        //     otherProperty: 'Other Property'
        //   }, function (err, message) {
        //     if (err) {
        //       // handle error 
        //       console.log(err);
        //       res.send('There was an error rendering the email');
        //       return;
        //     }
        //     res.header('Content-Type', 'text/plain');
        //     res.send(message);
        //   });
          
          Main.articleCount(function (err, doc) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            console.log(doc);
            res.render('index', { title: mess, articlesPreview: docs,  PagesCount: Math.ceil(doc / 2), MaxCount: doc });
        });
        
        
    }, req.query.page);
};

exports.articleCount = function (req, res) {
    
    Main.articleCount(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        console.log(docs);
        res.render('index', { articlesCount: docs });
    });
};