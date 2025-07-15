const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db/connect'); // ✅ import connectDB

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('✅ Crypto Tracker API is running!');
  });
// 🔌 Connect to DB
connectDB();

// 🔁 Routes
app.use('/api/crypto', require('./routes/cryptoRoutes'));

// ⏰ Cron Job
require('./cron/syncData');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
