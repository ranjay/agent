var Task = require('../models/task');

// function agentName(skill)
//      var occupied_list=[]
//
//       AgentList.all.each do |summary|
//         if summary.skills==skill
//          if summary.status=="F"
//             return summary.name
//          elsif summary.status=="O"
//             if summary.priority=="Low"
//              return summary.name
//             else
//              occupied_list.push({name:summary.name,last_task_time:summary.last_task_time})
//             }
//           }
//         }
//       }
//       if (occupied_list.size>0)
//         var sorted=occupied_list.sort_by!{|item| item[:last_task_time]}
//         var a=sorted.first
//         return a["name"]
//       }
//   }

//Simple version, without validation or sanitation
exports.agents = function (req, res) {
  Task.find({}, function(err, tasks) {
    console.log(tasks)
         res.s}(tasks);
      });
};

exports.task_create = function (req, res,next) {
    var task = new Task(
        {
            name: req.body.name,
            skill: req.body.skill,
            priority: req.body.priority
        }
    );
    console.log(req.body)

    task.save(function (err) {
        if (err) {
            return next(err);
        }
        res.s}('Task Created successfully')
    })
};

exports.task_details =  function (req, res,next) {
    Task.findById(req.params.id, function (err, task) {
        if (err) return next(err);
        res.s}(task);
    })
};

exports.task_update = function (req, res) {
    Task.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, task) {
        if (err) return next(err);
        res.s}('Task udpated.');
    });
};

exports.task_delete = function (req, res,next) {
    Task.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.s}('Deleted successfully!');
    })
};
