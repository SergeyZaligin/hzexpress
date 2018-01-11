var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/admin/*', function (req, res, next) {

    req.session.admin = true;
    var admin = req.session.admin;
    console.log(admin);
    if (!admin) {
        res.redirect('/')
    } else {
        next();
    }

});

router.get('/admin/controll', function (req, res) {
    res.render('admin/controll',{title: "Admin panel"});
});

module.exports = router;