const mongoose = require('mongoose');

const CourtSchema = new mongoose.Schema({
    name: { type: String },
    address: { type: String },
    longitude: { type: Number },
    latitude: { type: Number },
    reviews: [{ type : ObjectId, ref: 'Review' }],
});

module.exports = mongoose.model('Court', CourtSchema);