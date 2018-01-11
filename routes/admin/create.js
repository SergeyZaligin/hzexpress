var express = require('express');
var router = express.Router();
var articleController = require('../../controllers/admin/article');
var categoryController = require('../../controllers/admin/category');

router.get('/admin/create',categoryController.all,function (req, res) {
    res.render('admin/create',{title: "Admin panel - Create"});
});
router.post('/admin/create', articleController.create);
module.exports = router;