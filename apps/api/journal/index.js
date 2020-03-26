const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const controller = require("./controller");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true })); // possible to parse nested object

router.get('/', controller.getAllJournal);
router.post('/', controller.saveNewJournal);

module.exports = router;