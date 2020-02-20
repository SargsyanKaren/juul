const express = require('express');
const cors = require('cors');
const { Client } = require('pg');

require('dotenv').config();

const PORT = process.env.NODE_PORT || 4040;

const app = express();

app.use(cors());
app.use(express.json());

const client = new Client();

client.connect();

app.get('/test', (req, res) => {
    console.log('Hello');
    res.end();
})

app.listen(PORT);
