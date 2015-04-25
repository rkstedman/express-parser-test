var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.html', { title: 'Express' });
});

router.post('/submit', function(req, res) {
  console.log('req', require('util').inspect(req.body,false,10,true));
  res.render('results', { status: req.statusCode, body: req.body });
});

module.exports = router;
