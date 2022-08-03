const feedbackForm = document.getElementById('feedback-form');
const homeBtn = document.getElementById('home-btn');

homeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = '/';
});

// handle when a user submits feedback

if (feedbackForm) {
  feedbackForm
    .addEventListener('submit', (e) => {
      e.preventDefault();

      // get the feedback text from the DOM and assign it to a variable
      let feedback = document.getElementById('feedbackText').value;
      // Get the username text and add it to a variable
      let email = document.getElementById('feedbackUsername').value.trim();

      // create an object with username and feedback
      const newFeedback = {
        feedback,
        email,
        feedbackType: 'Complaint',
      };

      // fetch POST request to the server
      fetch('api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFeedback),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.status);
          email = '';
          feedback = '';
        });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
