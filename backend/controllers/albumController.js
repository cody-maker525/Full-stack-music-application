const express = require("express");
const router = express.Router()

const db = require('../db');

const getAll = (req, res) => { //DEFINES A ROUTE
    db.all('SELECT * FROM albums', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
};

//GET BY ID

const getOne = (req, res) => {
    const album_id = req.params.id;
    db.get('SELECT * FROM albums WHERE album_id =?', [album_id], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!row) {
            res.status(404).json({ error: "Album not found" });
        } else {
            res.json(row);
        }
    });
};

//TO UPDATE
const updateOne = (req, res) => {
    const album_id = req.params.id;
    const { title, release_year, no_listens, artist_id } = req.body; // shortcut to writing out each variable
    //this is to make sure it exists
    db.get("SELECT * FROM albums WHERE album_id = ?", [artist_id], function (err, row) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: "404 artist not found" });
        }

        db.run("UPDATE albums SET album_id=?, title=?, release_year=?, no_listens=?,artist_id=? WHERE album_id =?",
            [album_id, title, release_year, no_listens, artist_id, album_id], function (err) {
                if (err) {
                    res.status(500).json({ error: err.message });
                }
                console.log("Album updated successfully");
                res.json("Album updated successfully");
            });
    });
};

//TO CREATE
const createOne = (req, res) => {

    const { album_id, title, release_year, no_listens, artist_id } = req.body; // shortcut to writing out each variable
    //to insert
    db.run(
        "INSERT INTO albums (album_id, title, release_year, no_listens, artist_id) VALUES (?,?,?,?,?)",
        [album_id, title, release_year, no_listens, artist_id], function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            console.log("New album inserted");
            return res.status(201).json({ album_id: this.lastID });
        });
};

//TO DELETE
const deleteOne = (req, res) => {
    const album_id = req.params.id;
    db.run("DELETE FROM albums WHERE album_id=?",
        [album_id], function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (this.changes === 0) {
                return res.status(404).json({ error: "404 not found" });
            }
            console.log("Rows deleted:", this.changes);
            res.json({ message: "Album deleted successfully" });
        });
};


module.exports = { getAll, getOne, updateOne, createOne, deleteOne };