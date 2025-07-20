const fs = require("fs");

const daily = require("./daily.json");
const detail = require("./detail.json");

// Lấy danh sách ngày có trong detail
const validDates = new Set(detail.map(item => item.date));

// Lọc daily theo các ngày có trong detail
const filteredDaily = daily.filter(item => validDates.has(item.date));

// Ghi lại file mới
fs.writeFileSync("filtered_daily.json", JSON.stringify(filteredDaily, null, 2));