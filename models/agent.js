var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AgentSchema = new Schema({
    name: {type: String, required: true, max: 100},
    skill: {type: String, required: true, max: 100},
    priority: {type: String, required: true, max: 100},
    status: {type: String, default: "FREE" },
    last_task_time: { type: Date, default: Date.now }
});


// Export the model
module.exports = mongoose.model('Agent', AgentSchema);
