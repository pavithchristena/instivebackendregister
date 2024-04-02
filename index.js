const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser');
const http = require('http');
const routes = require('./routes')

const port = 8080


const app = express()
const server = http.createServer(app);

app.use(bodyParser.json());

app.use(cors())

routes.setup(app);

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to Instrive registration page.',
}));

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

