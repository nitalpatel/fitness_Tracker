var express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan")

// This sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;


// Requiring our models for syncing
var db = require("./models");

// Here we are enabling  the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

// Below includes Static directory
app.use(express.static("public"));

// Here we are setting up the connection

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/WorkoutTracker',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Here are our routes

require("./routes/apiRoute.js")(app);
require("./routes/htmlRoute.js")(app);

//initiating  our Express app

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});