var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Selbi' });
});

/* GET reset password page. */
router.get('/resetpassword/:anything', function(req, res, next) {
  res.render('forgotPassword', { title: 'Selbi' });
});

/* GET successful reset password page. */
router.get('/success', function(req, res, next) {
  res.render('passwordSuccess', { title: 'Selbi' });
});

/* GET privacy policy page. */
router.get('/privacy', function(req, res, next) {
  res.render('privacyPolicy', { title: 'Privacy Policy' });
});

module.exports = router;
