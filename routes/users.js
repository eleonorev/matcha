var express = require('express');
var router = express.Router();
var connection = require('../db');


router.post('/', function(req, res, next) {
  var login = req.body.user;
  var password = req.body.pass;
  var crypto = require('crypto');

  if (login && password) {
    var query = 'SELECT * FROM users WHERE login = ?';
    connection.query(query, login, function(err, rows) {
      if (!rows[0]) {
        res.render('index', {error: 'user not found'});
        res.end()
        return ;
      } else {
        var sess = req.session;
        var pass = crypto.createHash('md5').update(password).digest('hex');
        if (pass === rows[0].pass) {
          sess.login = rows[0].login;
          res.locals.login = sess.login
          res.render('users', sess);
          console.log(sess);
          res.end()
          return ;
        }
        res.render('index', sess);
        res.end()
        return ;
      }
    });
  } else {
    res.render('index', sess);
    res.end()
    return ;
  }
});



router.get('/:login', function(req, res) {
    res.render('users', req.session);
    res.end();
});

module.exports = router;
