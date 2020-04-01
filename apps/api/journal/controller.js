const journalModel = require('../../../db/model/journal')
const moment = require('moment');

exports.getAllJournal = (req, res) => {
  journalModel.find().sort([["createdAt", -1]]).exec((err, data) => {
    // console.log('>>>>>>> get jour');
    return res.json(data);
  });
}

exports.saveNewJournal = (req, res) => {
  let journal = new journalModel();
  journal.title = req.body.title;
  journal.date = req.body.date;
  journal.content = req.body.content;

  journal.save((err, data) => {
    // console.log(">>>>>> save new journal");
    return res.json(data)
  })
}

exports.deleteJournal = (req, res) => {
  journalModel.deleteOne({ _id: req.body.id }, (err, data) => {
    // console.log(">>>>> delete execute")
    return res.json(data)
  })
}

exports.updateJournal = (req, res) => {
  console.log(req.body)
  journalModel.updateOne(
    { _id: req.body._id },
    { $set : { title: req.body.title, content: req.body.content} },
     (err, data) => {
       console.log(data)
       console.log(err)
    console.log(">>>>> update execute")
    return res.json(data)
  })
}

exports.getTodaysJournal = (req, res) => {
  const today = moment().startOf('day');
  
  journalModel.find({
    createdAt: {
      $gte: today.toDate(),
      $lte: moment(today).endOf('day').toDate()
    }}
    ).sort([["createdAt", -1]]).exec((err, data) => {
    console.log('>>>>>>> get today\'s');
    return res.json(data);
  });
}

