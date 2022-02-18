const express = require("express");
const cors = require("cors");
const path = require('path');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;
app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(path.resolve("src/index.html"));
});

app.listen(port, () => {
    console.log(
        `Example app listening at http://${process.env.HOST}:${process.env.PORT}`
    );
});

module.exports = app;
