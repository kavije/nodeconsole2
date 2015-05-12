var http = require('http');
var express = require("express");
var app = express();

var Controller = require('./Controller');
Controller.init(app);

app.use(express.static(__dirname+'/public'));

app.get('/api/user', function(req, res) {

   // res.Set("Content-Type", "application/json");
    res.send("<html><body><h1> api user </h1> </body></html>");

});
app.set("view engine", "vash");
var port = process.env.port || 1337;
http.createServer(app).listen(port);