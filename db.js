var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3307',
  user     : 'root',
  password : 'root',
  database : 'matcha'
});
connection.connect(function(err) {
    if (err) {
    console.error('error connecting: ' + err.stack);
    return;
}});

module.exports = connection;
