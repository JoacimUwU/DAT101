"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
// Objective: Print today's date in a formatted style
function dateToday() {
  let today = new Date();
  let formattedDate = today.toLocaleDateString("no-NB", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  printOut(`Today's date: ${formattedDate}`);
  return today;
}

dateToday();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
// Objective: Calculate and display days until a specific release date
function daysUntilRelease() {
  let today = dateToday();
  let releaseDate = new Date("2025-05-14");
  let timeDifference = releaseDate - today;
  let daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  printOut(`Days until release: ${daysRemaining}`);
}

daysUntilRelease();
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
// Objective: Calculate diameter, circumference, and area of a circle
function circleCalculation(radius) {
  let diameter = radius * 2;
  let circumference = radius * Math.PI * 2;
  let area = radius ** 2 * Math.PI;
  printOut(
    `For a circle with radius ${radius}:\nDiameter: ${diameter}, Circumference: ${circumference.toFixed(
      2
    )}, Area: ${area.toFixed(2)}`
  );
}

circleCalculation(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
// Objective: Calculate circumference and area of a rectangle
function rectangleCalculation(width, height) {
  let circumference = 2 * (width + height);
  let area = width * height;
  printOut(
    `Rectangle (Width: ${width}, Height: ${height}):\nCircumference: ${circumference}, Area: ${area}`
  );
}

rectangleCalculation(10, 5);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
// Objective: Convert temperatures between Celsius, Fahrenheit, and Kelvin
function temperatureCalculation(temperature, type) {
  let celsius, fahrenheit, kelvin;
  if (type === "Celsius") {
    celsius = temperature;
    fahrenheit = (temperature * 9) / 5 + 32;
    kelvin = temperature + 273.15;
  } else if (type === "Fahrenheit") {
    celsius = (temperature - 32) * (5 / 9);
    fahrenheit = temperature;
    kelvin = celsius + 273.15;
  } else if (type === "Kelvin") {
    celsius = temperature - 273.15;
    fahrenheit = (celsius * 9) / 5 + 32;
    kelvin = temperature;
  } else {
    printOut("Invalid temperature type.");
    return;
  }
  printOut(
    `Temperature (${type}):\nCelsius: ${celsius.toFixed(
      2
    )}, Fahrenheit: ${fahrenheit.toFixed(2)}, Kelvin: ${kelvin.toFixed(2)}`
  );
}

temperatureCalculation(25, "Celsius");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
// Objective: Calculate price without VAT
function priceWithoutVAT(fullPrice, typeOfTax) {
  const vatRates = {
    normal: 25,
    food: 15,
    transport: 10,
  };
  let vatPercentage = vatRates[typeOfTax.toLowerCase()];
  if (!vatPercentage) {
    printOut("Unknown VAT type.");
    return NaN;
  }
  let netPrice = (fullPrice * 100) / (100 + vatPercentage);
  printOut(`Price without VAT: ${netPrice.toFixed(2)}`);
  return netPrice;
}

priceWithoutVAT(1000, "Normal");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
// Objective: Calculate speed, distance, or time based on missing parameters
function calculateSpeed(distance, time, speed) {
  if (!distance) {
    distance = speed * time;
  } else if (!time) {
    time = distance / speed;
  } else if (!speed) {
    speed = distance / time;
  } else {
    printOut("Provide exactly one missing parameter.");
    return;
  }
  printOut(`Speed: ${speed}, Distance: ${distance}, Time: ${time}`);
}

calculateSpeed(null, 2, 60);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
// Objective: Modify a text string to a specific length by adding characters
function textEditor(text, maxSize, char, insertion) {
  while (text.length < maxSize) {
    text = insertion ? char + text : text + char;
  }
  printOut(`Modified text: ${text}`);
  return text;
}

textEditor("Example", 12, "*", true);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
// Objective: Validate mathematical sequences for 200 lines
function validateSequences(lines) {
  for (let line = 1; line <= lines; line++) {
    let leftSum = (line * (line + 1)) / 2;
    let rightSum = ((line - 1) * line) / 2;
    if (leftSum !== rightSum + line) {
      printOut(`Mismatch on line ${line}.`);
      return;
    }
  }
  printOut("All lines validated successfully.");
}

validateSequences(200);
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
// Objective: Calculate factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

let factResult = factorial(5);
printOut(`Factorial of 5 : ${factResult}`);
printOut(newLine);
