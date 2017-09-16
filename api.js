var express = require('express');
var _ = require('underscore');
var app = express();
app.use(express.static('public'));

var users = require('./users.json');
var prescriptions = require('./prescriptions.json');
var fills = require('./fills.json');

app.get('/', function (req, res) {
  res.sendFile('public/index.html');
});

app.get('/users/:id', function (req, res) {
  res.send(_.findWhere(users, { id: Number(req.params.id) }));
});

app.get('/users', function (req, res) {
  res.send(users);
});

app.get('/prescriptions/:id', function (req, res) {
  res.send(_.findWhere(prescriptions, { id: Number(req.params.id) }));
});

app.get('/prescriptions', function (req, res) {
  if (req.query.user_id) {
    res.send(_.where(prescriptions, { user_id: Number(req.query.user_id) }));
  } else {
    res.send(prescriptions);
  }
});

app.get('/fills/:id', function (req, res) {
  res.send(_.findWhere(fills, { id: Number(req.params.id) }));
});

app.get('/fills', function (req, res) {
  if (req.query.prescription_id) {
    res.send(_.where(fills, { prescription_id: req.query.prescription_id }));
  } else {
    res.send(fills);
  }
});

app.listen(8080, function () {
  console.log('App is listening on port 8080!');
});
