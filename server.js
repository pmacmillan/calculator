
var http = require('http')
  , express = require('express')
  , expressLess = require('express-less')
  , app = express()
  , server = http.createServer(app);


app.use('/css', expressLess(__dirname + '/less'));
app.get('/', function (req, res) {
  res.render('calculator.jade');
});

server.listen(9001);

