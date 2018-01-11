var express = require('express');
var router = express.Router();
var articleController = require('../controllers/article');

/* Article page*/

router.get('/articles', articleController.all);

router.get('/articles/:id', articleController.findById);

router.post('/articles', articleController.create);

router.put('/articles/:id', articleController.update);

module.exports = router;