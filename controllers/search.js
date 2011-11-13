var _ = require('underscore')._;
var db = require('./../db').db;

var run = function (request, response) {
    var searchText = request.query;
    var results = [];
    db.collection('projects', function (err, collection) { 
        collection.find({text:new RegExp(searchText, 'g')}, function (err, cursor) {
            cursor.toArray(function (err, results) {
                results = _.reject(results, function (result) {
                    return result === null;
                });
                console.log("number of results: " + results.length);
                response.render('results', {results: results});
            });
        });
    });
};

exports.run = run;
