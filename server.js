var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var db = require('./db');
var path = require('path');
var favicon = require('serve-favicon');
var app = express();
var session = require('express-session')
var MongoStore = require('connect-mongo')(session);

var multer = require('multer')
var upload = multer({
  dest: './public/images'
})

var mailer = require('express-mailer');

mailer.extend(app, {
  from: 'cplusplusjs@gmail.com',
  host: 'smtp.gmail.com', // hostname 
  secureConnection: true, // use SSL 
  port: 465, // port for secure SMTP 
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts 
  auth: {
    user: 'cplusplusjs@gmail.com',
    pass: '132457132456tru359t'
  }
});

app.use(session({
  secret: 'i need more beers',
  resave: false,
  saveUninitialized: false,
  // Место хранения можно выбрать из множества вариантов, это и БД и файлы и Memcached.
  store: new MongoStore({
    url: 'mongodb://localhost:27017/blog',
  })
}));

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



var index = require('./routes/index');
var article = require('./routes/article');
var uploads = require('./routes/upload');
var admin = require('./routes/admin/controll');
var adminCreate = require('./routes/admin/create');

app.use(index);
app.use(article);
app.use(uploads);
app.use(admin);
app.use(adminCreate);


// пользовательская страница 404
app.use(function (req, res) {
  res.type('text/plain');
  res.status(404);
  res.send('404 — Не найдено');
});

// пользовательская страница 500
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 — Ошибка сервера');
});



db.connect('mongodb://localhost:27017', function (err) {
  if (err) {
    return console.log(err);
  }
  app.listen(app.get('port'), function () {
    console.log('Express запущен в режиме ' + app.get('env') + ' на http://localhost:' +
      app.get('port') + ' нажмите Ctrl+C для завершения.');
  });
})