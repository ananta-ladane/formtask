

const getDb = require("../utils/databse").getDb;



class Userdata {

    insertformdata(id, answers) {

        let db = getDb()

        let data = db.collection("userformdata").insertOne({ fid: id, answers: answers }).then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)
            return error
        })

        return data;

    }

    rgetuser(id) {

        let db = getDb()

        let data = db.collection("userformdata").find({ fid: id }).toArray().then((success) => {
            console.log(success)
            return success
        }).catch((error) => {
            console.log(error)

            return error
        })

        return data
    }
}

exports.Userdata = Userdata;