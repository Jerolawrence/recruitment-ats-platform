const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    candidateId: { type: mongoose.Schema.Types.ObjectId, required: true },
    jobId: { type: mongoose.Schema.Types.ObjectId, required: true },
    status: { type: String, required: true },
    appliedOn: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    screeningAnswers: { type: [String], default: [] },
    attachments: { type: [String], default: [] },
    score: { type: Number, default: null },
    ranking: { type: Number, default: null },
    notes: { type: [String], default: [] },
    stageHistory: { type: [Object], default: [] },
    rejectionReason: { type: String, default: null },
    rejectedAt: { type: Date, default: null }
});

module.exports = mongoose.model('Application', applicationSchema);