
const Userdata = require("../model/userformquerys").Userdata


exports.adduserdata = (req, res) => {

    let id = req.body.id;

    let answers = req.body.answers;

    let data = new Userdata();

    let result = data.insertformdata(id, answers)

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })
}


exports.usershowre = (req, res) => {

    let id = req.params.id;
    console.log(id)

    let data = new Userdata();

    let result = data.rgetuser(id)

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })
}


