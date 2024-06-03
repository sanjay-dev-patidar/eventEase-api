// models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  participants: [String],
  date: { type: Date, required: true },
  time: { type: String, required: true },
  duration: { type: Number, required: true },
  sessionNotes: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  googleEventId: String
});

module.exports = mongoose.model('Event', eventSchema);
