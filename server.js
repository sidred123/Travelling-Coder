var _ = require('underscore')._;
var routes = require('./routes').routes;
console.log(routes);
var express = require('express');
var server = express.createServer();

_.each(_.keys(routes), function (route) {
	server.get(route, routes[route]);
});

server.use(express.staticProvider(__dirname + '/public'));

server.listen(12371);