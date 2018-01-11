var express = require('express');
var router = express.Router();
var multer  = require('multer');


router.get('/upload', function(req, res){
    res.render('upload', {title: 'Upload file'})
});
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload')
    },

    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
})
var upload = multer({ storage });
router.post('/upload', upload.single('my_file'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log(req.file);
    next();
});


   
  var upload = multer({ storage: storage })
module.exports = router;
