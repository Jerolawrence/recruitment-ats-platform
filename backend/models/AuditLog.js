const mongoose = require('mongoose');

const AuditLogSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    action: {
        type: String,
        required: true
    },
    entityType: {
        type: String,
        required: true
    },
    entityId: {
        type: String,
        required: true
    },
    changesBefore: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    changesAfter: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    ipAddress: {
        type: String,
        required: true
    },
    userAgent: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const AuditLog = mongoose.model('AuditLog', AuditLogSchema);

module.exports = AuditLog;