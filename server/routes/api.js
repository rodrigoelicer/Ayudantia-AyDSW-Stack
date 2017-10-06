const express = require('express');
const router = express.Router();
var app = express();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234'
});

connection.connect(function() {
	console.log("Database connected");
});

router.get('/', (req, res) => {
	var Query = "SELECT * from test.usuarios";
  	connection.query(Query, function(err, rows){
    if(err){
      res.status(400).send("Error");
    }
    else{
      return res.send(rows);
    }
  	});
});

module.exports = router;
