function toggling (selector) {

  const button = document.querySelector(selector);
  
   if (!button.classList.contains('is-toggled')) {

    turnOffPreviousButton();
    button.classList.add('is-toggled');
   }
   else {
    button.classList.remove('is-toggled');
   } 
 }


  function turnOffPreviousButton() {
  const previousButtons = document.querySelector('.is-toggled');
    if (previousButtons) {
    previousButtons.classList.remove('is-toggled');
    } 
  }
  