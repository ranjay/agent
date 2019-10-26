let Agent = require("./models/agent");

Agent.remove({}, err => {
    
});

function save(name, skill, priority) {
    let agent = new Agent({
        name: name,
        skill: skill,
        priority: priority
    });
    agent.save(function(err) {
        if (err) {
            console.log(err);
        }
    });
}

save("Agent1", "skill1", "Low");
save("Agent2", "skill2", "Low");
save("Agent3", "skill3", "Low");