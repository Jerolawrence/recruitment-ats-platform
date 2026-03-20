const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
    applicationId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Application' },
    interviewType: { type: String, required: true },
    scheduledAt: { type: Date, required: true },
    duration: { type: Number, required: true },
    interviewers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    meetingLink: { type: String },
    location: { type: String },
    status: { type: String, enum: ['scheduled', 'completed', 'canceled'], default: 'scheduled' },
    feedback: [{
        interviewerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        rating: { type: Number, min: 1, max: 5 },
        comments: { type: String },
        submittedAt: { type: Date, default: Date.now },
    }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

interviewSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;
