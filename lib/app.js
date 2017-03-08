const express = require('express');
const app = module.exports = express();

const logger = require('morgan')('dev');
const cors = require('./cors')('*');
const ensureAuth = require('./ensureAuth');

// routes
const auth = require('../routes/auth');
const fireplace = require('../routes/fireplace');
const temperature = require('../routes/temperature');

app.use(logger);
app.use(cors);

const public = __dirname + '/../public';
app.use(express.static(public));

app.use('/api', auth);
app.use('/api/fireplace', fireplace);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.code||500).json({error: err.error || 'Server error', msg: err.msg});
});
