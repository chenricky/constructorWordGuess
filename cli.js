var inquirer = require("inquirer");
var words = ["toyota", "bmw", "benz", "mazda", "nissan"]
var newWord = [];
var computerChoice = words[Math.floor(Math.random() * words.length)];
console.log("computer choosen word is: " + computerChoice);
console.log("computer choose word length is: " + computerChoice.length);
var computerChoosenHint = "x".repeat(computerChoice.length);
var hintArray = [];
hintArray = Array(computerChoice.length).fill("x");
console.log("hint array is: " + hintArray);
console.log("this word looks like: " + computerChoosenHint);
//for (var i=0; i < words.length; i++) {
//    console.log(words[i]);
//    for (var j=0; j<words[i].length; j++) {
        //newWord.push(words[i][j]);
//        console.log(words[i][j]);
        //console.log(newWord);
//    };
//};


inquirer.prompt([
    {
      name: "guess",
      message: "What is your guess?"
    }
  ]).then(function(answer){
    console.log("you guessed is " + answer.guess);
    var letterGuessPosition = computerChoice.indexOf(answer.guess);
            console.log("user guessed letter position is: " + letterGuessPosition);
  });