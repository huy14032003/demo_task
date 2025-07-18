const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('public'));
app.use('/api/charts', require('./routes/charts'));

app.listen(3000, () => console.log('Server chạy ở http://localhost:3000'));
