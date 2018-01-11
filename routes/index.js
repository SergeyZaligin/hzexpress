var express = require('express');
var router = express.Router();
var mainController = require('../controllers/main');
console.log(mainController);
/* GET home page. */
router.get('/', mainController.articlePreview);

module.exports = router;