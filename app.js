var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./api/routes/index');
var questionsRouter = require('./api/routes/questions');
var scoresRouter = require('./api/routes/scores');

mongoose.connect('mongodb+srv://jennifer:' + process.env.MONGO_ATLAS_PW + '@cluster0-ivowc.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/questions', questionsRouter);
app.use('/api/scores', scoresRouter);

module.exports = app;
