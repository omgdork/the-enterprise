var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var db = mongoose.connect('mongodb://localhost/enterpriseAPI');
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (request, response) {
  response.send('Welcome to the Enterprise API!');
});

var candidateRouter = require('./routes/candidateRoutes')();
app.use('/api/candidates', candidateRouter);

app.listen(port, function () {
  console.log('Running on port: ' + port);
});