const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    question: String,
    answers: Array,
    correct_answer: String,
    points: Number,
    category: String,
    checkpoint: Boolean
});

module.exports = mongoose.model('Question', questionSchema)