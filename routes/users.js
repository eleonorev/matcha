var express = require('express');
var router = express.Router();
var connection = require('../db');
var app = express();

router.post('/', function(req, res, next) {
    var login = req.body.user;
    var password = req.body.pass;
    var crypto = require('crypto');

    if (login && password) {
      var query = 'SELECT * FROM users WHERE login = ?';
      var result = connection.query(query, login, function(err, rows) {
        if (!rows[0])
          res.render('index', {error: 'user not found'});
        else {
          var pass = crypto.createHash('md5').update(password).digest('hex');
          if (pass === rows[0].pass) {
            res.render('users', {users : rows[0].login});
            req.session.login = rows[0].login;
            console.log(req.session);
          }
          res.render('index', {error: 'wrong password'});
        }
    });
  }
  else
    res.render('index', {users: 'user not found'});
});




router.get('/:login', function(req, res) {
    res.render('users', {title : user});
});

module.exports = router;
