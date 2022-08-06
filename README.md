  # UI/UX Tips
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  ## Description
  This app is deployed on Heroku (see [Deployed Link](#deployed-link)). It doesn't have much of a frontend, but there's a lot going on server-side (relatively). I used Express.js to write the backend and REST API. I also used javascript, css, html, and node.js.
  
  The app lets you see UI/UX tips
  that other people have written, and you can also save your own. All tips are saved in JSON objects in '/db/' because we haven't learned about databases yet. This is my first app deployed on Heroku.

  ## Table of Contents
  - [Deployed Link](#deployed-link)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [License](#license)
  - [Contact](#contact)
  
  ## Deployed Link
  https://floating-escarpment-55488.herokuapp.com/
  
  ## Usage
  You can click into the text area and enter a tip, and then click "Add Tip." Your tip, along with everyone else's tips, are saved in '/db/tips.json'.
  Click the "Feedback" button to leave feedback, which is stored in '/db/feedback.json'. You must enter a valid name (at least 4 characters) and tip (at least 15 characters), otherwise an error alert will popup, and will be logged in '/db/diagnostics.json'. There is also a 404 page, just in case you wander out of bounds. <br/>
  


  ## Contribution
  You can fork the repo at https://github.com/jroller33/UI-UX-Tips
  
  ## Tests
  There's no tests, but I did use `Insomnia` (https://insomnia.rest/) to test the API.

  ## License
  This project is licensed under the MIT License. <br/>
  https://www.mit.edu/~amini/LICENSE.md

  ## Contact
  GitHub: https://github.com/jroller33 
  
