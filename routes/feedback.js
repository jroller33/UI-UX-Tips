const fb = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET route for retrieving all feedback
fb.get('/', (req, res) =>
  readFromFile('./db/feedback.json').then((data) => res.json(JSON.parse(data)))
);

// POST route for submitting feedback
fb.post('/', (req, res) => {
  // destructuring assignment for items in req.body
  const { email, feedbackType, feedback } = req.body;

  // if all required properties are present
  if (email && feedbackType && feedback) {
    // variable for object that's saved
    const newFeedback = {
      email,
      feedbackType,
      feedback,
      feedback_id: uuidv4(),
    };

    readAndAppend(newFeedback, './db/feedback.json');

    const response = {
      status: 'success',
      body: newFeedback,
    };

    res.json(response);
  } else {
    res.json('Error in posting feedback');
  }
});

module.exports = fb;
