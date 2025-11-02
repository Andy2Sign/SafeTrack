const mongoose = require('mongoose');

const SOSSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  location: {
    lat: Number,
    lng: Number,
  },
  timestamp: Date,
});

module.exports = mongoose.model('SOS', SOSSchema);
