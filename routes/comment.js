// comment.js
const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

module.exports = function () {
    router.post('/', async (req, res) => {
        try {
            if (!req.body.userId || !req.body.text) {
                return res.status(422).json({ message: 'Missing required fields.' });
              }

            const newComment = await Comment.create(req.body);
            res.status(201).json(newComment);
        } catch (error) {
            res.status(500).json({ message: 'Error posting comment', error });
        }
    });
      
    router.get('/', async (req, res) => {
        try {
            const comments = await Comment.find().populate('likes');
            res.json(comments);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving comments', error });
        }
    });

    return router;
}