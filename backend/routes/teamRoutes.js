const express = require('express');
const { protect } = require('../middleware/auth');
const { createTeam, getTeams } = require('../controllers/teamController');
const router = express.Router();

// @route   POST /api/teams
// @desc    Create a new team
// @access  Private
router.post('/', protect, createTeam);

// @route   GET /api/teams
// @desc    Get all teams
// @access  Private
router.get('/', protect, getTeams);

module.exports = router;