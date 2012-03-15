var http = require('http');
var _ = require('underscore')._;
var express = require('express');

var routes = require('./routes').routes;

var db = require('./db').db;

var server = express.createServer();

server.set('views', __dirname + '/views');
server.set('view engine', 'jade');
server.set('view options', {layout: false});

server.use(express.static(__dirname + '/public'));

/* https://github.com/visionmedia/express/issues/622 */
// server.register('.haml', require('jade'));


server.configure(function () {
    server.use('views', __dirname + '/views');
});

_.each(routes, function (route) {
    if (route.isGet) { 
        server.get(route.url, route.handler);
    } else {
        server.post(route.url, route.handler);
    }
});
var port = process.env.PORT;
server.listen(port);
