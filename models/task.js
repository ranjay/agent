var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name: {type: String, required: true, max: 100},
    skill: {type: String, required: true, max: 100},
    priority: {type: String, required: true, max: 100},
    status: {type: String, max: 100},
    agent: {type: String, max: 100}
});


// Export the model
module.exports = mongoose.model('Task', TaskSchema);
