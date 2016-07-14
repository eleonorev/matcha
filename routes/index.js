var express = require('express');
var router = express.Router();
var connection = require('../db');


/* GET home page. */


router.get('/', function(req, res, next) {
    var sess = req.session;
    console.log(req.session);
    res.locals.login = req.session.login;
    if (res.locals.login) {
      res.render('users', sess);
      res.end()
      return;
    }
    res.render('index', sess);
    res.end()
    return;
});

router.get('/login', function(req, res, next) {
    res.render('index');
});

router.get('/lol', function(req, res, next) {
    res.render('users', {title : 'coucou'});
});

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  console.log(req.session);
  res.render('index');

});


module.exports = router;
