const express = require('express');
const router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    console.log(JSON.stringify(req.body))
    res.jsonp({
        test: 'test'
    })
});

module.exports = router;
