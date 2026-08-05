
const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {

    MongoClient.connect("mongodb+srv://anantaladane42_db_user:JoPb7WXGQc1JfLof@cluster1.oqt7375.mongodb.net/?appName=Cluster1").then((success) => {
        console.log(success)
        _db = success.db("developer");
        console.log("database connect successfully...!")
    }).catch((error) => {
        console.log(error)

    })

    callback();
}


const getDb = () => {

    if (_db) {
        return _db;

    } else {
        console.log("No database found")
    }
}


exports.mongoConnect = mongoConnect;

exports.getDb = getDb;