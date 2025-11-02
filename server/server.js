const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use('/api/sos', require('./routes/sos'));

app.listen(process.env.PORT || 5000, () => {
  console.log('Server avviato su porta 5000');
});
