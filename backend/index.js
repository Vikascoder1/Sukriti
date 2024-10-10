
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // Ensure you have a User model defined
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/userdb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Get all users
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users); // Return the list of users
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users' });
    }
});

// Add a new user
app.post('/api/users', async (req, res) => {
    const user = new User(req.body);
    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser); // Return the newly created user
    } catch (err) {
        res.status(400).json({ message: 'Error creating user' });
    }
});

// Update a user
app.put('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(user); // Send the updated user
    } catch (err) {
        res.status(500).json({ message: 'Error updating user' });
    }
});

// Delete a user
app.delete('/api/users/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(204).send(); // Send no content
    } catch (err) {
        res.status(500).json({ message: 'Error deleting user' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
