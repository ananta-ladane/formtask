
const express = require("express");
const app = express();
const mongoconnect = require("./utils/databse").mongoConnect;
const router = require("./router/router");
const cors = require("cors");


app.use(cors())

app.use(express.json())


app.use(express.urlencoded({ extended: true }));

app.use(router);

mongoconnect(() => {
    app.listen(5000);
})
