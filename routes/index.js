var express = require('express');
var router = express.Router();
var connection = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {title : 'Matcha'});
});

router.get('/login', function(req, res, next) {
    res.render('index', {title : 'Matcha'});
});

router.get('/lol', function(req, res, next) {
    res.render('users', {title : 'coucou'});
});


module.exports = router;
