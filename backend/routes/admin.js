// admin.js

// Express router for admin-related routes
const express = require('express');
const router = express.Router();

// Dashboard route
router.get('/dashboard', (req, res) => {
    res.send('Admin Dashboard');
});

// User management route
router.get('/users', (req, res) => {
    res.send('User Management');
});

// System statistics route
router.get('/stats', (req, res) => {
    res.send('System Statistics');
});

module.exports = router;
