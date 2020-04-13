const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const controller = require("./controller");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true })); // possible to parse nested object

router.get('/', controller.getAllPortfolio);
router.get('/:hashtag', controller.getHashTagSearch);
router.get('/all/skills', controller.getAllSkills);

router.post('/', controller.saveNewProject)
router.post('/update', controller.updateProject)
router.post('/delete', controller.deleteProject)

module.exports = router;