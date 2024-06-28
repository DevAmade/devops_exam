const express = require('express');
const pool = require('../db/db.js');
const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const text = "SELECT * FROM users WHERE id = $1";
        const values = [req.params.id];
        const result = await pool.query(text, values);

        res.status(200).send(result);
    } catch(err) {
        console.error(err.stack);
    }
});

router.get('/', async (req, res) => {
    try {
        const text = "SELECT * FROM users";
        const result = await pool.query(text);

        res.status(200).send(result);
    } catch(err) {
        console.error(err.stack);
    }
});

router.post('/add-data', async (req, res) => {
    try {
        req.body.forEach(async user => {
            const text = "INSERT INTO users (last_name, first_name, email, birthdate) VALUES ($1, $2, $3, $4)";
            const values = [
                user.lastName,
                user.firstName,
                user.email,
                user.birthdate,
            ];
            await pool.query(text, values);
        });

        res.sendStatus(200);
    } catch(err) {
        console.error(err.stack);
    }
});

router.post('/', async (req, res) => {
    try {
        const text = "INSERT INTO users (last_name, first_name, email, birthdate) VALUES ($1, $2, $3, $4)";
        const values = [
            req.body.lastName,
            req.body.firstName,
            req.body.email,
            req.body.birthdate,
        ];
        await pool.query(text, values);

        res.sendStatus(200);
    } catch(err) {
        console.error(err.stack);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const text = "DELETE FROM users WHERE id = $1";
        const values = [req.params.id];
        await pool.query(text, values);

        res.sendStatus(200);
    } catch(err) {
        console.error(err.stack);
    }
});

router.delete('/', async (req, res) => {
    try {
        const text = "TRUNCATE users RESTART IDENTITY";
        await pool.query(text);

        res.sendStatus(200);
    } catch(err) {
        console.error(err.stack);
    }
});

module.exports = router;