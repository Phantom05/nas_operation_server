var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('template/index', { title: 'Operation Server' });
  res.render('index', { title: 'Operation Server' });
});


router.get('/contact', function(req, res, next) {
  // res.render('template/index', { title: 'Operation Server' });
  res.render('contact', { title: 'Operation Server' });
});


router.get('/contact', function(req, res, next) {
  // res.render('template/index', { title: 'Operation Server' });
  res.render('contact', { title: 'Operation Server' });
});

router.get('/signup', function(req, res, next) {
  // res.render('template/index', { title: 'Operation Server' });
  res.render('signup', { title: 'Operation Server' });
});

router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'Operation Server' });
});

router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'Operation Server' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Operation Server' });
});

module.exports = router;

