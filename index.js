require('dotenv').config();

const express = require("express");

const app = express();

const fs = require('fs');
const { dirname } = require('path');

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

app.get('/', (req, res) => {
    fs.readFile(__dirname + '/index.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data);
    })
});

app.get('/index', (req, res) => {
    fs.readFile(__dirname + '/index.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data);
    });
});

app.get('/contact-me', (req, res) => {
    fs.readFile(__dirname + '/contact-me.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data);
    });
});

app.get('/about', (req, res) => {
    fs.readFile(__dirname + '/about.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data);
    });
});

app.use((req, res) => {
    fs.readFile(__dirname + '/404.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data);
    });
});

app.listen(port, hostname, () => {
    console.log(`Server is running at ${hostname}:${port}`);
});