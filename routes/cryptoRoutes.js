const express = require('express');
const router = express.Router();
const Crypto = require('../models/Crypto');

router.get('/', async (req, res) => {
  const data = await Crypto.find();
  res.json(data);
});

module.exports = router;
