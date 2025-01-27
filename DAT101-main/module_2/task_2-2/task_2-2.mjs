"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
// Part 1: Calculating and displaying arithmetic results

// Calculate the expression without parentheses
let result1 = 2 + 3 * 2 - 4 * 6;
printOut(`Result without parentheses: ${result1}`);

// Calculate the same expression with parentheses for clarity and precedence control
let result2 = (2 + (3 * 2)) - (4 * 6);
printOut(`Result with parentheses: ${result2}`);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
// Part 2: Convert meters and centimeters to inches

// Input values for meters and centimeters
let meters = 25; // Example: 25 meters
let centimeters = 34; // Example: 34 centimeters

// Convert both to millimeters and then to inches (1 inch = 25.4 mm)
let millimeters = (meters * 1000) + (centimeters * 10);
let inches = millimeters / 25.4;

// Log the result with 2 decimal places
printOut(`Total inches: ${inches.toFixed(2)}`);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
// Part 3: Convert days, hours, minutes, and seconds into total minutes

// Input time values
let days = 3; // 3 days
let hours = 12; // 12 hours
let minutes = 14; // 14 minutes
let seconds = 45; // 45 seconds

// Convert everything to total minutes
let totalMinutes = (days * 24 * 60) + (hours * 60) + minutes + (seconds / 60);

// Log the result, rounded to 2 decimal places
printOut(`Total minutes: ${totalMinutes.toFixed(2)}`);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
// Part 4: Convert total minutes into days, hours, minutes, and seconds

// Input total minutes
let totalMinutesInput = 6322.52; // Example: 6,322.52 minutes

// Calculate days, hours, minutes, and seconds
let daysPart = Math.floor(totalMinutesInput / (24 * 60)); // Whole days
let remainingMinutes = totalMinutesInput % (24 * 60); // Remaining minutes after days
let hoursPart = Math.floor(remainingMinutes / 60); // Whole hours
let minutesPart = Math.floor(remainingMinutes % 60); // Remaining minutes
let secondsPart = Math.round((remainingMinutes % 1) * 60); // Convert leftover fraction to seconds

// Log the result in a readable format
printOut(`Time: ${daysPart} days, ${hoursPart} hours, ${minutesPart} minutes, ${secondsPart} seconds`);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
// Part 5: Convert between USD and NOK using exchange rates

// Exchange rates provided in the assignment
let usdToNokRate = 76 / 8.6; // 1 USD to NOK
let nokToUsdRate = 8.6 / 76; // 1 NOK to USD

// Convert 54 USD to NOK
let usdAmount = 54; // Example: 54 dollars
let nokAmount = usdAmount * usdToNokRate;

// Convert 76 NOK to USD
let nokValue = 76; // Example: 76 kroner
let usdValue = nokValue * nokToUsdRate;

// Log both conversions
printOut(`USD to NOK: ${nokAmount.toFixed(0)}, NOK to USD: ${usdValue.toFixed(0)}`);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
// Part 6: Work with strings to extract specific data

let text = "The earth is a very beautiful planet"; // Input text

// Log the total number of characters
printOut(`Total characters: ${text.length}`);

// Log the 19th character
printOut(`19th character: ${text.charAt(18)}`);

// Log 8 characters starting at position 35
printOut(`Characters from position 35: ${text.slice(34, 42)}`);

// Find the starting index of the word "earth"
printOut(`Index of 'earth': ${text.indexOf("earth")}`);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
// Part 7: Compare values and log results
printOut("Comparisons:");
printOut(`Is 5 greater than 3? ${5 > 3}`); // true
printOut(`Is 7 greater than or equal to 7? ${7 >= 7}`); // true
printOut(`Is 'a' greater than 'b'? ${'a' > 'b'}`); // false
printOut(`Is '1' less than 'a'? ${'1' < 'a'}`); // true
printOut(`Is '2500' less than 'abcd'? ${'2500' < 'abcd'}`); // true
printOut(`'arne' is not equal to 'thomas'? ${'arne' !== 'thomas'}`); // true
printOut(`Does 2 equal 5? ${2 === 5}`); // false
printOut(`Is 'abcd' greater than 'bcd'? ${'abcd' > 'bcd'}`); // false

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
// Part 8: Convert strings to numbers
printOut("Type Conversion:");
printOut(`Convert '254' to a number: ${Number("254")}`);
printOut(`Convert '57.23' to a number: ${parseFloat("57.23")}`);
printOut(`Convert '25 kroner' to a number (partial conversion): ${parseInt("25 kroner")}`);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
// Part 9: Generate a random number between 1 and 360
let randomNumber = Math.floor(Math.random() * 360) + 1;
printOut(`Random number between 1 and 360: ${randomNumber}`);

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
// Part 10: Calculate weeks and days from 131 days
let totalDays = 131; // Input total days

// Calculate full weeks and remaining days
let weeks = Math.floor(totalDays / 7);
let remainingDays = totalDays % 7;

// Log the result
printOut(`${totalDays} days = ${weeks} weeks and ${remainingDays} days`);

printOut(newLine);














