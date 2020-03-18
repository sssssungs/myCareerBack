const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
  title: String,
  fromDate: Date,
  toDate: Date,
  skills: [String],
  role: String,
  content: String
});

module.exports = mongoose.model('Project', projectSchema);