const tipForm = document.getElementById('tip-form');
const tipsContainer = document.getElementById('tip-container');
const fbBtn = document.getElementById('feedback-btn');

fbBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = '/feedback';
});

const createCard = (tip) => {
  // create card
  const cardEl = document.createElement('div');
  cardEl.classList.add('card', 'mb-3', 'm-3');
  cardEl.setAttribute('key', tip.tip_id);

  // create card header
  const cardHeaderEl = document.createElement('h4');
  cardHeaderEl.classList.add(
    'card-header',
    'bg-primary',
    'text-light',
    'p-2',
    'm-0'
  );
  cardHeaderEl.innerHTML = `${tip.username} </br>`;

  // create card body
  const cardBodyEl = document.createElement('div');
  cardBodyEl.classList.add('card-body', 'bg-light', 'p-2');
  cardBodyEl.innerHTML = `<p>${tip.tip}</p>`;

  // append the header and body to the card element
  cardEl.appendChild(cardHeaderEl);
  cardEl.appendChild(cardBodyEl);

  // append the card element to the tips container in the DOM
  tipsContainer.appendChild(cardEl);
};

// get a list of existing tips from the server
const getTips = () =>
  fetch('/api/tips', {
    method: 'GET', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error:', error);
    });

// post a new tip to the page
const postTip = (tip) =>
  fetch('/api/tips', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tip),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data);
      createCard(tip);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

// when the page loads, get all the tips
getTips().then((data) => data.forEach((tip) => createCard(tip)));

// fn to validate the tips that were submitted
const validateTip = (newTip) => {
  const { username, topic, tip } = newTip;

  // obj to hold error messages until  return
  const errorState = {
    username: '',
    tip: '',
    topic: '',
  };

  // check if the username is valid
  const utest = username.length >= 4;
  if (!utest) {
    errorState.username = 'Invalid username!';
  }

  // check if the tip being added is at least 15 characters long
  const tipContentCheck = tip.length > 15;
  if (!tipContentCheck) {
    errorState.tip = 'Tip must be at least 15 characters';
  }

  // check if the topic is either UX or UI
  const topicCheck = topic.includes('UX' || 'UI');
  if (!topicCheck) {
    errorState.topic = 'Topic not relevant to UX or UI';
  }

  const result = {
    isValid: !!(utest && tipContentCheck && topicCheck),
    errors: errorState,
  };

  // return result obj with  isValid bool and an errors obj for any errors that may exist
  return result;
};

// helper fn to deal with errors that exist in the result

const showErrors = (errorObj) => {
  const errors = Object.values(errorObj);
  errors.forEach((error) => {
    if (error.length > 0) {
      alert(error);
    }
  });
};

// helper fn to send a POST request to the diagnostics route
const submitDiagnostics = (submissionObj) => {
  fetch('/api/diagnostics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(submissionObj),
  })
    .then((response) => response.json())
    .then(() => showErrors(submissionObj.errors))
    .catch((error) => {
      console.error('Error:', error);
    });
};

// fn to handle when a user submits the feedback form
const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log('Form submit invoked');

  // get the value of tip and save it to a variable
  const tipContent = document.getElementById('tipText').value;

  // get the value of username and save it to a variable
  const tipUsername = document.getElementById('tipUsername').value.trim();

  // create an obj with tip and username
  const newTip = {
    username: tipUsername,
    topic: 'UX',
    tip: tipContent,
  };

  // run the tip obj through our validator fn
  const submission = validateTip(newTip);

  // if submission is valid, post the tip. else handle errors
  return submission.isValid ? postTip(newTip) : submitDiagnostics(submission);
};

// listen for when the form is submitted
tipForm.addEventListener('submit', handleFormSubmit);
