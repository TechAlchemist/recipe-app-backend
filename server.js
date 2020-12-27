const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

require('dotenv').config();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

const port = process.env.port || 3001;

require('./config/database');

app.listen(port, () => {
    console.log(`Port is listenting on ${port}`);
});