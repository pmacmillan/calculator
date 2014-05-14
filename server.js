
var http = require('http')
  , express = require('express')
  , expressLess = require('express-less')
  , app = express()
  , server = http.createServer(app);


app.use('/js', express.static(__dirname + '/js'));


app.use('/css', expressLess(__dirname + '/less'));
app.get('/', function (req, res) { res.render('calculator.jade'); });
app.get('/templates/calc.html', function (req, res) { res.render('calc.jade'); });

server.listen(9001);

