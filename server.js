var http = require('http');
var _ = require('underscore')._;
var express = require('express');

var routes = require('./routes').routes;
console.log(routes);


var server = express.createServer();

server.set('views', __dirname + '/views');
console.log('view path = ' + server.set('views'));
server.set('view engine', 'haml');

server.configure(function () {
	server.use('views', __dirname + '/views');
});

_.each(_.keys(routes), function (route) {
	server.get(route, routes[route]);
});

server.listen(12371);