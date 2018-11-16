// Man against Machine! Test your Rock-Paper-Skills against the computer:

// User makes a choice
// Computer makes a random choice
// Compare function will determine who wins

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice <0.34){
    computerChoice = "rock";
}else if(computerChoice <=0.67){
    computerChoice = "paper";
}
else{
    computerChoice = "scissors";
}
var compare = function(choice1,choice2){
    if(choice1===choice2){
        return document.write("You chose " + choice1 + "<br>" + "The computer oVerLoRd chose " + choice2 +
        "<br>" + "So the result is a tie!");
        
    }
    if(choice1==="rock"){
        if(choice2==="scissors"){
            document.write("You chose " + choice1 + "<br>" + "The computer oVerLoRd chose " + choice2 +
            "<br>" + "So You WIN!");    
            // return "rock wins";
        }
        else{
        document.write("You chose " + choice1 + "<br>" + "The computer oVerLoRd chose " + choice2 +
        "<br>" + "So You LOSE SUCKER GET GOOD!");    

            // return "paper wins";
        }
    }
    if(choice1==="paper"){
        if(choice2==="rock"){
            document.write("You chose " + choice1 + "<br>" + "The computer oVerLoRd chose " + choice2 +
            "<br>" + "So You WIN!");    
    
            // return "paper wins";
        }
        else{
            document.write("You chose " + choice1 + "<br>" + "The computer oVerLoRd chose " + choice2 +
            "<br>" + "So You LOSE SUCKER GET GOOD!");        
            // return "scissors wins";
        }
    }
    if(choice1==="scissors"){
        if(choice2==="rock"){
            document.write("You chose " + choice1 + "<br>" + "The computer oVerLoRd chose " + choice2 +
            "<br>" + "So You WIN!");    

            // return "rock wins";
        }
        else{
            document.write("You chose " + choice1 + "<br>" + "The computer oVerLoRd chose " + choice2 +
            "<br>" + "So You LOSE SUCKER GET GOOD!");    
    
            // return "scissors wins";
        }
    }
};
compare(userChoice,computerChoice);