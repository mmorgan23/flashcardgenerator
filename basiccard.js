var BasicCard = require("./files/basiccard");

var card = require("./basic.json");

var inquirer = require("inquirer");

initGame();

function initGame() {

  var currentCard;
  var cardArray = [];
  var score = 0;
  var index = 0;

  for (var i = 0; i < card.length; i++) {
    currentCard = new BasicCard(cardData[i].front, card[i].back);
    cardArray.push(currentCard);
  }

    playRound(score, cardArray, index);
}

function endGame(score) {
  console.log("Game Over!");
  console.log("Your score is:", score);
  inquirer.prompt([{
    type: "input",
    name: "text",
    message: "Play again?"
  }]).then(function(answer) {
 
    if (answer.text.charAt(0).toLowerCase() === "y") {
      initGame();
    } 
    else {
      console.log("Goodbye!");
    }
  });
}
