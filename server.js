// Setup empty JS object to act as endpoint for all routes
projectData = {temperature: "" , date: "" , userResponse: ""};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;
const server = app.listen(port, ()=> {console.log(`Running on localhost: ${port}`)});

//a GET route that returns the projectData object
app.get("/weather", function (req, res) {
    res.send(projectData);
});

//a POST route that returns the projectData object
app.post("/weather", function(req, res) {
    projectData=req.body;
    console.log(req.body);
    res.send({status: true});
});