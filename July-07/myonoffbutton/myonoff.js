function toggling (numb) {

  const toggled = document.querySelector(`.js-button${numb}`);
  
   if (!toggled.classList.contains('is-toggled')) {
   toggled.classList.add('is-toggled');
   }
   else {
   toggled.classList.remove('is-toggled');
   } 
 }