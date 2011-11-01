var http = require('http');
var _ = require('underscore')._;
var express = require('express');

var routes = require('./routes').routes;
console.log(routes);

var server = express.createServer();

_.each(_.keys(routes), function (route) {
	server.get(route, routes[route]);
});

server.listen(12371);