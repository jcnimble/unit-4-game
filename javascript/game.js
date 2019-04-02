//Global Variables
//-------------------------------------------------------------------------
//Arrays and variables for holding data
var randomNum = 0;
var crystalVal1 = 0;
var crystalVal2 = 0;
var crystalVal3 = 0;
var crystalVal4 = 0;

var uGuess = 0;


//Game counters
var winCount = 0;
var lossCount = 0;

//Functions (Reusable blocks of code that I will call upon when needed)
//-------------------------------------------------------------------------
function start() {
    randomNum = [Math.floor(Math.random() * 102) + 19];
    crystalVal1 = [Math.floor(Math.random() * 12) + 1];
    crystalVal2 = [Math.floor(Math.random() * 12) + 1];
    crystalVal3 = [Math.floor(Math.random() * 12) + 1];
    crystalVal4 = [Math.floor(Math.random() * 12) + 1];
    $("#given-number").text(randomNum);
    $("#guess-number").text(uGuess);
    
    console.log("Is randonNum " + randomNum);
    console.log("Is crystalVal1 " + crystalVal1);
    console.log("Is crystalVal2 " + crystalVal2);
    console.log("Is crystalVal3 " + crystalVal3);
    console.log("Is crystalVal4 " + crystalVal4);
}



$("#crystal-img-1").on("click", function () {
    uGuess = parseInt(crystalVal1) + parseInt(uGuess)
    console.log(uGuess);
    $("#guess-number").text(uGuess);
    runTotal(uGuess);

});
$("#crystal-img-2").on("click", function () {
    uGuess = parseInt(crystalVal2) + parseInt(uGuess)
    console.log(uGuess);
    $("#guess-number").text(uGuess);
    runTotal(uGuess);
});
$("#crystal-img-3").on("click", function () {
    uGuess = parseInt(crystalVal3) + parseInt(uGuess)
    console.log(uGuess);
    $("#guess-number").text(uGuess);
    runTotal(uGuess);
});
$("#crystal-img-4").on("click", function () {
    uGuess = parseInt(crystalVal4) + parseInt(uGuess)
    console.log(uGuess);
    $("#guess-number").text(uGuess);
    runTotal(uGuess);
});

function runTotal(uGuess) {

    if (uGuess == randomNum) {
        winCount++;
        $("#win-counter").text(winCount);
        console.log(winCount);
        endRound();
    }

    else if (uGuess > randomNum) {
        lossCount++;
        $("#loss-counter").text(lossCount);
        console.log(lossCount);
        endRound();
    }
}

function endRound() {
    randomNum = 0;
    crystalVal1 = 0;
    crystalVal2 = 0;
    crystalVal3 = 0;
    crystalVal4 = 0;
    uGuess = 0;
    start();

}

start();