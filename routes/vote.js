const express = require('express');
const router = express.Router();
const Vote = require('../models/Vote');
const Comment = require('../models/Comment');

module.exports = function () {
    // Post a new vote
    router.post('/', async (req, res) => {
      try {
        if (!req.body.userId || !req.body.commentId) {
          return res.status(422).json({ message: 'Missing required fields.' });
        }

        const vote = await Vote.findOne(req.body);

        if (vote) {
          await Vote.deleteOne({ _id: vote._id });
          return res.status(201).json({ message: 'Unlike.' });
        }
        
        const newVote = await Vote.create(req.body);
        await Comment.findByIdAndUpdate(req.body.commentId, { $push: { likes: newVote._id } });
        return res.status(201).json(newVote);
      } catch (error) {
        return res.status(500).json({ message: 'Error posting vote', error });
      }
    });

    return router;
}