const sqlite = require("better-sqlite3");
const path = require("path");
const db = new sqlite(path.resolve("db/phrases.sqlite"), { fileMustExist: true });

function query(sql, params) {
    return db.prepare(sql).all(params);
}

module.exports = {
    query,
};
