const InsighttModel = require('../../model/inisghts');


module.exports = {
    saveTypeform(data, callback) {
        if (data && data.form_response) {
            const form = new InsighttModel(data.form_response);
            form.save()
        }
    }
};