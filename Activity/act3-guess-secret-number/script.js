let secretNumber = 7;
let attempts = 0;
let guessedNumber;
console.log('Welcome Player to Guessing the Secret Number!');
do{
    guessedNumber = Number(prompt("What is the secret number?"));
    if(guessedNumber < secretNumber){
        console.log("Too low! Try again.");
    }
    else if(guessedNumber > secretNumber){
        console.log("Too high! Try again.")
    }
    else{
        console.log(`Congratulations! You guessed the correct number. ${secretNumber}`);
        console.log(`It took you ${attempts} attempts`)
    }
    attempts ++;
} while(guessedNumber !== secretNumber);



