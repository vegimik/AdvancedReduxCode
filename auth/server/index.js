// Main starting point of the application
const express = require('express');
const app = express();
const http=require('http')
const bodyParser = require('body-parser');
const morgan  = require('morgan');
const mongoose = require('mongoose');
const router =require('./router');

// DB Setup
// Using `mongoose.connect`...
var promise = mongoose.connect('mongodb://localhost/myapp', {
  useMongoClient: true,
  /* other options */
});
// Or `createConnection`
var promise = mongoose.createConnection('mongodb://localhost/myapp', {
  useMongoClient: true,
  /* other options */
});
promise.then(function(db) {
  /* Use `db`, for instance `db.model()`
});
// Or, if you already have a connection
connection.openUri('mongodb://localhost/myapp', { /* options */ 
});

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app)


// Server Setup
const port = process.env.PORT || 3090;
const server=http.createServer(app)
server.listen(port)
console.log(`Server running on port ${port}`)