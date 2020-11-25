// it's recommended to load configuration for .env as early as possible
require('dotenv').config(); // add this line as the first thing to run1

const express = require('express');

const server = express();
const routes = require("./server")
const port = process.env.PORT || 5000;
server.use('/api', routes);
server.use('/', (req, res) => res.send(`API running on port  ${port}`));

server.listen(port, () => console.log(`API running on port  ${port}`));