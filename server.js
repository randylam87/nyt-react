// Server Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

// Create New Express App
const app = express();

// Sets PORT as variable to be used deployed or locally
const PORT = process.env.PORT || 8080;

// Run Morgan for Logging
app.use(logger("dev"));

// Run Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve Static Files
app.use(express.static("public"));

// Connects to Mongo server
mongoose.connect('mongodb://heroku_73bngsrf:nk4vg13dr21d9ivnj5ha6v2pe8@ds157740.mlab.com:57740/heroku_73bngsrf', { useMongoClient: true });

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('Mongoose Error: ', err);
});

db.once('open', () => {
  console.log('Mongoose connection successful!');
});

// Routes
require('./routes/api-routes.js')(app);

// Server Listener
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});