const DataFrom = require("../model/formquerys").DataFrom;

exports.insertformdata = (req, res) => {


    let title = req.body.title;
    let fdis = req.body.fdis;
    let questions = req.body.questions;
    console.log(questions);

    let data = new DataFrom();

    let result = data.addform(title, fdis, questions);

    result.then((success) => {
        console.log(success)
        res.json(success)

    }).catch((error) => {
        console.log(error)
    })

}

exports.getuserform = (req, res) => {

    let id = req.params.id;

    let data = new DataFrom();

    let result = data.getform(id);

    result.then((success) => {
        console.log(success)
        res.json(success)
        console.log("this is the success of json")
    }).catch((error) => {
        console.log(erro)
    })
}


exports.datallgetform = (req, res) => {

    let data = new DataFrom();

    let result = data.allform();

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })
}