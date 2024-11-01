"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
// Objective: Print out two lines
// One should print from 1-10,
// The other should print from 10-1

// Initialize an empty string to store the numbers(1-10)
let oneToTen = "";

// Initialize an empty string to store the numbers(10-1)
let tenToOne = "";

for (i = 1; i <= 10; i++)
{
    oneToTen += i;
    if (i < 10) oneToTen += ",";
}
for (i = 10; i >= 10; i--)
{
    tenToOne += i;
    // 
    if (i > 1)tenToOne += ",";
}

printOut(oneToTen);
printOut(tenToOne);
printOut(newLine);




printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
// Guessing Game
// Declare a number for the computer to guess
let targetGuess = 45;

// Declare a variable for the computer to store its guess
let computerGuess = 0;

// Variable for the amount of guesses
let amountOfGuesses = 0;


// While loop, this is where the computer will make guesses
// This goes on until it has guessed right
while (computerGuess !== targetGuess)
{
  // We add +1 to amount of guesses every time we make a guess
  amountOfGuesses ++;
  //REMEMBERMATHFLOOR
  // We use math random to generate a random number
  // Then we update the computerGuess variable
  computerGuess = Math.floor((Math.random() * 60) + 1);

  // The loop ends, anb the condition is checked again,
  // now if the new random value is equal to targetGuess, we will exit the loop
}

console.log(amountOfGuesses)
console.log(computerGuess)
printOut("Replace this with you answer!");
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
while (computerGuessPartTwo !== targetGuessPartTwo)
{

  // Increment guesses
  amountOfGuessesPartTwo ++;

  //Add a random to the computer guess variable
  computerGuessPartTwo = Math.floor((Math.random() * 1000000) +1);

  // This logic will continue on until the computer manages to find the number
}

// Stop the timer
let endTime = Date.now();

// Compute how long it took
let timeTaken = endTime - startTime;

//Print out results

printOut("Tallet er " + computerGuessPartTwo)
printOut("Datamaskinen brukte " + amountOfGuessesPartTwo + "runder")
printOut("Og det tok" + timeTaken + "millisek.")
printOut(newLine)
//console.log("Part 3\n"+ computerGuessPartTwo + "\n" + amountOfGuessesPartTwo + "\n" +timeTaken)

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
//Part 4
// Objective: Use a combination of while and for loops to print out all prime numbers greater than one and less than 200

// Create an empty array to store all prime numbers we find
let primeNumbers = [];

// Boolean value for checking if a number is a prime
// We assume its a prime number before doing any division 
let isPrime = true;

// Main for loop
// Here we will loop through every number from 2 to 199
for (let i = 2; i <= 199;i++)
{
  // Inside the main for loop is where we have the logic for
  // if a number is a prime or not


  // We are checking every number from 2 to 199,
  // so we will be using this variable to store this number
  let currentNumber = i;

  isPrime = true;

  // Nested for loop
  // This for loop will help us check if the number is a prime number or not
  for (let x = 2; x < currentNumber; x++)
    // it is a prime number
    // A boolean value, set to true, because we want to start by assuming its a prime number
  {
    if (currentNumber % x === 0)
    {
      isPrime = false;
      break;
    }
  }

  // If the number is a prime number
  // Add it to the array
  if (isPrime)
  {
    primeNumbers.push(i);
  }
}

printOut("Prime numbers between 2 and 199: ")
printOut(primeNumbers.join(", "));
printOut(newLine)

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

// Part 5
// Objective is to use nested loops to print a grid with 9 columns and 7 rows,
// where each cell contains text in the format KxRy, where x is the column number and y is the row number

//Row = X
//column = Y
for (let row = 1; row <= 7; row++)
    // Outer for loop
    // This outer loop iterates through each row, from 1 to 7.
    {
        // At the start of each row we create an empty string rowText
      let rowText = '';
    
    
      // This inner loop goes through each column , from 1 to 9, for the current row
      // Inside the loop, the col represents the column number 
      for (let col = 1; col <= 9; col++)
      {

        // rowText
        // For each cell in the current row, we create a string like "K1R1, K2R1"
        // We concatenate this cell to rowText
        // padStart explanation //
        // Makes each cell 5 characters wide and aligned to the right
        rowText += `K${col}R${row}`.padStart(5);

        if (col < 9)
        {
            rowText += " ";
        }
        
      }

      // Print the row after adding all columns  
      printOut(rowText);
    }
    printOut(rowText.trim());
    printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
//Part 6
//Objective: Simulate 5 students grade points
// Based on these points, the students will be graded
// Bonus Objective: Sort the students based on grade
function getLetterGrade(score)
{
  let percentage = (score/236) * 100;

  if (percentage >= 89)
  {
    return 'A';
  }
  else if (percentage >= 77)
  {
    return 'B';
  }
  else if (percentage >= 65)
  {
    return 'C';
  }
  else if (percentage >= 53)
  {
    return 'D';
  }
  else if(percentage >= 41)
  {
    return 'E';
  }
  else
  {
    return 'F';
  }
}


for (let i = 1; i <= 5; i++)
{
  let randomGrade = Math.floor(Math.random()*236)+1;
  let letterGrade = getLetterGrade(randomGrade)

  console.log(`Student ${i}: Score = ${randomGrade}, Grade = ${letterGrade}`);

}
printOut("Replace this with you answer!");
printOut(newLine);


printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
//PArt 7 Yahtzee!

// Objective: Simulate 6 dice and print how many "throws" it takes to get :
// - 1 2 3 4 5 6 (Full straight)
// 3 pairs
// 2 of a kind and 4 of a kind (tower)
// All the same (Yahtzee!)

// Simulate dice throw

let dice1 = Math.floor(Math.random()*6)+1;
let dice2 = Math.floor(Math.random()*6)+1;
let dice3 = Math.floor(Math.random()*6)+1;
let dice4 = Math.floor(Math.random()*6)+1;
let dice5 = Math.floor(Math.random()*6)+1;
let dice6 = Math.floor(Math.random()*6)+1;

let dices = [dice1,dice2,dice3,dice4,dice5,dice6];

//Counter
//
let counter = [0,0,0,0,0,0,0]


// For loop used for counting the number of instances
// a number occurs
for (let i = 0; i < 6; i++)
{
  // Inside the loop
  // In every iteration, we access counter, by using the dices array
  // We pick the dice based on the "i" value in the for loop
  // Meaning we will check all dices

  // Example:
  // We enter the for loop, i = 0,
  // dices[0] becomes its value, IE if the dice was rolled as 5,
  // we access that position in the counter array and increment it by +1
  counter[dices[i]]++;
}

let fullStraight = true;

for (let i = 1; i <= 6; i++)
{
  if (counter[i] !== 1)
  {
    fullStraight = false;
    break;
  }

}



let pair = 0;

for (let i = i; i <= 6; i++)
{
  if (counter[i] === 2)
  {
    pair++
  }

}
  if (pair===3)
  {
    console.log(pair);
  }

  let two = false;
  let four = false;
  for (let i = 1; i <= 6; i++)
  {
    if (counter[i] === 2)
    {
      two = true;
    }
    if (counter[i] === 4)
    {
      four = true;
    }
  }

  if (two && four)
  {
    console.log("Tower")
  }


  for (let i = 1; i <= 6; i++)
  {
    if (counter[i] === 6)
    {
      console.log("Yahtzee!");
      break;
    }
  }
printOut("Replace this with you answer!");
printOut(newLine);


