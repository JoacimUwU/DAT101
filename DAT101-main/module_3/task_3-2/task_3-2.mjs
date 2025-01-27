"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
// Generate the counting up line and append to the output
let countUp = "";
for (let i = 1; i <= 10; i++) {
    countUp += i + " ";
}
// Display the counting up line using printOut
printOut(`Counting up: ${countUp.trim()}`);

// Generate the counting down line and append to the output
let countDown = "";
for (let i = 10; i >= 1; i--) {
    countDown += i + " ";
}
// Display the counting down line using printOut
printOut(`Counting down: ${countDown.trim()}`);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
// Guessing Game
// Declare a number for the computer to guess
let targetGuess = 45;

// Declare a variable for the computer to store its guess
let computerGuess;

// Variable for the amount of guesses
let amountOfGuesses = 0;

// While loop, this is where the computer will make guesses
// This goes on until it has guessed right
while (computerGuess !== targetGuess) {
  // We add +1 to amount of guesses every time we make a guess
  amountOfGuesses++;
  // Generate a random number between 1 and 60
  computerGuess = Math.floor((Math.random() * 60) + 1);
}

// Display the results using printOut
printOut(`Target Number: ${targetGuess}`);
printOut(`Computer guessed: ${computerGuess} after ${amountOfGuesses} attempts.`);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
// Guessing Game Level Up!

// Variable for the computer to guess
let targetGuessPartTwo = 458;

// Variable to store the amount of guesses
let amountOfGuessesPartTwo = 0;

// Declare a variable to store computers guess.
let computerGuessPartTwo;

// Start timer before entering the while loop
let startTime = Date.now();

// While loop, here the computer will make its guesses
// As long as it hasn't guessed correctly, it will continue
// with the logic inside of it
while (computerGuessPartTwo !== targetGuessPartTwo) {
  // Increment guesses
  amountOfGuessesPartTwo++;

  // Generate a random number between 1 and 1,000,000
  computerGuessPartTwo = Math.floor((Math.random() * 1000000) + 1);
}

// Stop the timer
let endTime = Date.now();

// Compute how long it took
let timeTaken = endTime - startTime;

// Display the results using printOut
printOut(`Target Number: ${targetGuessPartTwo}`);
printOut(`Computer guessed: ${computerGuessPartTwo}`);
printOut(`Attempts: ${amountOfGuessesPartTwo}, Time Taken: ${timeTaken} ms`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
// Prime Number Hunter
// Objective: Use a combination of while and for loops to print out all prime numbers greater than one and less than 200

let primeNumbers = [];

// Main for loop
// Here we will loop through every number from 2 to 199
for (let i = 2; i <= 199; i++) {
  // Assume the number is prime initially
  let isPrime = true;
  // Nested for loop to check divisors
  for (let x = 2; x < i; x++) {
    if (i % x === 0) {
      isPrime = false; // Number is not prime
      break;
    }
  }
  // If the number is prime, add it to the list
  if (isPrime) {
    primeNumbers.push(i);
  }
}

// Display the list of prime numbers using printOut
printOut(`Prime Numbers (2 to 199): ${primeNumbers.join(", ")}`);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
// Nested Loops & Patterns
// Objective is to use nested loops to print a grid with 9 columns and 7 rows,
// where each cell contains text in the format KxRy, where x is the column number and y is the row number

for (let row = 1; row <= 7; row++) {
  let rowText = "";
  for (let col = 1; col <= 9; col++) {
    rowText += `K${col}R${row} `;
  }
  // Display each row using printOut
  printOut(rowText.trim());
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
// Grade Simulator
// Objective: Simulate 5 students' grade points and assign letter grades

function getLetterGrade(score) {
  let percentage = (score / 236) * 100;
  if (percentage >= 89) return 'A';
  if (percentage >= 77) return 'B';
  if (percentage >= 65) return 'C';
  if (percentage >= 53) return 'D';
  if (percentage >= 41) return 'E';
  return 'F';
}

for (let i = 1; i <= 5; i++) {
  let randomGrade = Math.floor(Math.random() * 236) + 1;
  let letterGrade = getLetterGrade(randomGrade);
  // Display each student's grade using printOut
  printOut(`Student ${i}: Score = ${randomGrade}, Grade = ${letterGrade}`);
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
// Dice Rolling Extravaganza
// Objective: Simulate 6 dice and print how many "throws" it takes to get :
// - 1 2 3 4 5 6 (Full straight)
// 3 pairs
// 2 of a kind and 4 of a kind (tower)
// All the same (Yahtzee!)

let diceResults;
let counter;
do {
  diceResults = Array.from({ length: 6 }, () => Math.floor(Math.random() * 6) + 1);
  counter = Array(7).fill(0);
  diceResults.forEach(dice => counter[dice]++);
} while (!counter.every((count, index) => index === 0 || count === 1));
printOut("Full Straight Achieved!");

let pairCount = counter.filter(count => count === 2).length;
if (pairCount === 3) {
  printOut("3 Pairs Achieved!");
}

let twoOfAKind = counter.some(count => count === 2);
let fourOfAKind = counter.some(count => count === 4);
if (twoOfAKind && fourOfAKind) {
  printOut("Tower Achieved!");
}

if (counter.some(count => count === 6)) {
  printOut("Yahtzee Achieved!");
}
printOut(newLine);
