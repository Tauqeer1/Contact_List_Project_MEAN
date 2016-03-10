/**
 * Created by Tauqeer Ahmed on 2/19/2016.
 */

var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

//Custom module
var configDB = require('./config/database.js');

var app = express();

mongoose.connect(configDB.url);

var publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
app.use(bodyParser.json());

require('./routes.js')(app);

app.listen(port, function () {
    console.log("Server running on port 3000");
});


