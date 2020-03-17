const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();
app = express();
const portfolio = require('../apps/api/portfolio');

const PORT = process.env.PORT;

function handleListening () {
  console.log(`listening on http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/portfolio', portfolio);


module.exports = app;