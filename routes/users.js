// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route to create a new user
router.post('/', async (req, res) => {
    try {
        console.log('Request body:', req.body); // Log the incoming data
        console.log("data", req.params);

        const user = new User(req.body);
        await user.save();
        console.log('User saved:', user); // Log the saved user
        res.status(201).json(user);
    } catch (error) {
        console.error('Error saving user:', error); // Log any errors
        res.status(400).json({ error: error.message });
    }
});

// Route to get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to get a user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to update a user by ID
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to delete a user by ID
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
