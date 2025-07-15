const mongoose = require('mongoose');

const CryptoSchema = new mongoose.Schema({
  name: String,
  symbol: String,
  current_price: Number,
  market_cap: Number,
  price_change_percentage_24h: Number,
  last_updated: String
});

module.exports = mongoose.model('Crypto', CryptoSchema);
