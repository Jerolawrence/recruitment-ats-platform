const express = require('express');
const router = express.Router();

// Mock data for jobs
let jobs = [];

// Get all jobs
router.get('/', (req, res) => {
    res.json(jobs);
});

// Get job by ID
router.get('/:id', (req, res) => {
    const job = jobs.find(j => j.id === parseInt(req.params.id));
    if (job) {
        res.json(job);
    } else {
        res.status(404).send('Job not found');
    }
});

// Create a new job
router.post('/', (req, res) => {
    const newJob = {
        id: jobs.length + 1,
        title: req.body.title,
        description: req.body.description,
        status: 'open'
    };
    jobs.push(newJob);
    res.status(201).json(newJob);
});

// Update a job
router.put('/:id', (req, res) => {
    const jobIndex = jobs.findIndex(j => j.id === parseInt(req.params.id));
    if (jobIndex >= 0) {
        jobs[jobIndex] = {
            ...jobs[jobIndex],
            title: req.body.title,
            description: req.body.description
        };
        res.json(jobs[jobIndex]);
    } else {
        res.status(404).send('Job not found');
    }
});

// Close a job
router.patch('/:id/close', (req, res) => {
    const job = jobs.find(j => j.id === parseInt(req.params.id));
    if (job) {
        job.status = 'closed';
        res.json(job);
    } else {
        res.status(404).send('Job not found');
    }
});

module.exports = router;