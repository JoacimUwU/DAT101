"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
// Define the wake-up time
let wakeUpTime = 7; // Change this value to 6, 7, or 8 to test

// If-else if-else statement to check the wake-up time
if (wakeUpTime === 7) {
    printOut("If I wake up at exactly 7 o'clock, I can take the bus to school.");
} else if (wakeUpTime === 8) {
    printOut("If I wake up exactly at 8 o'clock, I can take the train to school.");
} else {
    printOut("Otherwise, I have to take the car to school.");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
// Define the integer variable
let number = 0; // Change this value to test different cases (e.g., -3, 0, 7)

// If-else if-else statement to check whether the number is positive, negative, or zero
if (number > 0) {
    printOut("Positive");
} else if (number === 0) {
    printOut("Zero");
} else {
    printOut("Negative");
}
printOut(newLine);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
// Simulate an uploaded image size (random integer between 1 and 8)
let imageSize = Math.floor(Math.random() * 8) + 1;

// Check the image size and print the appropriate message
if (imageSize >= 4 && imageSize < 6) {
    printOut(`Image size: ${imageSize}MP. Thank you!`);
} else if (imageSize >= 6) {
    printOut(`Image size: ${imageSize}MP. The image is too large.`);
} else {
    printOut(`Image size: ${imageSize}MP. The image is too small.`);
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
// Part 8: Determine whether a person can upload an image based on the number of images uploaded

// Number of images uploaded by the user (Change this value to test)
let uploadedImages = Math.floor(Math.random() * 10); // Random number between 0 and 9

// Check the number of uploaded images and determine whether the user can upload more
if (uploadedImages < 5) {
    printOut(`You have uploaded ${uploadedImages} images. You can upload more.`);
} else {
    printOut(`You have uploaded ${uploadedImages} images. You cannot upload more.`);
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
// Part 9: Check if the number of hours worked in a week is within acceptable limits

// Number of hours worked (Change this value to test different cases)
let hoursWorked = Math.floor(Math.random() * 60); // Random number between 0 and 59

// Determine the feedback based on the hours worked
if (hoursWorked < 20) {
    printOut(`You worked ${hoursWorked} hours. You need to work more.`);
} else if (hoursWorked <= 40) {
    printOut(`You worked ${hoursWorked} hours. You are within acceptable limits.`);
} else {
    printOut(`You worked ${hoursWorked} hours. You are overworking.`);
}

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
// Part 10: Determine the performance level of a student based on their grade

// Grade percentage (Change this value to test different cases)
let grade = Math.floor(Math.random() * 101); // Random percentage between 0 and 100

// Determine the performance level based on the grade
if (grade >= 90) {
    printOut(`Grade: ${grade}. Excellent!`);
} else if (grade >= 75) {
    printOut(`Grade: ${grade}. Good job!`);
} else if (grade >= 50) {
    printOut(`Grade: ${grade}. You passed.`);
} else {
    printOut(`Grade: ${grade}. You failed. Better luck next time.`);
}

printOut(newLine);



