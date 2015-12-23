var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET reset password page. */
router.get('/resetpassword', function(req, res, next) {
  res.render('forgotPassword', { title: 'Express' });
});

module.exports = router;
