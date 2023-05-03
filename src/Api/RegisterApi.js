const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3001;

app.post('/register', (req, res) => {
    res.send('hello world')
})
