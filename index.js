var express = require('express');
var app = express();
var http = require('http');
var path = require('path');

var temp = require('moduls/logistics/temp');
app.use(express.static(path.join(__dirname, 'public')));
app.use("/",temp)

http.createServer(app).listen(3000, function(){
    console.log('Express server listening on port ' + 3000);
});

