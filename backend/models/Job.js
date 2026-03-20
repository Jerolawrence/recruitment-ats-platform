const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    department: { type: String, required: true },
    location: { type: String, required: true },
    employmentType: { type: String, required: true }, // e.g. Full-Time, Part-Time
    seniority: { type: String, required: true }, // e.g. Junior, Mid-level, Senior
    status: { type: String, required: true }, // e.g. Open, Closed
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    requiredSkills: [{ type: String }],
    responsibilities: [{ type: String }],
    benefits: [{ type: String }],
    salaryMin: { type: Number },
    salaryMax: { type: Number },
    salaryType: { type: String }, // e.g. Annual, Hourly
    screeningQuestions: [{ type: String }],
    applicationDeadline: { type: Date },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    closedAt: { type: Date }
});

module.exports = mongoose.model('Job', JobSchema);