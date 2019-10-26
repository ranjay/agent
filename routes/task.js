var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var task_controller = require('../controllers/task');
var agent_controller = require('../controllers/agent');


// a simple test url to check that all of our files are communicating correctly.
router.get('/task/list', task_controller.list);
router.post('/task/create', task_controller.create);
router.put('/task:id/update', task_controller.update);

router.get('/agent/list', agent_controller.list);
router.post('/agent/create', agent_controller.create);


module.exports = router;
