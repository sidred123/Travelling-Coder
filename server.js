var http = require('http');
var _ = require('underscore')._;
var express = require('express');

var routes = require('./routes').routes;
console.log(routes);


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

_.each(_.keys(routes), function (route) {
	server.get(route, routes[route]);
});

server.listen(12371);
