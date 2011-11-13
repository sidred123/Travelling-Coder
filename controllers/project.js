var db = require('./../db').db;

var save = function (request, response) {
    // This is where the project description will be saved.
    var projectText = '';
    request.on('data', function (data) {
        projectText += data;
    });
    request.on('end', function () {
        db.collection('projects', function (err, collection) {
            console.log("fetched projects collection.");
            var project = {
                'text' : projectText
            };
            collection.insert(project, function () {
                console.log("project successfully inserted.");
            });
        });
    });
};

exports.save = save;

