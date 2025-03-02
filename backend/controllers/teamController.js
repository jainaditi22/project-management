const Team = require('../models/Team');

// @desc    Create a new team
// @route   POST /api/teams
// @access  Private
const createTeam = async (req, res) => {
  const { name, members } = req.body;

  try {
    const team = await Team.create({
      name,
      members,
      createdBy: req.user._id,
    });

    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get all teams
// @route   GET /api/teams
// @access  Private
const getTeams = async (req, res) => {
  try {
    const teams = await Team.find({ createdBy: req.user._id }).populate('members', 'name email');
    res.json(teams);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { createTeam, getTeams };