//Note to Sam: I changed up the original story from the Code Academy one.

// Checking if the user is ready to play!
confirm("Are you ready to play?");
var age = prompt("What's your age");

if (age > 13) {
    console.log("You're probably still under 18, but let's go");
}
else {
     console.log("Unlucky man, but you can still play");
}

console.log("You are walking down the street, and you hear this from behind: 'Who wants to race me?'");

console.log("You turn around and Usain Bolt stops and says, 'Do you want to race me?'");

var userAnswer = prompt("Do you want to race Usain Bolt?");

if(userAnswer === "yes") {
    console.log("You run as fast as you can but he already won the race. Unlucky.");
}
else {
    console.log("You decide to race him anyway and you lose.");
}

console.log("After that embarassing display, you go home to your couch, turn on Netflix and watch Game of Thrones.")

var feedback = prompt("Rate this game from 1 to 10");

if(feedback > 8) {
    console.log("Thank you! I'll hope to make more games in the future.");
}
else {
    console.log("Appreciate the feedback, will learn a lot more in the future.");
}