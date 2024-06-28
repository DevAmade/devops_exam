const express = require('express');
const pool = require('./database/database.js');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname + '/view/form.html'));
});

app.post('/', async (req, res) => {
    console.log(req.body);
    
    const text = "INSERT INTO users (name, first_name) VALUES ($1, $2)";
    const values = [req.body.name, req.body.firstName];

    try {
        await pool.query(text, values);
        res.send('Effectué');
    } catch(err) {
        console.error(err.stack);
    }
});

app.listen(port, () => {
    pool.connect((err) => {
        if(err) console.log(err);
        else console.log(`Running on port ${port}`);
    });
});