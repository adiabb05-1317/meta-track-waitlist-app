const express = require("express");
const router = express.Router();
require("dotenv").config();
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const db=require("../db");
router.post('/waitlist', asyncHandler(async (req, res) => {
    const { name, email, youtubeLink } = req.body;

    const query = `INSERT INTO WaitList (name, email, youtubelink) VALUES (?, ?, ?)`;
    db.query(query, [name, email, youtubeLink], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            res.status(500).json({ error: "Error inserting data into the database" });
        } else {
            res.status(200).json({ message: "Form data inserted successfully" });
        }
    });
}));

module.exports = router;

