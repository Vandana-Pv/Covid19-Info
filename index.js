const express = require("express");
const bodyParser = require("body-parser");

// Use express
const app = express();

// Requiring all the routes
const countries = require('./routes/countries');

// Setting View Engine as EJS
app.set("view engine", "ejs");

// Static folder
app.use(express.static('./views/assets'));

//Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Defining Routes
app.use('/countries',countries);    

//Starting server
app.listen(process.env.PORT || 3000, function () {
    console.log("Express app started on port 3000");
});