var mongo = require('mongodb');

var db = new mongo.Db('heroku_app3292394', new mongo.Server('ds031587.mongolab.com', 31587, {}, {}));
db.open(function (err) {
    if (err !== null) {
        console.log("Error while opening connection to db: " + err);
        return;
    }
    db.authenticate("temp", "pwd123", function (err) {
        if (err !== null) {
            console.log("Error while authenticating: " + err);
        }
    });
    console.log("mongo db is now open.");
});

exports.db = db;
