const goBackBtn = document.getElementById('back');

const goBack = (e) => {
  e.preventDefault();
  console.log('404 page back button clicked');
  // built-in browser interface that allows changing the browser session history, or in this case to go back
  history.back();
};

goBackBtn.addEventListener('click', goBack);
