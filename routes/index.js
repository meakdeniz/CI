var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.json({name: 'memin', surname: 'akdeniz',age:27});
});

module.exports = router;