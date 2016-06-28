var express = require('express');
var router = express.Router();
var connection = require('../db');

router.get('/', function(req, res) {
    res.render('suscribe', {title : 'Sign Up !' });
});

router.post('/add', function(req, res) {
  var login = req.body.user,
      pass1 = req.body.pass,
      pass2 = req.body.pass2,
      prenom = req.body.prenom,
      nom = req.body.nom,
      mail = req.body.mail;
  var crypto = require('crypto');
  var query = 'SELECT * FROM users WHERE login = ?';
  var result = connection.query(query, login, function(err, rows) {
    if (rows[0])
      res.render('suscribe', {error: 'login already exist'});
  });
  if (pass1 === pass2) {
    var password = crypto.createHash('md5').update(pass1).digest('hex');
  }
  var insertion = {
    login: login,
    pass: password,
    mail: mail,
    prenom: prenom,
    nom: nom
    };
  var query = "INSERT INTO users SET ?";
  var p = connection.query(query, insertion, function(err, result) {
    if (!err) {
      res.render('index', {success: 'Vous pouvez vous connecter !'});
    }
    else {
      res.render('suscribe', {error: 'Il y a une erreur dans le formulaire'});
    }
  });
});

module.exports = router;
