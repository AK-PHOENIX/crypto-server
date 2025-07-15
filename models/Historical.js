const mongoose = require('mongoose');

const HistoricalSchema = new mongoose.Schema({
  timestamp: Date,
  data: Array
});

module.exports = mongoose.model('Historical', HistoricalSchema);
