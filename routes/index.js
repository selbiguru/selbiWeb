var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET reset password page. */
router.get('/resetpassword/:anything', function(req, res, next) {
  res.render('forgotPassword', { title: 'Express' });
});

/* GET successful reset password page. */
router.get('/success/:anything', function(req, res, next) {
  res.render('passwordSuccess', { title: 'Express' });
});

module.exports = router;
