const express = require('express');
const pool = require('./db/db.js');
const router = require('./routes/routes.js')
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/', router)

app.listen(port, () => {
    pool.connect((err) => {
        if(err) console.log(err);
        else console.log(`Running on port ${port}`);
    });
});