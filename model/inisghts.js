const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const InsightSchema = Schema({
    "user": Schema.Types.ObjectId,
    "form_id": String,
    "submitted_at": Date,
    "definition": {
        "id": String,
        "title": String,
        "fields": [Schema.Types.Array]
    },
    "answers": [Schema.Types.Mixed]
}, {
    timestamps: true

});

module.exports = mongoose.model('Insight', InsightSchema);
