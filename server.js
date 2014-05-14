
var http = require('http')
  , express = require('express')
  , app = express()
  , server = http.createServer(app);


app.get('/', function (req, res) {
  res.render('calculator.jade');
});

server.listen(9001);

