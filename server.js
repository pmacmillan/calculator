
var http = require('http')
  , express = require('express')
  , expressLess = require('express-less')
  , app = express()
  , server = http.createServer(app);


app.locals.pretty = true;

app.use('/js', express.static(__dirname + '/js'));
app.use('/css', expressLess(__dirname + '/less'));
app.get('/', function (req, res) { res.render('index.jade'); });

app.get('/templates/calculator.html', function (req, res) {
  res.render('calculator.jade');
});

server.listen(9001);

