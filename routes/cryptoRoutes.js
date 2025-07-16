const express = require('express');
const router = express.Router();
const Crypto = require('../models/Crypto');
const Historical = require('../models/Historical');

// ✅ Get current data (live top 10)
router.get('/coins', async (req, res) => {
  try {
    const data = await Crypto.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Save current data snapshot to history
router.post('/history', async (req, res) => {
  try {
    const currentData = await Crypto.find();
    await Historical.create({ timestamp: new Date(), data: currentData });
    res.json({ message: 'Snapshot saved' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Optional: Get history of specific coinId
router.get('/history/:coinId', async (req, res) => {
  try {
    const { coinId } = req.params;
    const history = await Historical.find({ 'data.id': coinId });
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
