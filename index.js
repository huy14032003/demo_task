const express = require('express');
const cors = require("cors");
const path = require('path');

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use('/api/charts', require('./routes/server'));

app.listen(3000, () => console.log('Server chạy ở http://localhost:3000'));
