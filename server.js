// dependencies
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

// start express
var app = express();

// port
var appPORT = process.env.PORT || 3000;

// enabling express to serve static files 
app.use(express.static('public'));

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// requiring the files with routing information.
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

// Starts our server.
app.listen(appPORT, function() {
    console.log("Listening on port: " + appPORT);
});