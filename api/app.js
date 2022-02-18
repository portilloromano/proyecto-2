const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;
const phrasesRouter = require("./routes/phrases.route");
app.use(cors());

app.use("/", phrasesRouter);

app.listen(port, () => {
    console.log(
        `Example app listening at http://${process.env.HOST}:${process.env.PORT}`
    );
});

module.exports = app;