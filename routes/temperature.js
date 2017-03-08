const router = require('express').Router();
const bodyParser = require('body-parser').json();
const Temp = require('../models/temperature');

router
  .get('/', (req, res, next) => {
    Temp.find()
      .lean()
      .then(data => res.send(data))
      .catch(err => next(err));
  })
  .get('/latest', (req, res, next) => {
    Temp.find()
      .lean()
      .sort({timestamp: -1})
      .limit(1)
      .then(data => res.send(data))
      .catch(err => next(err));
  })
  .post('/', bodyParser, (req, res, next) => {
    if (req.headers.Authorization !== process.env.TEMP1_SENSOR_KEY) return next({error: 'no authorization', msg: 'Authorization key does not match.', code: 401});
    const data = req.body;
    const time = new Date();
    data.timestamp = time.valueOf();
    console.log(data);
    new Temp(data).save()
      .then(data => res.send(data))
      .catch(err => next(err));
  });
