/*
  Rock Paper Scissors 🚀🔥
  
*/
const totalScore={computerScore:0,playerScore:0}


function getComputerChoice() {
  const  rpschoice =['Rock','Paper','Scissors']
  const  randomchoice=Math.floor(Math.random()*3)
  return rpschoice[randomchoice];
}

function getResult(playerChoice, computerChoice) {
  let scorea;
  let scoreb;

  if(playerChoice==computerChoice){
    scorea=0;
     scoreb=0;
    
  }
  else if(playerChoice=='Rock'&&computerChoice=='Scissors'){
    scorea=1;
    scoreb=0;
  }
  else if(playerChoice=='Scissors'&&computerChoice=='Paper'){
    scorea=1;
    scoreb=0;
  }
  else if(playerChoice=='Paper'&&computerChoice=='Rock'){
    scorea=1;
    scoreb=0;
  }
  else{
    scoreb=1;
    scorea=0;
  }
 
  
  let score=[scorea,scoreb];
  return score;
}

function showResult(score, playerChoice, computerChoice) {
 
  const resultDiv=document.getElementById('result')
   const handsDiv=document.getElementById('hands')
   const playerScoreDiv=document.getElementById('player-score')
   const opponentScoreDiv=document.getElementById('opponent-score')
  if(score[0]==0 && score[1]==1){
    resultDiv.innerText="You lose!"
  }
  else if(score[0]==0 && score[1]==0){
   resultDiv.innerText= "It's a tie! "
  }
  else{
    resultDiv.innerText='You Won!'
  }
  handsDiv.innerText=`👦${playerChoice} vs 🤖${computerChoice}`
  playerScoreDiv.innerText= `Your Score : ${totalScore.playerScore}`
  opponentScoreDiv.innerText= `Computer Score:${totalScore.computerScore}`
  
}


function onClickRPS(playerChoice) {
  
  const computerChoice=getComputerChoice()
  const score=getResult(playerChoice,computerChoice)
  totalScore['playerScore']+=score[0]
  totalScore['computerScore']+=score[1]
  console.log(totalScore)
  showResult(score,playerChoice,computerChoice)
  
}

function playGame() {
const rpsButtons=document.querySelectorAll('.rpsButton')
  
rpsButtons.forEach(rpsButton=>{
  rpsButton.onclick=()=>onClickRPS(rpsButton.value)
})
  
  const endGameButton=document.getElementById('endGameButton')
  endGameButton.onclick=()=>endGame(totalScore)
  
}


function endGame(totalScore) {
  totalScore['playerScore']=0
  totalScore['computerScore']=0
   const resultDiv=document.getElementById('result')
   const handsDiv=document.getElementById('hands')
   const playerScoreDiv=document.getElementById('player-score')
   const opponentScoreDiv=document.getElementById('opponent-score')
  
   resultDiv.innerText=" "
  
  
   handsDiv.innerText= " "
  

    playerScoreDiv.innerText=' '

    opponentScoreDiv.innerText=' '
  
}

playGame()