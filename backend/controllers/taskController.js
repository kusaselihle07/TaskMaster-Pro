const Task = require('../models/Task');

// Get tasks for logged-in user
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const task = new Task({
            userId: req.user.id,
            title: req.body.title,
            status: req.body.status,
            priority: req.body.priority
        });

        const savedTask = await task.save();
        res.json(savedTask);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};
