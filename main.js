//Part 1
var userChoice;
var randomNumber;
var computerChoice;

userChoice = prompt("heads or tails");
randomNumber = Math.round(Math.random());

if (randomNumber === 0) {
    computerChoice = "heads";
} else {
    computerChoice = "tails";
}

if (userChoice === computerChoice) {
    alert("You guessed right! The coin flip landed on " + userChoice);
} else {
    alert("Sorry, the coin flip landed on " + computerChoice);
}

/////////////////////////////////////////////////////////////////////////////////
//Part 2
var birthYear;
var currentYear = new Date().getFullYear();

birthYear = prompt("What year were you born in?");

if ((currentYear - birthYear) > 21) {
    alert("You are old enough to drink in the US");
} else if ((currentYear - birthYear) == 21) {
    alert("You are old enough to drink in the US...barely");
} else {
    alert("Sorry, you are not old enough to drink in the US");
}

