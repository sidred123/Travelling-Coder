var controllers = require('./controllers/controllers').controllers;

var _search = function (request, response) {
    controllers.search.run(request, response);
};

var _project = function (request, response) {
    console.log("project needs to be saved");
    controllers.project.save(request, response);
};

var _index = function (request, response) {
    controllers.index.run(request, response);
};

var routes = [
   { url: "/", handler: _index, isGet: true },
   { url: "/project", handler: _project, isGet: false },
   { url: "/search", handler: _search, isGet: true }
];

exports.routes = routes;

