const mongoose = require('mongoose');
const journalSchema = new mongoose.Schema({
  title: String,
  date: Date,
  content: String
});

module.exports = mongoose.model('Journals', journalSchema);