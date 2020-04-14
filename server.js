const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://heroku_16r5rwvs:2qnloiqaph0g8b8tfrc4cs7cpg@ds141952.mlab.com:41952/heroku_16r5rwvs',
    {useNewUrlParser:true, useUnifiedTopology:true})
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

require('./controllers/quizzes.controller.server')(app)
require('./controllers/questions.controller.server')(app)
require('./controllers/quiz-attempts.controller.server')(app)

app.listen(process.env.PORT||3000)
