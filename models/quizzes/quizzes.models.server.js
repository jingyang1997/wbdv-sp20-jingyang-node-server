const mongoose = require('mongoose')
const quizSchema = require('./quizzes.schema.server')
const quizzesModel = mongoose.model(
    'QuizModel',
    quizSchema
)
module.exports = quizzesModel
