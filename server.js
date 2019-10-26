var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')

var task = require('./routes/task'); // Imports routes for the tasks
var app = express();
//heroku config:set MONGODB_URI="mongodb+srv://agent:agent123@agent-lf1bv.mongodb.net/test?retryWrites=true&w=majority";

// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://localhost:27017/agent';
//var dev_db_url = "mongodb+srv://agent:agent123@agent-lf1bv.mongodb.net/test?retryWrites=true&w=majority";
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use('/', task);


var port = 8080;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

module.exports = app;
