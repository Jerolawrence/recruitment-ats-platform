const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    location: { type: String },
    headline: { type: String },
    bio: { type: String },
    resumeUrl: { type: String },
    coverLetterUrl: { type: String },
    skills: { type: [String] },
    experience: [{
        jobTitle: { type: String },
        company: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
        description: { type: String }
    }],
    education: [{
        degree: { type: String },
        institution: { type: String },
        startDate: { type: Date },
        endDate: { type: Date }
    }],
    socialLinks: { type: Map, of: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Candidate', candidateSchema);