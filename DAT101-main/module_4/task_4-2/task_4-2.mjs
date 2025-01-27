"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut")); // Initialize the output container

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
// Array of numbers from 1 to 20
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Print each number in the array with its index
numbers.forEach((number, index) => {
    printOut(`Number ${index + 1}: ${number}`); // Use template literals to display index and number
});
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
// Join the numbers with a dash and print the result
const joinedNumbers = numbers.join("-");
printOut(`Joined numbers: ${joinedNumbers}`); // Show the joined string
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
// Convert a sentence into an array of words and print each word with its index
const sentence = "Hei på deg, hvordan har du det?";
const words = sentence.split(/[\s,?]+/); // Split sentence into words using spaces and punctuation

words.forEach((word, index) => {
    printOut(`Word ${index + 1}: ${word}`); // Print each word with its position
});
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
// Array of names and a function to remove a specific name
const names = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit"];

// Function to remove an element from the array
function removeFromArray(array, element) {
    const index = array.indexOf(element); // Find the index of the element
    if (index !== -1) {
        array.splice(index, 1); // Remove the element if it exists
        printOut(`${element} has been removed.`);
    } else {
        printOut(`${element} is not in the array.`);
    }
}

// Remove and print updates
removeFromArray(names, "Inger");
printOut(`Updated names: ${names.join(", ")}`);
removeFromArray(names, "Zelda");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
// Merge arrays of boy and girl names and print the result
const boyNames = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver"];
const girlNames = ["Emma", "Olivia", "Ava", "Isabella", "Sophia"];
const mergedNames = [...boyNames, ...girlNames]; // Merge arrays using the spread operator
printOut(`Merged names: ${mergedNames.join(", ")}`);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
// Class representing a book
class TBook {
    constructor(title, author, isbn) {
        this._title = title;
        this._author = author;
        this._isbn = isbn;
    }

    toString() {
        return `${this._title}, written by ${this._author}, ISBN: ${this._isbn}`; // Format book details
    }
}

// Create books and print their details
const books = [
    new TBook("1984", "George Orwell", "9780451524935"),
    new TBook("To Kill a Mockingbird", "Harper Lee", "9780060935467"),
    new TBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565")
];

books.forEach(book => printOut(book.toString()));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
// Weekdays object with weekday names
const EWeekDays = {
    WeekDay1: { name: "Mandag" },
    WeekDay2: { name: "Tirsdag" },
    WeekDay3: { name: "Onsdag" },
    WeekDay4: { name: "Torsdag" },
    WeekDay5: { name: "Fredag" },
    WeekDay6: { name: "Lørdag" },
    WeekDay7: { name: "Søndag" }
};

// Print each weekday with its name
Object.entries(EWeekDays).forEach(([key, value]) => {
    printOut(`${key}: ${value.name}`);
});
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
// Generate and sort an array of random numbers
const randomNumbers = Array.from({ length: 35 }, () => Math.floor(Math.random() * 20) + 1);
printOut(`Unsorted numbers: ${randomNumbers.join(", ")}`);

randomNumbers.sort((a, b) => a - b); // Sort numbers in ascending order
printOut(`Sorted numbers: ${randomNumbers.join(", ")}`);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
// Count the frequency of numbers and sort them by frequency
const frequency = {};
randomNumbers.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1; // Count occurrences
});

Object.entries(frequency)
    .sort((a, b) => b[1] - a[1] || a[0] - b[0]) // Sort by frequency and number
    .forEach(([num, count]) => {
        printOut(`Number ${num} appears ${count} times.`);
    });
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
// Create a 5x9 grid and print its contents
const rows = 5;
const cols = 9;
const grid = Array.from({ length: rows }, (_, rowIndex) =>
    Array.from({ length: cols }, (_, colIndex) => `Row ${rowIndex + 1} Col ${colIndex + 1}`)
);

grid.forEach(row => printOut(row.join(", "))); // Print each row of the grid
printOut(newLine);
