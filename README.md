  # UI/UX Tips
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  ## Description
  This app is deployed on Heroku. It doesn't have much of a frontend, but there's a lot going on server-side (relatively). It lets you see UI/UX tips
  that other people have written, and you can also save your own. All tips are saved in JSON objects in '/db/' because we haven't learned about databases yet. This is my first semi-full-stack app that's deployed.

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
  
   Please note that these tips are not moderated, and anyone online can write anything they want on this app. The only way I can remove something that's been saved (at least for now), is by manually clearing the JSON objects in 'db/' in my local repo, and pushing those empty JSON objects back to Heroku so that they can be reused.

  ## Contribution
  You can fork the repo at https://github.com/jroller33/UI-UX-Tips
  
  ## Tests
  Not a big fan of TDD, so there's no tests. 

  ## License
  This project is licensed under the MIT License. <br/>
  https://www.mit.edu/~amini/LICENSE.md

  ## Contact
  GitHub: https://github.com/jroller33 
  
