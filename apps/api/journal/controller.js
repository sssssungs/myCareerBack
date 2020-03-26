const journalModel = require('../../../db/model/journal')

exports.getAllJournal = (req, res) => {
  journalModel.find().sort([["createdAt", -1]]).exec((err, data) => {
    console.log('>>>>>>> get jour');
    return res.json(data);
  });
}

exports.saveNewJournal = (req, res) => {
  let journal = new journalModel();
  journal.title = req.body.title;
  journal.date = req.body.date;
  journal.content = req.body.content;
  console.log(req.body);

  journal.save((err, data) => {
    return res.json(data)
  })
}