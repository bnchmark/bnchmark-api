const express = require('express');
const router = express.Router();

// const InsightModule = require('../lib/insights');


const data = {
    "event_id": "01CJK0N4V5FQ6904MYGP00E0S3",
    "event_type": "form_response",
    "form_response": {
        "form_id": "zAMHIr",
        "token": "dde1e0e0746fd2ad407df33236fefc62",
        "landed_at": "2018-07-17T02:20:45Z",
        "submitted_at": "2018-07-17T02:21:08Z",
        "definition": {
            "id": "zAMHIr",
            "title": "Accounting",
            "fields": [
                {
                    "id": "70642667",
                    "title": "Who is your main Accounting Firm?",
                    "type": "short_text",
                    "ref": "2f5bb6ee37db1e7c",
                    "properties": {}
                },
                {
                    "id": "FAwVFDyhZbg5",
                    "title": "What services do they provide you with?",
                    "type": "multiple_choice",
                    "allow_multiple_selections": true,
                    "allow_other_choice": true,
                    "ref": "cbe3cd7dcd6514e6",
                    "properties": {},
                    "choices": [{"id": "qhkOXl2PgU9F", "label": "Assurance"}, {
                        "id": "nPCK0RijDqSW",
                        "label": "Tax"
                    }, {"id": "88194858", "label": "US Tax"}, {
                        "id": "ZY9IQ4plZfsv",
                        "label": "SR&ED"
                    }, {"id": "qmlLAkS4WEmj", "label": "Transfer Pricing"}]
                }, {
                    "id": "yGCPZ1Oanm0l",
                    "title": "Who is the main Partner at the firm?",
                    "type": "short_text",
                    "ref": "5d37ad4beebbf6a8",
                    "properties": {}
                }, {
                    "id": "ODvNtdoA2yYN",
                    "title": "Do you work with any other firms?",
                    "type": "yes_no",
                    "ref": "a601dd3181e5cc24",
                    "properties": {}
                }, {
                    "id": "70642728",
                    "title": "What is the name of another Accounting Firm you work with?",
                    "type": "short_text",
                    "ref": "5446bc22fb236d63",
                    "properties": {}
                }, {
                    "id": "70642756",
                    "title": "What services do they provide you with?",
                    "type": "multiple_choice",
                    "allow_multiple_selections": true,
                    "ref": "9931d7cd2144dd3a",
                    "properties": {},
                    "choices": [{"id": "88194752", "label": "Assurance"}, {
                        "id": "88194753",
                        "label": "Tax"
                    }, {"id": "88194754", "label": "SR&ED"}, {
                        "id": "88194755",
                        "label": "Transfer Pricing"
                    }, {"id": "88194756", "label": "Other"}]
                }, {
                    "id": "70642776",
                    "title": "Who is the main Partner you consult with?",
                    "type": "short_text",
                    "ref": "dd4fe43c4512359c",
                    "properties": {}
                }, {
                    "id": "70709926",
                    "title": "Do you perform any Fx Hedging Strategies?",
                    "type": "yes_no",
                    "ref": "a293e2c4e892a5fc",
                    "properties": {}
                }, {
                    "id": "70710005",
                    "title": "Do you have a formal Transfer Pricing Strategy?",
                    "type": "yes_no",
                    "ref": "f9e1e47c6a3ac055",
                    "properties": {}
                }]
        },
        "answers": [
            {
                "type": "text",
                "text": "asda",
                "field": {"id": "70642667", "type": "short_text"}
            },
            {
                "type": "choices",
                "choices": {"labels": ["Assurance", "Transfer Pricing"]},
                "field": {"id": "FAwVFDyhZbg5", "type": "multiple_choice"}
            },
            {
                "type": "text",
                "text": "asdsad",
                "field": {"id": "yGCPZ1Oanm0l", "type": "short_text"}
            },
            {
                "type": "boolean", "boolean": true,
                "field": {"id": "ODvNtdoA2yYN", "type": "yes_no"}
            },
            {
                "type": "text",
                "text": "asdads",
                "field": {"id": "70642728", "type": "short_text"}
            },
            {
                "type": "choices",
                "choices": {"labels": ["Transfer Pricing", "Other"]},
                "field": {"id": "70642756", "type": "multiple_choice"}
            },
            {
                "type": "text", "text": "sadad", "field": {"id": "70642776", "type": "short_text"}
            },
            {
                "type": "boolean",
                "boolean": false,
                "field": {"id": "70709926", "type": "yes_no"}
            },
            {
                "type": "boolean",
                "boolean": true, "field": {"id": "70710005", "type": "yes_no"}
            }
        ]
    }
};
//
// InsightModule.saveTypeform(data, function (err, data) {
//     console.log(err)
//     console.log(data)
// })


/* GET home page. */
router.get('/', function (req, res, next) {
    res.jsonp({
        message: "hello"
    })''
    // InsightModule.saveTypeform(req.body, (err, data) => {
    //
    //     if (err) {
    //         return next(err);
    //     }
    //
    //     res.jsonp({
    //         "success": true
    //     });
    // });
});

module.exports = router;
