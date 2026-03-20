const express = require('express');
const router = express.Router();

// Mock database of interviews
let interviews = [];

// Schedule an interview
router.post('/schedule', (req, res) => {
    const { candidateId, interviewerId, date, time } = req.body;
    const newInterview = { id: interviews.length + 1, candidateId, interviewerId, date, time, status: 'scheduled', feedback: null };
    interviews.push(newInterview);
    res.status(201).json(newInterview);
});

// Get all interviews
router.get('/', (req, res) => {
    res.json(interviews);
});

// Update interview status
router.patch('/:id/status', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const interview = interviews.find(i => i.id === parseInt(id));
    if (interview) {
        interview.status = status;
        res.json(interview);
    } else {
        res.status(404).json({ message: 'Interview not found' });
    }
});

// Submit interview feedback
router.post('/:id/feedback', (req, res) => {
    const { id } = req.params;
    const { feedback } = req.body;
    const interview = interviews.find(i => i.id === parseInt(id));
    if (interview) {
        interview.feedback = feedback;
        res.json(interview);
    } else {
        res.status(404).json({ message: 'Interview not found' });
    }
});

module.exports = router;