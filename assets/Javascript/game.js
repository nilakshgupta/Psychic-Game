 var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesUsed = []; 
 
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
        var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; 
        guessesUsed.push(userGuess); 
        if (userGuess === computerGuess) {
            wins++;
            alert("You Won!");
            guessesLeft = 9; 
            guessesUsed.length = 0; 
        }
        else if (guessesLeft === 1){
            losses++;
            alert("You lost, try again!");
            guessesLeft = 9;
            guessesUsed.length = 0;
        }
        else if (userGuess != computerGuess){
            guessesLeft--; 
        }  
           
        var html = "<h1>The Psychic Game</h1>" + 
        "<p>Guess what letter I'm thinking of</p>" +
        "<p>Total Wins: " + 
        wins + 
        "</p>" +
        "<p>Total Losses: " + 
        losses + 
        "</p>" +
        "<p>Guesses Left: " + 
        guessesLeft + 
        "</p>" +
        "<p>Your Guesses so far: " +
        guessesUsed +
        "</p>"
        ;
        
        document.querySelector('.game').innerHTML = html;
    }