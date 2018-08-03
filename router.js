const router = require('express').Router();

const _ = require('underscore');
const users = require('./users.json');
const prescriptions = require('./prescriptions.json');
const fills = require('./fills.json');

router.get('/', function (req, res) {
  // can't use this line anymore 
  //res.sendFile('public/index.html');
  // need to specify an absolute (instead of relative) 
  // path and/or set root in the config object for res.sendFile().
  // could use this with const path = require('path');
  // res.sendFile(path.join(__dirname, '.public/index.html');
  res.sendFile('index.html', { root: './public/' })

});

router.get('/users/:id', function (req, res) {
  res.send(_.findWhere(users, { id: Number(req.params.id) }));
});

router.get('/users', function (req, res) {
  res.send(users);
});

router.get('/prescriptions/:id', function (req, res) {
  res.send(_.findWhere(prescriptions, { id: Number(req.params.id) }));
});

router.get('/prescriptions', function (req, res) {
  if (req.query.user_id) {
    res.send(_.where(prescriptions, { user_id: Number(req.query.user_id) }));
  } else {
    res.send(prescriptions);
  }
});

router.get('/fills/:id', function (req, res) {
  res.send(_.findWhere(fills, { id: Number(req.params.id) }));
});

router.get('/fills', function (req, res) {
  if (req.query.prescription_id) {
    res.send(_.where(fills, { prescription_id: Number(req.query.prescription_id) }));
  } else {
    res.send(fills);
  }
});

module.exports = router;