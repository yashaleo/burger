var express = require('express');
var router = express.Router();
// var burger = require('../models/burger.js');

router.get('/', function(req, res) {
  res.render('index');
});

// router.get('/burgers', function(req, res) {
//   burger.all(function(data) {
//     console.log(data);

//     var hbsObject = { burgers: data };
//     res.render('index', hbsObject);
//   });
// });

// router.put('/burgers/update', function(req, res) {
//   burger.update(req.body.burger_id, condition, function(data) {
//     console.log(data);
//     res.redirect('/');
//   });
// });

// router.post('/burgers/create', function (req, res) {
//     console.log(req.body.burger_name, ": name of added burger")
//     burger.create('burger_name', req.body.burger_name, function () {
//         res.redirect('/burgers');
//     });
// });

module.exports = router;
