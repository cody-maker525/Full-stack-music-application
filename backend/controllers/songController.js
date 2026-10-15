const express = require("express");
const router = express.Router()

const db = require('../db');

const getAll = (req, res) => { //DEFINES A ROUTE
    db.all('SELECT * FROM songs', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
};

//GET BY ID

const getOne = (req, res) => {
    const id = req.params.id;
    db.get('SELECT * FROM songs WHERE id =?', [id], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!row) {
            res.status(404).json({ error: "Song not found" });
        } else {
            res.json(row);
        }
    });
};

const updateOne = (req, res) => {
    const id = req.params.id;
    const { title, release_year, artist_id, album_id } = req.body; // shortcut to writing out each variable
    //this is to make sure it exists
    db.get("SELECT * FROM songs WHERE id = ?", [id], function (err, row) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: "404 song not found" });
        }

        db.run("UPDATE songs SET title=?, release_year=?,artist_id=?, album_id=? WHERE id =?",
            [title, release_year, artist_id, album_id, id], function (err) {
                if (err) {
                    res.status(500).json({ error: err.message });
                }
                console.log("Song updated successfully");
                res.json("Song updated successfully");
            });
    });
};

//TO CREATE
const createOne = (req, res) => {

    const { title, release_year, artist_id, album_id } = req.body; // shortcut to writing out each variable
    //to insert
    db.run(
        "INSERT INTO songs (title, release_year, artist_id, album_id) VALUES (?,?,?,?)",
        [title, release_year, artist_id, album_id], function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            console.log("New song inserted");
            return res.status(201).json({ id: this.lastID });
        });
};

//TO DELETE
const deleteOne = (req, res) => {
    const id = req.params.id;
    db.run("DELETE FROM songs WHERE id=?",
        [id], function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (this.changes === 0) {
                return res.status(404).json({ error: "404 not found" });
            }
            console.log("Rows deleted:", this.changes);
            res.json({ message: "Song deleted successfully" });
        });
};


module.exports = { getAll, getOne, updateOne, createOne, deleteOne };