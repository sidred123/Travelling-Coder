var mongo = require('mongodb');

var db = new mongo.Db('travelling_coder', new mongo.Server('ds031587.mongolab.com', 31587, {}, {}));
db.open(function (err) {
    if (err !== null) {
        console.log(err);
    }
    console.log("mongo db is now open.");
});

exports.db = db;
