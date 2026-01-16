const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const { getTasks, createTask } = require('../controllers/taskController');

// Get all tasks for logged-in user
router.get('/', protect, getTasks);

// Create a task
router.post('/', protect, createTask);

module.exports = router;
