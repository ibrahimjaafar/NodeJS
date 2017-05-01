
var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/about', function(req, res){
    res.render('about');
});

app.get('/laptop', function(req, res){
    res.render('laptop');
});

app.listen(8080);