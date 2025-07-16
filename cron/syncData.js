const cron = require('node-cron');
const axios = require('axios');
const Crypto = require('../models/Crypto');
const Historical = require('../models/Historical');
require('dotenv').config();

cron.schedule('*/60 * * * *', async () => {
  console.log("Cron job triggered at:", new Date().toLocaleString());

  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 10,
        page: 1,
      },
      headers: {
        'x-cg-pro-api-key': 'CG-pxFETY6vNww4zJJXCSjSGbcU'
      }
    });

    const coins = response.data;

    console.log("Coins fetched:", coins.length);

    await Crypto.deleteMany();
    await Crypto.insertMany(coins);
    await Historical.create({ timestamp: new Date(), data: coins });

    console.log("Data synced to DB");
  } catch (error) {
    console.error("Cron Error:", error.response?.data || error.message);
  }
});
