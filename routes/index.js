var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'about' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'about' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'about' });
});

module.exports = router;
