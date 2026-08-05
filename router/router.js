const express = require("express");
const { insertformdata, getuserform, datallgetform } = require("../controller/formquestion");
const { adduserdata, usershowre } = require("../controller/userformdata");
const router = express.Router();




// user data url end postins

router.get("/showuserr/:id", usershowre)

router.post("/addrespon", adduserdata)


// form userl end points
router.get("/getallform", datallgetform)

router.get("/userform/:id", getuserform)
router.post("/adddata", insertformdata);




module.exports = router;