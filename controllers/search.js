var _ = require('underscore')._;
var db = require('./../db').db;

var run = function (request, response) {
    var searchText = request.query;
    var results = [];
    db.collection('projects', function (err, collection) { 
        if (err !== null) {
            console.log("Error fetching projects: " + err);
            return;
        }
        collection.find({text:new RegExp(searchText, 'g')}, function (err, cursor) {
            if (err !== null) {
                console.log("Error finding project: " + err);
                return;
            }
            cursor.toArray(function (err, results) {
                if (err !== null) {
                    console.log("Error fetching projects: " + err);
                    return;
                }
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
