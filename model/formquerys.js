const { ObjectId } = require("mongodb");

const getDb = require("../utils/databse").getDb;


class DataFrom {

    addform(title, fdis, questions) {

        let db = getDb();

        let data = db.collection("createdform").insertOne({ title: title, fdis: fdis, questions: questions }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data;
    }

    getform(id) {

        let db = getDb(id)

        let fid = new ObjectId(id)

        let data = db.collection("createdform").findOne({ _id: fid }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data
    }

    allform() {

        let db = getDb()

        let data = db.collection("createdform").find({}).toArray().then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data
    }
}

exports.DataFrom = DataFrom;