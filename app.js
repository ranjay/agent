// app.js

var express = require('express');
var bodyParser = require('body-parser');

var product = require('./routes/product'); // Imports routes for the products
var app = express();


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://agent:agent123@agent-lf1bv.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log(collection)
  // perform actions on the collection object
  client.close();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

var port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
