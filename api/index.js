const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;
const phrasesRouter = require("./routes/phrases.route");

app.use("/", phrasesRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;