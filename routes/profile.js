'use strict';

const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

const profile_mocked = [
  {
    "name": "A Martinez",
    "description": "Adolph Larrue Martinez III.",
    "mbti": "ISFJ",
    "enneagram": "9w3",
    "variant": "sp/so",
    "tritype": 725,
    "socionics": "SEE",
    "sloan": "RCOEN",
    "psyche": "FEVL",
    "image": "https://soulverse.boo.world/images/1.png",
  }
]

module.exports = function() {
  router.post('/', async function(req, res, next) {
    try {
      const newProfile = await Profile.create(req.body);
      return res.status(201).json(newProfile);
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: 'Error creating profile', error });
    }
  });

  // GET route to retrieve a profile by ID
  router.get('/:id', async function(req, res, next) {
    try {
      const profile = await Profile.findById(req.params.id);
      if (!profile) {
        return res.status(404).json({ message: 'Profile not found' });
      }
      return res.render('profile_template', { profile });
    } catch (error) {
      return res.status(500).json({ message: 'Error retrieving profile', error });
    }
  });

  return router;
}
