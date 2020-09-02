function rpsGame(yourChoice){
    var humanChoice, botChoice;
    // console.log(yourChoice);
    humanChoice=yourChoice.id;
    // console.log(humanChoice);

    botChoice=randomChoice(randomNum());
    console.log(botChoice);

    results = decideWinner(humanChoice,botChoice);
    console.log(results);

    message = finalResults(results);
    console.log(message);

    output = finalOutput(humanChoice, botChoice, message);

}

function randomNum(){
    return Math.floor(Math.random() * 3);
}

function randomChoice(num){
    return ["rock","paper","scissors"][num];
}

function decideWinner(yourChoice,computerChoice){
    var allPossibleWays = {
        "rock":{"scissors":1, "rock":0.5, "paper":0},
        "paper":{"rock":1, "paper":0.5, "scissors":0},
        "scissors":{"paper":1, "scissors":0.5, "rock":0},
    };
    
    var yourScore = allPossibleWays[yourChoice][computerChoice];
    var computerScore = allPossibleWays[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalResults([yourScore, computerScore]){
    if(yourScore===0){
        return {"message":"You Lost!", "color":"Red"};
    } else if(yourScore===0.5){
        return {"message":"You Tied!", "color":"Yellow"};
    } else{
        return {"message":"You Won!", "color":"Green"};
    }

}

function finalOutput(humanImageChoice, botImageChoice, finalResults){
    var allImages = {
        "rock":document.getElementById("rock").src,
        "paper":document.getElementById("paper").src,
        "scissors":document.getElementById("scissors").src
    };

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();


    var humanChoiceDiv = document.createElement("div");
    var botChoiceDiv = document.createElement("div");
    var messageDiv = document.createElement("div");

    humanChoiceDiv.innerHTML = "<img src='" + allImages[humanImageChoice] + "' height='150' width='150' style='box-shadow:0px 0px 30px blue'>";

    messageDiv.innerHTML= "<h1 style='color:" +finalResults.color+ "; font-size:60px;'>"+finalResults.message+"</h1>"

    botChoiceDiv.innerHTML = "<img src='" + allImages[botImageChoice] + "' height='150' width='150' style='box-shadow:0px 0px 30px red'>";
    

    document.getElementById("final-result-div").appendChild(humanChoiceDiv);
    document.getElementById("final-result-div").appendChild(messageDiv)
    document.getElementById("final-result-div").appendChild(botChoiceDiv);

}