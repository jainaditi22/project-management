const express = require('express');
const { protect } = require('../middleware/auth');
const {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} = require('../controllers/projectController');
const router = express.Router();

// @route   POST /api/projects
// @desc    Create a new project
// @access  Private
router.post('/', protect, createProject);

// @route   GET /api/projects
// @desc    Get all projects
// @access  Private
router.get('/', protect, getProjects);

// @route   GET /api/projects/:id
// @desc    Get a single project by ID
// @access  Private
router.get('/:id', protect, getProjectById);

// @route   PUT /api/projects/:id
// @desc    Update a project
// @access  Private
router.put('/:id', protect, updateProject);

// @route   DELETE /api/projects/:id
// @desc    Delete a project
// @access  Private
router.delete('/:id', protect, deleteProject);

module.exports = router;