const mongoose = require('mongoose');
const journalSchema = new mongoose.Schema({
  title: String,
  date: { type: Date, default: Date.now },
  content: String
}, {timestamps: true});

module.exports = mongoose.model('Journals', journalSchema);