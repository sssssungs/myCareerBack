const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');
require("dotenv").config();
app = express();
const portfolio = require('../apps/api/portfolio');
const journal = require('../apps/api/journal');

const PORT = process.env.PORT;

function handleListening () {
  console.log(`listening on http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
db();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/portfolio', portfolio);
app.use('/journal', journal);


module.exports = app;