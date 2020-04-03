const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
  title: String,
  fromDate: Date,
  toDate: Date,
  skills: [String],
  role: String,
  category: String,
  content: String
}, {timestamps: true});

module.exports = mongoose.model('Project', projectSchema);