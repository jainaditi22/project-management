const express = require('express');
const { protect } = require('../middleware/auth');
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const router = express.Router();

// @route   GET /api/users/profile
// @desc    Get user profile
// @access  Private
router.get('/profile', protect, getUserProfile);

// @route   PUT /api/users/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', protect, updateUserProfile);

module.exports = router;