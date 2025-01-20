"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
// Define the wake-up time
let wakeUpTime = 7; // Change this value to 6, 7, or 8 to test

// Get the HTML element to display the result
const resultElement = document.getElementById('result');

// If-else if-else statement to check the wake-up time
if (wakeUpTime === 7) {
    resultElement.innerText = "If I wake up at exactly 7 o'clock, I can take the bus to school.";
} else if (wakeUpTime === 8) {
    resultElement.innerText = "If I wake up exactly at 8 o'clock, I can take the train to school.";
} else {
    resultElement.innerText = "Otherwise, I have to take the car to school.";
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Define the integer variable
let number = 0; // Change this value to test different cases (e.g., -3, 0, 7)

// Get the HTML element to display the result
const resultElement = document.getElementById('result');

// If-else if-else statement to check whether the number is positive, negative, or zero
if (number > 0) {
    resultElement.innerText = "Positive";
} else if (number === 0) {
    resultElement.innerText = "Zero";
} else {
    resultElement.innerText = "Negative";
}
printOut(newLine);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Simulate an uploaded image size (random integer between 1 and 8)
let imageSize = Math.floor(Math.random() * 8) + 1;

// Get the HTML element to display the output
const output = document.getElementById('txtOut');

// Check the image size and print the appropriate message
if (imageSize >= 4 && imageSize < 6) {
    output.innerText = `Image size: ${imageSize}MP. Thank you!`;
} else if (imageSize >= 6) {
    output.innerText = `Image size: ${imageSize}MP. The image is too large.`;
} else {
    output.innerText = `Image size: ${imageSize}MP. The image is too small.`;
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
// Objective: Create a function that takes FOUR parameters and returns a result.
// Parameter one: A text string
// Parameter two: Value for the maximum size
// Parameter three: Text character 
// Parameter four: Consecutive insertion of characters (boolean value)
// Take parameter one, if its smaller than the maximum size(parameter two), make it larger with the specified character
// Either before or after, using the given boolean value
// Have the function return the new string and print it out

 function textEditor (text, maxSize, char, insertion)
 {

  // Parameter explanation //

  // text: The string we want to modify
  // maxSize: The target length for text
  // char: The character we'll add to either the start or the end of text to extend it. 
  // insertion: A boolean that declares wether to add char at the start(true) or end(false) of text


  // Purpose: Check if text is shorter than maxSize and if insertion is true
  // (which means we'll be adding char at the start)
  if (text.length < maxSize && insertion === true)
    {
      // Create a placeholder variable to hold the amount chars,
      // until we have reached the desired amount
      let placeholder = "";
      // As long as the length of text is less than the maxSize, keep running the loop. 
      // We keep adding chars to the placeholder and adding the same length to the original text length
      // We do this every loop, until the length has reached it's desired length
      while (text.length + placeholder.length < maxSize)
      {
        placeholder += char;
      }

      // Add the chars at the start
      text = placeholder + text;

    } 
    // Purpose: Check if text is shorter than maxSize and if insertion is false
    // (which means we'll be adding char at the end)
    else if(text.length < maxSize && insertion === false)
    {
      // Create a placeholder variable to hold the amount chars,
      // until we have reached the desired amount
      let placeholder = "";
      // As long as the length of text is less than the maxSize, keep running the loop. 
      // We keep adding chars to the placeholder and adding the same length to the original text length
      // We do this every loop, until the length has reached it's desired length
      while (text.length + placeholder.length < maxSize)
      {
        placeholder += char;
      }

      // Add the chars at the end
      text = text + placeholder;
    }
    // If the length is already over the maxSize, just return the string without doing anything
    else
    {
      // Unmodified string
      return text;
    }

    // Modified string
    return text;
    
 }


printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

// Objective: The goal here is to check if these sequences on each line hold true mathematically:
// The sum of thee left side should equal the sum on the right side. 
// 1. Identify the pattern of the numbers in each line.
// 2. Compare the sums on each side of the equation.
// 3. Repeat the check for 200 lines and stop if any line fails, otherwise print a success message if all lines pass

/* Put your code below here!*/


// Calculate function
// This function takes one parameter:
// lineNumber, which represents the line for which we want to calculate the left and right sides.
function calculateFunction(lineNumber)

// Tracks the current line we're calculating
let line = 1;

// The first number in the sequence for the current line
// As we move to each new line, this value will be updated to the first number for that line's sequence. This is important because each line starts at a specific number in a continuous sequence.
let startingNumber = 1;

// LeftSide and rightSide
// We clear and refill them for each line so that each line’s sides are calculated separately

// Stores numbers on the left side of the equation
let leftSide = [];

// Stores numbers on the right side of the equation
let rightSide = [];


// While loop that runs as long as 
while (line !== lineNumber)
  {
    // Left and right side grows by 1 each line
    // Right side is always 1 less than the left side and equal to the current line we are on 
    let leftSideLength = line + 1;
    let rightSideLength = line;
    

    // Filling left side array

    leftSide = [];
    for (let i = 0; i < leftSideLength; i++)
    {
      leftSide.push(startingNumber + i);
    }

    line++;
  } 



{


// i will at the end return the two lists
  return leftSide,rightSide;

  

}

printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
