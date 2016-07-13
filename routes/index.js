var express = require('express');
var router = express.Router();
var connection = require('../db');


/* GET home page. */
router.get('/', function(req, res, next) {
    var type = 0;
    if (req.session.login)
      type = 1;
    console.log(type);
    res.render('index', {title : 'Matcha', users : type});
    console.log(req.session);

});

router.get('/login', function(req, res, next) {
    res.render('index', {title : 'Matcha'});
});

router.get('/lol', function(req, res, next) {
    res.render('users', {title : 'coucou'});
});


module.exports = router;
