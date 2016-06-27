var express = require('express');
var router = express.Router();
var connection = require('../db');

/* GET users listing. */

router.get('/', function(req, res, next) {
    var log = req.user;
    var query = 'SELECT * FROM users';
    connection.query(query, function(err, rows){
      res.render('users', {type : 1, users : rows});
});

});

router.get('/suscribe', function(req, res) {
    res.render('suscribe', {title : 'Sign Up !' });
});

router.post('/suscribe/add', function(req, res) {
  console.log(req);
});

router.get('/:login', function(req, res) {
    var user = req.params.login;
    res.render('users', {title : user});
});

module.exports = router;
