const journalModel = require('../../../db/model/journal')

exports.getAllJournal = (req, res) => {
  journalModel.find((err, data) => {
    console.log('>>>>>>> get jour');
    return res.json(data);
  });
}