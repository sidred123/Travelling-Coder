var mongo = require('mongodb');

var db = new mongo.Db('travelling_coder', new mongo.Server('localhost', 27017, {}, {}));
db.open(function () {
    console.log("mongo db is now open.");
});

exports.db = db;