const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  commentId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Vote', VoteSchema);