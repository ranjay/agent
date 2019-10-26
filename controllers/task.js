var Task = require('../models/task');
var Agent = require('../models/agent');

function getAgent(skill, cb) {
    let occupied_list = [];
    Agent.find({}, function(err, res) {
        let nomatch = true;
        for (var i in res) {
            var item = res[i];
            if (item.skill == skill) {
                nomatch = false;
                if (item.status == "FREE") {
                    cb(item.name);
                } else if (item.status == "Occupied") {
                    if (item.priority == "Low") {
                        cb(item.name);
                    } else {
                        cb("NF");
                    }
                }
            }
        }
        if (nomatch) {
            cb("NF");
        }

    });
}


//Simple version, without validation or sanitation
exports.list = function(req, res) {
    Task.find({}, function(err, tasks) {

        res.send(tasks);
    });
};

exports.create = function(req, res, next) {
    getAgent(req.body.skill, function(agent) {
        console.log(agent);
        if (agent == "NF") {
            res.send("Agent with this skill is not found")
        } else {
            let task = new Task({
                name: req.body.name,
                skill: req.body.skill,
                priority: req.body.priority,
                agent: agent
            });
            task.save(function(err) {
                if (err) {
                    return next(err);
                }
                Agent.findOneAndUpdate({ name: agent }, { $set: { status: "Occupied" } }, { new: true }, (err, doc) => {
                    if (err) {
                        console.log("Something wrong when updating data!");
                    }
                });

                res.send(task)
            })
        }
    });

};

exports.details = function(req, res, next) {
    Task.findById(req.params.id, function(err, task) {
        if (err) return next(err);
        res.send(task);
    })
};

exports.update = function(req, res) {
    Task.findByIdAndUpdate(req.params.id, { $set: { status: "Completed" }, function(err, task) {
        if (err) return next(err);
        res.send('Task udpated.');
    });
};

exports.delete = function(req, res, next) {
    Task.findByIdAndRemove(req.params.id, function(err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};