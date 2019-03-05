var ready = true
if (ready === true){
  
  document.getElementById("scissor").onclick = function(){
    if (ready === true){
    var button = "scissors"
    document.getElementById('rock').style.opacity= "0.0"
    document.getElementById('paper').style.opacity= "0.0"
  rpsSim(button)
}}


document.getElementById("paper").onclick = function(){
  if (ready === true){
  var button = "paper"
  document.getElementById('rock').style.opacity= "0.0"
  document.getElementById('scissor').style.opacity= "0.0"
  rpsSim(button)
}}

document.getElementById("rock").onclick = function(){
  if (ready === true){
  var button = "rock"
  document.getElementById('scissor').style.opacity= "0.0"
  document.getElementById('paper').style.opacity= "0.0"
  rpsSim(button)
}}
}


        var winTotal = 0
        var lossTotal = 0
        var ties = 0

      function rpsSim(button){
        ready = false
var computerChoice = Math.random();
var userChoice = button
var result = "Error"
if (computerChoice <0.34){
    computerChoice = "rock";
}
else if(computerChoice <=0.67){
    computerChoice = "paper";
}
else{
    computerChoice = "scissors";
}
var compare = function(choice1,choice2){
  if (choice2 === "paper"){
  document.getElementById('enemyHand').src='https://piskel-imgstore-b.appspot.com/img/9ce56754-3ed7-11e9-ac10-e10143188db8.gif'
          document.getElementById('enemyHand').style.opacity= "1.0"}
  else if (choice2 === "rock"){
  document.getElementById('enemyHand').src='https://piskel-imgstore-b.appspot.com/img/081144ae-3ed9-11e9-bc96-e10143188db8.gif'
  document.getElementById('enemyHand').style.opacity= "1.0"}
  else if (choice2 === "scissors"){
  document.getElementById('enemyHand').src='https://piskel-imgstore-b.appspot.com/img/e510a826-3ed8-11e9-be81-e10143188db8.gif'
          document.getElementById('enemyHand').style.opacity= "1.0"}

    if(choice1==="rock"){
        if(choice2==="scissors"){
          winTotal = winTotal + 1;
          winReset();
        }
        else if(choice2==="paper"){
          lossTotal = lossTotal + 1;
          lossReset(lossTotal);
        }
    }
    if(choice1==="paper"){
        if(choice2==="rock"){
          winTotal = winTotal + 1;
          winReset();
        }
        else if(choice2==="scissors"){
          lossTotal = lossTotal + 1;
          lossReset(lossTotal);
        }
    }
    if(choice1==="scissors"){
        if(choice2==="rock"){
          lossTotal = lossTotal + 1;
          lossReset(lossTotal);
        }
        else if(choice2==="paper"){
          winTotal = winTotal + 1;
          winReset();
        }
    }
    if(choice1===choice2){
        tieReset();
    }
};
compare(userChoice,computerChoice);
}
    async function winReset(){
      document.getElementById('enemy').src='https://piskel-imgstore-b.appspot.com/img/e4c2e43a-3ee2-11e9-99fe-ebc264e9404a.gif'
      document.getElementById("result").innerHTML = "YOU WIN";
      await sleep(800);
      document.getElementById('enemy').style.opacity= "0.0"
      document.getElementById('rock').style.opacity= "0.0"
      document.getElementById('paper').style.opacity= "0.0"
      document.getElementById('scissor').style.opacity= "0.0"
      document.getElementById('enemyHand').style.opacity= "0.0"
      document.getElementById('hero').src='https://piskel-imgstore-b.appspot.com/img/cdb116e6-3ec6-11e9-9d4d-e10143188db8.gif'
      await sleep(2000);
      document.getElementById('enemy').style.opacity= "1.0"
      document.getElementById('enemy').src='https://piskel-imgstore-b.appspot.com/img/97c26500-3ed5-11e9-beff-39c8165397db.gif'
      document.getElementById('hero').src='https://piskel-imgstore-b.appspot.com/img/1c37f157-3ecf-11e9-8c30-39c8165397db.gif'
      await sleep(800);
      document.getElementById('enemy').src='https://piskel-imgstore-b.appspot.com/img/3896d36b-3ed6-11e9-aa2f-e10143188db8.gif'
      document.getElementById('rock').style.opacity= "1.0"
      document.getElementById('paper').style.opacity= "1.0"
      document.getElementById('scissor').style.opacity= "1.0"
      document.getElementById("result").innerHTML = "FIGHT!"
      ready = true
    }
    async function tieReset(){
      document.getElementById("result").innerHTML = "The result was a tie";
      await sleep(1000);
      document.getElementById('rock').style.opacity= "1.0"
      document.getElementById('paper').style.opacity= "1.0"
      document.getElementById('scissor').style.opacity= "1.0"
      document.getElementById('enemyHand').style.opacity= "0.0"
      document.getElementById("result").innerHTML = "FIGHT!"
      ready = true
    }
async function lossReset(lossTotal){
  if (lossTotal == 1){
    document.getElementById('health').src='https://piskel-imgstore-b.appspot.com/img/f6e73259-3ee8-11e9-bb5f-6dc0f7016973.gif'
    document.getElementById("result").innerHTML = "You lost...";
    await sleep(1000);
        document.getElementById('rock').style.opacity= "1.0"
        document.getElementById('paper').style.opacity= "1.0"
        document.getElementById('scissor').style.opacity= "1.0"
        document.getElementById('enemyHand').style.opacity= "0.0"
        document.getElementById("result").innerHTML = "FIGHT!"
        ready = true
  }
  else if (lossTotal == 2){
    document.getElementById('health').src='https://piskel-imgstore-b.appspot.com/img/7a6130b8-3ee9-11e9-86b6-6dc0f7016973.gif'
    document.getElementById("result").innerHTML = "You lost...";
    await sleep(1000);
        document.getElementById('rock').style.opacity= "1.0"
        document.getElementById('paper').style.opacity= "1.0"
        document.getElementById('scissor').style.opacity= "1.0"
        document.getElementById('enemyHand').style.opacity= "0.0"
        document.getElementById("result").innerHTML = "FIGHT!"
        ready = true
  }
  else if (lossTotal == 3){
    document.getElementById('health').src='https://piskel-imgstore-b.appspot.com/img/c1838edc-3ee9-11e9-b2ef-6dc0f7016973.gif'
    document.getElementById("result").innerHTML = "You lost...";
    await sleep(1000);
        document.getElementById('rock').style.opacity= "1.0"
        document.getElementById('paper').style.opacity= "1.0"
        document.getElementById('scissor').style.opacity= "1.0"
        document.getElementById('enemyHand').style.opacity= "0.0"
        document.getElementById("result").innerHTML = "FIGHT!"
        ready = true
  }
  else {
    document.getElementById('health').src='https://piskel-imgstore-b.appspot.com/img/0e443140-3eea-11e9-83ed-6dc0f7016973.gif'
    document.getElementById("result").innerHTML = "You Died...   Wins:" + winTotal ;
    document.getElementById('hero').style.opacity= "0.0"
  }
 
}
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    