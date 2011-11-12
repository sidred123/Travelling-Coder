var controllers = require('./controllers/controllers').controllers;

var _project = function (path) {
    console.log("project needs to be saved");
};

var _index = function (request, response) {
   controllers.index.run(request, response);
};

var routes = [
   { url: "/", handler: _index, isGet: true },
   { url: "/project", handler: _project, isGet: false }
];

exports.routes = routes;

