var Agent = require('../models/agent');

exports.list = function (req, res) {
  Agent.find({}, function(err, agents) {
    console.log(agents)
         res.send(agents);
      });
};

exports.create = function (req, res, next) {
    var agent = new Agent(
        {
            name: req.body.name,
            skill: req.body.skill,
            priority: req.body.priority
        }
    );
    console.log(req.body)

    agent.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Agent Created successfully')
    })
};

exports.details =  function (req, res,next) {
    Agent.findById(req.params.id, function (err, Agent) {
        if (err) return next(err);
        res.send(agent);
    })
};

exports.update = function (req, res) {
    Agent.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, Agent) {
        if (err) return next(err);
        res.send('Agent udpated.');
    });
};

exports.delete = function (req, res,next) {
    Agent.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
