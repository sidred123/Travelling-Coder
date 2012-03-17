var db = require('./../db').db;

var save = function (request, response) {
    // This is where the project description will be saved.
    var projectText = '';
    request.on('data', function (data) {
        projectText += data;
    });
    request.on('end', function () {
        projectText = projectText.replace('text=', '');
        projectText = projectText.replace(/\+/g, ' ');
        db.collection('projects', function (err, collection) {
            if (err !== null) {
                console.log("Error fetching projects: " + err);
                return;
            }
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

