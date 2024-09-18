const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  technologies: [String]
});

module.exports = mongoose.model('Project', ProjectSchema);
