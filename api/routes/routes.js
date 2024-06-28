const express = require('express');
const pool = require('../db/db.js');
const router = express.Router();

router.get('/', async (req, res) => {
    const text = "SELECT * FROM users";

    try {
        const result = await pool.query(text);
        console.log(result);
        res.status(200).send(result);
    } catch(err) {
        console.error(err.stack);
    }
});

router.post('/', async (req, res) => {
    console.log(req.body);
    
    const text = "INSERT INTO users (last_name, first_name, email, birthdate) VALUES ($1, $2, $3, $4)";
    const values = [
        req.body.lastName,
        req.body.firstName,
        req.body.email,
        req.body.birthdate,
    ];

    try {
        await pool.query(text, values);
        res.sendStatus(201);
    } catch(err) {
        console.error(err.stack);
    }
});

module.exports = router;