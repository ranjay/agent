var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var task_controller = require('../controllers/task');


// a simple test url to check that all of our files are communicating correctly.
router.get('/agents', task_controller.agents);


router.post('/create', task_controller.task_create);

router.get('/:id', task_controller.task_details);

router.put('/:id/update', task_controller.task_update);

router.delete('/:id/delete', task_controller.task_delete);


module.exports = router;
