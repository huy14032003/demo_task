const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Load file JSON
const dailyPath = path.join(__dirname, '../data/daily.json');   // Biểu đồ
const detailPath = path.join(__dirname, '../data/detail.json'); // Chi tiết

// API 1: Trả về daily từ toDate - fromDate
router.get('/daily', (req, res) => {
  const { fromDate, toDate } = req.query;

  if (!fromDate || !toDate) {
    return res.status(400).json({ error: 'Thiếu fromDate hoặc toDate' });
  }

  const from = new Date(fromDate);
  const to = new Date(toDate);

  const raw = fs.readFileSync(dailyPath);
  const data = JSON.parse(raw);

  const filtered = data.filter(item => {
    const date = new Date(item.date);
    return date >= from && date <= to;
  });

  res.json(filtered);
});

// API 2: Trả về chi tiết theo ngày
router.get('/detail', (req, res) => {
  const { fromDate, toDate } = req.query;

  if (!fromDate || !toDate) {
    return res.status(400).json({ error: 'Thiếu fromDate hoặc toDate' });
  }

  const from = new Date(fromDate);
  const to = new Date(toDate);

  const raw = fs.readFileSync(detailPath);
  const data = JSON.parse(raw);

  const filtered = data.filter(item => {
    const date = new Date(item.date);
    return date >= from && date <= to;
  });

  res.json(filtered);
});
module.exports = router;
