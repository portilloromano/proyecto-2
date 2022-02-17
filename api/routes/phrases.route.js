const express = require("express");
const router = express.Router();
const phrases = require("../services/phrases.service");

router.get("/phrases", function (req, res, next) {
    try {
        res.json(phrases.searchAll());
    } catch (err) {
        console.error(`Error while getting phrases `, err.message);
        next(err);
    }
});

router.get("/phrases/:id", function (req, res, next) {
    try {
        res.json(phrases.search(req.params.id));
    } catch (err) {
        console.error(
            `Error while getting phrases by id ${req.params.id}`,
            err.message
        );
        next(err);
    }
});

router.get("/random", function (req, res, next) {
    try {
        res.json(phrases.random());
    } catch (err) {
        console.error(`Error while getting random phrase`, err.message);
        next(err);
    }
});

module.exports = router;
