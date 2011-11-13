var db = require('./../db').db;

var run = function (request, response) {
    var searchText = request.query;
    console.log("search text: " + searchText);
    db.collection('projects', function (err, collection) { 
        collection.find({text:new RegExp(searchText, 'g')}, function (err, cursor) {
            cursor.each(function (err, result) {
                console.log("result");
                console.log(result);
            });
        });
    });
    //response.render('results');
};

exports.run = run;
