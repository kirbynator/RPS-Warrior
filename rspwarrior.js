$(document).ready( function() {
var ready = true
$("#result").on("click", function(){
  $("#music").show()
});
  
   $("#scissor").on("click", function(){
    if (ready === true){
    var button = "scissors"
    $('#rock').hide()
    $('#paper').hide()
   rpsSim(button)
 }})


$("#paper").on("click", function(){
  if (ready === true){
  var button = "paper"
  $('#rock').hide()
  $('#scissor').hide()
  rpsSim(button)
}})

$("#rock").on("click", function(){
  if (ready === true){
  var button = "rock"
  $('#scissor').hide()
  $('#paper').hide()
  rpsSim(button)
}})



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
  $('#enemyHand').attr("src",'https://piskel-imgstore-b.appspot.com/img/9ce56754-3ed7-11e9-ac10-e10143188db8.gif')
  $('#enemyHand').show()}
  else if (choice2 === "rock"){
  $('#enemyHand').attr("src",'https://piskel-imgstore-b.appspot.com/img/081144ae-3ed9-11e9-bc96-e10143188db8.gif')
  $('#enemyHand').show()}
  else if (choice2 === "scissors"){
  $('#enemyHand').attr("src",'https://piskel-imgstore-b.appspot.com/img/e510a826-3ed8-11e9-be81-e10143188db8.gif')
  $('#enemyHand').show()}

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
      var audio = new Audio('doDamage.mp3');
audio.play();
      $('#enemy').attr("src",'https://piskel-imgstore-b.appspot.com/img/e4c2e43a-3ee2-11e9-99fe-ebc264e9404a.gif')
      $("#result").text("YOU WIN!");
      await sleep(1000);
      $('#enemy').hide()
      $('#rock').hide()
      $('#paper').hide()
      $('#scissor').hide()
      $('#enemyHand').hide()
      $('#hero').attr("src",'https://piskel-imgstore-b.appspot.com/img/cdb116e6-3ec6-11e9-9d4d-e10143188db8.gif')
      await sleep(2000);
      $('#enemy').show()
      $('#enemy').attr("src",'https://piskel-imgstore-b.appspot.com/img/97c26500-3ed5-11e9-beff-39c8165397db.gif')
      $('#hero').attr("src",'https://piskel-imgstore-b.appspot.com/img/1c37f157-3ecf-11e9-8c30-39c8165397db.gif')
      await sleep(750);
      $('#enemy').attr("src",'https://piskel-imgstore-b.appspot.com/img/3896d36b-3ed6-11e9-aa2f-e10143188db8.gif')
      $('#rock').show()
      $('#paper').show()
      $('#scissor').show()
      $("#result").text("FIGHT!")
      ready = true
    }
    async function tieReset(){
      $("#result").text("The result was a tie");
      await sleep(1000);
      $('#rock').show()
      $('#paper').show()
      $('#scissor').show()
      $('#enemyHand').hide()
      $("#result").text("FIGHT!")
      ready = true
    }
async function lossReset(lossTotal){
  var audio = new Audio('takeDamage.mp3');
audio.play();
  if (lossTotal == 1){
    $('#health').attr("src",'https://piskel-imgstore-b.appspot.com/img/f6e73259-3ee8-11e9-bb5f-6dc0f7016973.gif')
    $("#result").text("You lost...")
    await sleep(1000);
        $('#rock').show()
        $('#paper').show()
        $('#scissor').show()
        $('#enemyHand').hide()
        $("#result").text("FIGHT!")
        ready = true
  }
  else if (lossTotal == 2){
    $('#health').attr("src",'https://piskel-imgstore-b.appspot.com/img/7a6130b8-3ee9-11e9-86b6-6dc0f7016973.gif')
    $("#result").text("You lost...");
    await sleep(1000);
        $('#rock').show()
        $('#paper').show()
        $('#scissor').show()
        $('#enemyHand').hide()
        $("#result").text("FIGHT!")
        ready = true
  }
  else if (lossTotal == 3){
    $('#health').attr("src",'https://piskel-imgstore-b.appspot.com/img/c1838edc-3ee9-11e9-b2ef-6dc0f7016973.gif')
    $("#result").text("You lost...");
    await sleep(1000);
        $('#rock').show()
        $('#paper').show()
        $('#scissor').show()
        $('#enemyHand').hide()
        $("#result").text("FIGHT!")
        ready = true
  }
  else {
    $('#health').attr("src",'https://piskel-imgstore-b.appspot.com/img/0e443140-3eea-11e9-83ed-6dc0f7016973.gif')
    $("#result").text("You Died...   Wins:" + winTotal)
    $('#hero').hide()
    await sleep(10000);
    location.reload();
  }
 
}
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  })