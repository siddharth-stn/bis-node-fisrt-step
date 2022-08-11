require('dotenv').config();

const http = require('http');

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

const server = http.createServer((req, res) => {
    console.log(req.URL);
});

server.listen(port, hostname, () => {
    console.log(`Server is running at ${hostname}:${port}`);
});