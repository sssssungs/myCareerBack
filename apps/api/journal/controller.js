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

  journal.save((err, data) => {
    console.log(">>>>>> save new journal");
    return res.json(data)
  })
}

exports.deleteJournal = (req, res) => {
  journalModel.remove({ _id: req.body.id }, (err, data) => {
    console.log(">>>>> delete execute")
    return res.json(data)
  })
}