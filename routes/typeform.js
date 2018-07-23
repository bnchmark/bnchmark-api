const express = require('express');
const router = express.Router();

const InsightModule = require('../lib/insights');


/* GET home page. */
router.post('/', function (req, res, next) {
    InsightModule.saveTypeform(req.body, (err, data) => {

        if (err) {
            return next(err);
        }

        res.jsonp({
            "success": true
        });
    });
});

module.exports = router;
