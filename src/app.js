const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
// Put this statement near the top of your module 
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
// Put these statements before you define any 

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
//app.use(middlewares.notFoundToken);

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
