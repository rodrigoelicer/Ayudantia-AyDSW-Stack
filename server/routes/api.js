// Fuente: https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli

const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234'
});

connection.connect();

connection.query('SELECT * FROM test.usuarios', function(err, rows, fields) {
  if (err) throw err;
  console.log(rows);
});

connection.end();

module.exports = router;
