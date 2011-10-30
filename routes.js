var controllers = require('./controllers/controllers').controllers;

var _default = function (path) {
    console.log("request for path: " + path);
};

var _index = function (request, response) {
   controllers.index.run(request, response);
};

var routes = {
    "/": _index,
	"/b": _default
};

exports.routes = routes;