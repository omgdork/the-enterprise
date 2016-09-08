var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var candidateSkillModel = new Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
});

var candidateModel = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  skills: [candidateSkillModel]
});

module.exports = mongoose.model('Candidate', candidateModel);