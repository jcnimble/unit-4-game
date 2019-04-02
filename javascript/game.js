//Global Variables
//-------------------------------------------------------------------------
//Arrays and variables for holding data
var randomNum = [Math.floor(Math.random() * 102) + 19];
var crystalVal1 = [Math.floor(Math.random() * 12) + 1];
var crystalVal2 = [Math.floor(Math.random() * 12) + 1];
var crystalVal3 = [Math.floor(Math.random() * 12) + 1];
var crystalVal4 = [Math.floor(Math.random() * 12) + 1];

console.log("Is randonNum " + randomNum);
console.log("Is crystalVal1 " + crystalVal1);
console.log("Is crystalVal2 " + crystalVal2);
console.log("Is crystalVal3 " + crystalVal3);
console.log("Is crystalVal4 " + crystalVal4);


var uGuess = 0;


//Game counters
var winCount = 0;
var lossCount = 0;

//Functions (Reusable blocks of code that I will call upon when needed)
//-------------------------------------------------------------------------

$("#given-number").text(randomNum);


$("#crystal-img-1").on("click", function () {
    uGuess = parseInt(crystalVal1) + parseInt(uGuess)
    console.log(uGuess);
    $("#guess-number").text(uGuess);
});
$("#crystal-img-2").on("click", function () {
    uGuess = parseInt(crystalVal2) + parseInt(uGuess)
    console.log(uGuess);
    $("#guess-number").text(uGuess);
});
$("#crystal-img-3").on("click", function () {
    uGuess = parseInt(crystalVal3) + parseInt(uGuess)
    console.log(uGuess);
    $("#guess-number").text(uGuess);
});
$("#crystal-img-4").on("click", function () {
    uGuess = parseInt(crystalVal4) + parseInt(uGuess)
    console.log(uGuess);
    $("#guess-number").text(uGuess);
});

function runTotal(uGuess) {
    if (uGuess === randomNum) {
        winCount++;
    }
    else if (uGuess > randomNum) {
        lossCount++;
    }
    console.log(winCount);
    console.log(lossCount);
}





//function runTotal() {}


//function endRound() {}

//Main Process
//-------------------------------------------------------------------------


