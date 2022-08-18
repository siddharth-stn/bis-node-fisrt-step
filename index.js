require('dotenv').config();

const express = require("express");

const app = express();

const http = require('http');
const fs = require('fs');
const { dirname } = require('path');

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log();

    if (req.url === '/index') {
        fs.readFile(__dirname + req.url + '.html', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            res.end(data);
        });
    } else if (req.url === '/contact-me') {
        fs.readFile(__dirname + req.url + '.html', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            res.end(data);
        });
    } else if (req.url === '/about') {
        fs.readFile(__dirname + req.url + '.html', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            res.end(data);
        });
    } else {
        fs.readFile(__dirname + '/404.html', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            res.end(data);
        });
    } 
});

server.listen(port, hostname, () => {
    console.log(`Server is running at ${hostname}:${port}`);
});