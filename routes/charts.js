const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const dataPath = path.join(__dirname, '../data/data.json');

router.get('/', (req, res) => {
  const rawData = fs.readFileSync(dataPath);
  const charts = JSON.parse(rawData);
  res.json(charts);
});

module.exports = router;
