console.log("FILE STARTED");

const sqlite3 = require("sqlite3").verbose(); // import sqlite
const fs = require("fs");
const path = require("path");

const db = new sqlite3.Database(path.join(__dirname, "data", "app.db"), (err) => {
    if (err) {
        console.error(err.message);
    }
    else {
        console.log('Connected to SQLite3.');

    }

    const sql = fs.readFileSync(path.join(__dirname, 'Model.sql'), 'utf8');
    db.exec(sql, (err) => {
        if (err) {
            console.log("Didn't run sql = SAD:", err.message);
        }
        else {
            console.log("sql ran successfully, WOOHOOOOOOOOOOOO");
        }
    });
});

module.exports = db;