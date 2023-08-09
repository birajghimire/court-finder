const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    reviewerName: { type: String },
    reviewerId: {type: ObjectId, ref: 'User'},
    courtName: { type: String },
    courtId: { type: ObjectId, ref: 'Court' },
    stars: {type: Number },
    comment: { type: String},
});

module.exports = mongoose.model('Review', ReviewSchema);