const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const dataPath = path.join(__dirname, '../data/daily.json');
const monthPath = path.join(__dirname, '../data/month.json');

// GET /api/data
router.get('/daily', (req, res) => {
  const { fromDate, toDate } = req.query;

  const rawData = fs.readFileSync(dataPath);
  const charts = JSON.parse(rawData);

  let filteredData = charts;

  if (fromDate && toDate) {
    const from = new Date(fromDate);
    const to = new Date(toDate);

    filteredData = charts.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate >= from && itemDate <= to;
    });
  }

  res.json(filteredData);
});
const monthData = JSON.parse(fs.readFileSync(monthPath));
router.get('/month', (req, res) => {
  const { fromDate, toDate } = req.query;

  if (!fromDate || !toDate) {
    return res.status(400).json({ error: 'Thiếu fromDate hoặc toDate' });
  }

  const rawData = fs.readFileSync(monthPath);
  const monthData = JSON.parse(rawData);

  const from = new Date(fromDate);
  const to = new Date(toDate);

  // B1: lọc theo ngày
  const filteredData = monthData.filter(item => {
    const date = new Date(item.month || item.date);
    return date >= from && date <= to;
  });

  // B2: gom nhóm theo yyyy-mm
  const summary = {};
  filteredData.forEach(item => {
    const date = new Date(item.month || item.date);
    const month = date.toISOString().slice(0, 7); // yyyy-mm

    if (!summary[month]) {
      summary[month] = { month, total_process: 0, total_finish: 0, total: 0 };
    }

    summary[month].total_process += parseInt(item.total_process || 0);
    summary[month].total_finish += parseInt(item.total_finish || 0);
    summary[month].total += parseInt(item.total || 0);
  });

  res.json(Object.values(summary));
});
module.exports = router;
