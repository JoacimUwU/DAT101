"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
// Part 1
// Objective: Create a function that prints out today's date
// The functions should not take any parameters nor should it return anything
function dateToday()
{
  // Create a new Date object for today's date
  let today = new Date();

  let formattedDate = today.toLocaleDateString("no-NB",
    {weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",}
  );

  // Print the formatted date
  console.log(formattedDate);

  // Return the Date object for further use
  // This is for part 2, where we upgrade the function to return the today object.
  return today;
}

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
function daysUntilRelease()
{
  // Get today's date by calling the dateToday function
  let today = dateToday();

  // Create a date object for the release date for the game
  // This will store the date for the release of the new game
  let releaseDate = new Date("2025-05-14");

  // Calculate the difference, so that we can estimate how long there is left
  // this will be stored in milliseconds, this needs to be converted for readability
  let timeDifference = releaseDate- today;

  // Convert the time difference from milliseconds to days
  let daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  // Print the countdown to the game's release
  console.log(daysRemaining);

}

function printDateAndCountdown()
{
  dateToday();
  daysUntilRelease();
}

printDateAndCountdown();
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
// Part 3
// Objective: Create a function that calculates
// and print the diameter, circumference, and area
// of a circle based on its radius

// Function declaration
// This function takes radius as its parameter
function circleCalculation(radius)
{
  // Calculate the diameter
  let diameter = radius * 2;

  // Calculate the circumference
  let circumference = radius * Math.PI * 2;

  // Calculate the area
  let area = radius^2 * Math.PI;

  // Print out the results
  console.log(diameter, circumference, area)

}
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
// PArt 4
// Objective: Create a function that calculates
// and prints the circumference and area of the given rectangle

// Function declaration
// Here we declare the function
function rectangleCalculation(width, height)
{
  // Calculate the circumference of the rectangle
  let circumference = 2 * (width+height);

  // Print out the result of the circumference
  console.log(circumference);

  // Calculate the area of the rectangle
  let area = (width) * (height);

  // Print out the result of the area
  console.log(area);


}

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
// Part 5
// Objective: Create a function that handles the conversion between:
// Celsius, Fahrenheit and Kelvin
// The function should take two parameters
// 1. Temperature and 2. Type: Celsius/Fahrenheit/Kelvin

function temperatureCalculation(temperature, temperatureType)
{
  let kelvin = 0;

  let fahrenheit= 0;

  let celsius = 0;

  if (temperatureType === "Celsius")
  {
    celsius = temperature;

    kelvin = temperature + 273.15;

    fahrenheit = (temperature* 9/5) + 32;
  }
  else if (temperatureType === "Fahrenheit")
  {
    celsius = (temperature - 32) * 5/9;
    fahrenheit = temperature;
    kelvin = celsius + 273.15;
  }
  else if (temperatureType === "Kelvin")
  {
    celsius = (temperature) - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
    kelvin = temperature;
  }
  else
  {
    console.log("Temperature type invalid");
  }

  console.log(celsius);
  console.log(fahrenheit);
  console.log(kelvin);
}
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
// Part 6
// Objective : Create a function that calculates the price without WAT(sales tax)
// The function takes two parameters: 1. Full price(number), 2. Type of tax(string)
// Function will ,based on the parameters, remove a percentage(tax) of the full price
// The function must return the price without tax
// We must call the function 4 times

function priceWOVAT(fullPrice, typeOfTax)
{
  // gross price = full price with VAT
  // net price = actual price of product without VAT

  // Make typeOfTax string lower case
  typeOfTax = typeOfTax.toLowerCase();

  //
  const normalVAT = ["normal"];

  const foodVAT = ["food"];

  const lowVAT =["hotel","transport","cinema"];

  let vatPercentage;




// If statements to decide what type of tax we have
  // By using include, we check if that array
  // has the element were looking for
  //Explanation:
  // if normalVAT has typeOfTax, we set the percentage to 25
  if (normalVAT.includes(typeOfTax))
  {
    vatPercentage = 25;
  }
  if (foodVAT.includes(typeOfTax))
  {
    vatPercentage = 15;
  }
  if (lowVAT.includes(typeOfTax))
  {
    vatPercentage = 10;
  }
  else
  {
    console.log("Unknown VAT group!");
    return NaN;
  }

  // Calculate the netPrice by using the formula
  let netPrice = (fullPrice * 100)/(vatPercentage + 100);

  // Return netPrice for further use
  return netPrice;

}

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
// Task 7
// Parameters :
// Arguments :
// Objective: Create a function that takes 3 arguments
// it should then return the following calculation:
// Speed = Distance / Time
// If speed is missing, calculate speed
// If Distance is missing, calculate distance
// If Time is missing, calculate time
// If more than one parameter is missing, return NaN

function calculateSpeedIncludes (speed,distance,time)
{

  const testArray= [speed,distance,time]

  if (!testArray.includes(speed))
  {
    speed = distance/time;
  }
  else if(!testArray.includes(distance))
  {
    speed = speed/time;
  }
  else if(!testArray.includes(time))
  {
    speed = speed/time;
  }
  else if(testArray.length < 2)
  {
    console.log("Missing 2 or more arguments");
    return NaN;
  }
  return {
    speed: speed,
    distance: distance,
    time: time
  };


}

function calculateSpeedNull (speed,distance,time)
{

  //
  let missingValues = 0;

  // If check to check if we are missing any arguments
  // And especially if we are missing more than two, since that means
  // The function for calculating speed doesn't work
  if (speed == null)
  {
    missingValues++;
  }
  if (distance == null)
  {
    missingValues++;
  }
  if (time == null)
  {
    missingValues++;
  }

  if (missingValues > 1 )
  {
    return NaN;
  }

 if (speed == null)
 {
   speed = distance/time;
 }
 else if (distance == null)
 {
  distance = speed * time;
 }
 else if (time == null)
 {
   time = distance/speed;
 }

 return {
   speed: speed,
   distance: distance,
   time: time
 };

}




printOut("Replace this with you answer!");
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
    // It tells us how many numbers should go on each side
    let leftSideLength = line + 1;
    let rightSideLength = line;
    

    // Filling left side array // 


    // We reset leftSide to an empty array, so we start fresh for each line
    // why? Need to reset it each time to ensure we are working with the right numbers for that line
    // Imagine a ladder, at each step we have to start fresh(each line here is the same)
    leftSide = [];
    // For loop for adding the correct amount of numbers to the left side
    for (let i = 0; i < leftSideLength; i++)
    {
    // startingNumber + i will always give the consecutive numbers starting from startingNumber
    // if starting number is 4 on line 2
    // when i = 0, it pushes 4
    // when i = 1, it pushes 5 
      leftSide.push(startingNumber + i);
    }

    // Reset rightSide array
    rightSide = [];

    // For loop for adding the correct numbers for the right side
    for (let i = 0; i < rightSideLength; i++)
    {

        // The first number for the right side, comes after the last number on the left side
        // To achieve this, we use the starting number + left side length
        rightSide.push(startingNumber+leftSideLength+i);
    }



    // Ensures that the next line starts at the correct number
    startingNumber = leftSideLength + rightSideLength
    // Increment the line
    line++;
  } 



{


// At the end return the two lists
  return leftSide,rightSide;

  

}
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

























