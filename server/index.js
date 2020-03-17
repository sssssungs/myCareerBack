const express = require('express');
require("dotenv").config();
app = express();

const PORT = process.env.PORT;

function handleListening () {
  console.log(`listening on http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);