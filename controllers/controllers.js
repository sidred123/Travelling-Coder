var index = require('./index');
var project = require('./project');
var search = require('./search');

var controllers = {
    index : index,
    project : project,
    search : search
};

exports.controllers = controllers;
