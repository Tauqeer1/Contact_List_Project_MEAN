/**
 * Created by Tauqeer Ahmed on 2/19/2016.
 */

var express = require('express');
var path = require('path');
var app = express();


var publicPath = path.resolve(__dirname , 'public');
app.use(express.static(publicPath));

app.listen(3000,function(){
    console.log("Server running on port 3000");
});


