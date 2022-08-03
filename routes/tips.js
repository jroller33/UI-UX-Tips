const tips = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');

// GET route for retrieving all the tips
tips.get('/', (req, res) => {
  readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
});

// GET route for specific tip
tips.get('/:tip_id', (req, res) => {
  const tipId = req.params.tip_id;
  readFromFile('./db/tips.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((tip) => tip.tip_id === tipId);
      return result.length > 0
        ? res.json(result)
        : res.json('No tip with that ID');
    });
});

// DELETE route for specific tip
tips.delete('/:tip_id', (req, res) => {
  const tipId = req.params.tip_id;
  readFromFile('./db/tips.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      // make new array of all tips except the one with ID provided in URL
      const result = json.filter((tip) => tip.tip_id !== tipId);

      // save that array to filesystem
      writeToFile('./db/tips.json', result);

      // respond to DELETE request
      res.json(`Item ${tipId} has been deleted 🗑️`);
    });
});

// POST route for a new UX/UI tip
tips.post('/', (req, res) => {
  console.log(req.body);

  const { username, topic, tip } = req.body;

  if (req.body) {
    const newTip = {
      username,
      tip,
      topic,
      tip_id: uuidv4(),
    };

    readAndAppend(newTip, './db/tips.json');
    res.json(`Tip added successfully 🚀`);
  } else {
    res.error('Error in adding tip');
  }
});

module.exports = tips;
