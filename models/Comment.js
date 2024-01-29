const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  text: String,
  createdAt: { type: Date, default: Date.now },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vote' }],
});

module.exports = mongoose.model('Comment', CommentSchema);