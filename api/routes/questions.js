var express = require('express');
var router = express.Router();

var Question = require('../models/question');

/* GET all questions. */
router.get('/', (req, res, next) => {
  Question.find()
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

/* GET question by id. */
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Question.findById(id)
    .exec()
    .then(doc => {
      console.log("From database", doc);
      res.status(200).json(doc);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err })
    });
});

router.post('/', (req, res, next) => {
  const question = new Question({
    question: req.body.question,
    answers: req.body.answers,
    correct_answer: req.body.correct_answer
  });
  question.save().then(result => {
    console.log(result);
  })
    .catch(err => console.log(err));
  res.status(201).json({
    message: "Handling POST requests to /api/questions",
    createdQuestion: question
  });
})

module.exports = router;

/*
question: String,
answers: Array,
correct_answer: String,
*/
