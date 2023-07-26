let calculation = localStorage.getItem('calculation') || '';
      displayUpdate();


      function updateCalculation(number) {

        calculation += number;
        
        displayUpdate();

        localStorage.setItem('calculation' , calculation)
       
      }

      function displayUpdate () {

        document.querySelector('.js-update-calculation').innerHTML = calculation;

      }
