const express = require('express');
const router = express.Router();

// Route for user registration
router.post('/register', (req, res) => {
    // Your registration logic here
    res.send('User registered');
});

// Route for user login
router.post('/login', (req, res) => {
    // Your login logic here
    res.send('User logged in');
});

// Route for getting current user
router.get('/current', (req, res) => {
    // Your logic for getting current user here
    res.send('Current user');
});

module.exports = router;