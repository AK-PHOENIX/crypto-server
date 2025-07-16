const cron = require('node-cron');
const axios = require('axios');
const Crypto = require('../models/Crypto');
const Historical = require('../models/Historical');
require('dotenv').config();

//cron used for scheduling
cron.schedule('0 * * * *', async () => {
  console.log("Cron job triggered at:", new Date().toLocaleString());

  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1');

    const coins = response.data;

    await Crypto.deleteMany();
    await Crypto.insertMany(coins);
    await Historical.create({ timestamp: new Date(), data: coins });

    console.log("Data synced to DB and history saved");
  } catch (error) {
    console.error("Cron Error:", error.response?.data || error.message);
  }
});
