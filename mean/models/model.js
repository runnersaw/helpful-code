var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: String
});

// expose the model for users
module.exports = {
    Schema: schema,
    Model: mongoose.model('Model', schema)
};
