const db = require("./db");

function searchAll() {
    const data = db.query(`SELECT * FROM phrases`, []);
    return { data };
}

function search(id) {
    const data = db.query(`SELECT * FROM phrases WHERE id=?`, [id]);
    return { data };
}

function random(id) {
    const rnd = Math.floor(Math.random() * (30 - 1 + 1) + 1);
    const data = db.query(`SELECT * FROM phrases WHERE id=?`, [rnd]);
    return { data };
}

module.exports = {
    searchAll,
    search,
    random,
};
