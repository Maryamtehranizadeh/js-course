

let score = {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

if (localStorage.getItem('score')) {
  score = JSON.parse(localStorage.getItem('score'));
}


let playerMove = '';

let result = '';

function playGame (playerMove) {
  const computerMove = pickComputerMove();

  if (playerMove ==='scissors') {
    if (computerMove==='Rock') {
      result ='You lose!';

    } else if (computerMove==='Paper') {
      result ='You win!';

    } else if (computerMove==='Scissors') {
      result ='Tie!';
    }
  } else if (playerMove==='paper') {
    if (computerMove==='Rock') {
      result='You win!'
    }

    else if (computerMove==='Paper') {
      result='Tie!'
    }

    else if (computerMove==='Scissors') {
      result='You lose!'
    }
  } else if (playerMove ==='rock') {
    if (computerMove==='Rock') {
      result='Tie!'
    }

    else if (computerMove==='Paper') {
      result='You lose!'
    }

    else if (computerMove==='Scissors') {
      result='You win!'
    }
  }

  if (result ==='You win!') {
      score.wins += 1;
      
  } else if (result === 'You lose!') {
      score.losses +=1;
      
  } else if (result === 'Tie!') {
      score.ties +=1;
  }
  
  localStorage.setItem('score', JSON.stringify(score));

  updateMovesElement();
  updateResultElement();
  updateScoreElement();


  function updateMovesElement() {
  document.querySelector('.js-moves').innerHTML = `You
 <img src="images/${playerMove}-emoji.png" class="move-icon"> 
 <img src="images/${computerMove}-emoji.png" class="move-icon"> 
Computer `;
  }
}  


function updateResultElement() {
  document.querySelector('.js-result').innerHTML = result;
  }


function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

  console.log(score);
  }




function pickComputerMove() {
  let randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {
  computerMove = 'Rock';
  

  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
  computerMove ='Paper';
  

  } else if (randomNumber >= 2/3 && randomNumber < 1) {
  computerMove = 'Scissors'; 
  } 

  return computerMove;
}
