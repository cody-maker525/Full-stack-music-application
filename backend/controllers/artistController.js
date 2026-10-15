const db = require('../db');

const getAll = (req, res) => { //DEFINES A ROUTE
    db.all('SELECT * FROM artists', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
};

//GET BY ID

const getOne = (req, res) => {
    const artist_id = req.params.id;
    db.get('SELECT * FROM artists WHERE artist_id =?', [artist_id], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!row) {
            res.status(404).json({ error: "Artist not found" });
        } else {
            res.json(row);
        }
    });
};

//TO UPDATE
const updateOne = (req, res) => {
    const artist_id = req.params.id;
    const { name, genre, monthly_listeners } = req.body; // shortcut to writing out each variable
    //this is to make sure it exists
    db.get("SELECT * FROM artists WHERE artist_id = ?", [artist_id], function (err, row) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: "404 artist not found" });
        }

        db.run("UPDATE artists SET artist_id=?, name=?, genre=?,monthly_listeners=? WHERE artist_id =?",
            [artist_id, name, genre, monthly_listeners, artist_id], function (err) {
                if (err) {
                    res.status(500).json({ error: err.message });
                }
                console.log("Artist updated successfully");
                res.json("Artist updated successfully");
            });
    });
};

//TO CREATE
const createOne = (req, res) => {

    const { artist_id, name, genre, monthly_listeners } = req.body; // shortcut to writing out each variable
    //to insert
    db.run(
        "INSERT INTO artists (artist_id, name, genre, monthly_listeners) VALUES (?,?,?,?)",
        [artist_id, name, genre, monthly_listeners], function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            console.log("New artist inserted");
            return res.status(201).json({ artist_id: this.lastID });
        });
};

//TO DELETE
const deleteOne = (req, res) => {
    const artist_id = req.params.id;
    db.run("DELETE FROM artists WHERE artist_id=?",
        [artist_id], function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (this.changes === 0) {
                return res.status(404).json({ error: "404 not found" });
            }
            console.log("Rows deleted:", this.changes);
            res.json({ message: "Artist deleted successfully" });
        });
};


module.exports = { getAll, getOne, updateOne, createOne, deleteOne };