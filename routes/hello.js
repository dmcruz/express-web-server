var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var greeting = 'greeting' in req.query ?
    req.query.greeting : 'HELLO';

  res.render('hello', { greeting: greeting });
});

module.exports = router;
