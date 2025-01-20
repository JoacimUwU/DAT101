"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
<<<<<<< HEAD
// Hard-coded array of numbers from 1 - 20
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// A for loop to traverse through the array
// and print out the numbers
for (let i = 0; i < numbers.length; i++)
{
    // can i use console log or should i use printout? //
    // should use console log
    console.log("Number ${i + 1}: ${numbers[i]}")
}
=======
/* Put your code below here!*/
>>>>>>> 5e2e6c844f2b4d6e940393b8c4043f60e32f2a85
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
<<<<<<< HEAD
// Join all eleents of the array with a dash as the separator
const joinedNumbers = numbers.join('-');
// Output the string to the console
console.log(joinedNumbers);
=======
printOut("Replace this with you answer!");
>>>>>>> 5e2e6c844f2b4d6e940393b8c4043f60e32f2a85
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
<<<<<<< HEAD

// Create a constant with text

const sentence = "Hei på deg, hvordan har du det?";

// Convert the sentence into an array of words
// Note: Using a regex to split by spaces and punctuations to cleanly separate words

const words = sentence.split(/[\s,?]+/);

// forEach loop
// First we set up the loop, which goes through each word in the array

// For each iteration, word represents the current word, and index  is the current index of that word in the array

words.forEach((word, index) => 
{
    // Using template literals for string interpolation.
    console.log(`Word ${index + 1}: ${word} (Index: ${index})`);

});





=======
>>>>>>> 5e2e6c844f2b4d6e940393b8c4043f60e32f2a85
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
<<<<<<< HEAD

const names = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg",
     "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];


function removeFromArray(array, element) {

    // Searches for the element in the array and returns its position. 
    // If the element isnt found, it returns -1
    const index = array.indexOf(element);

    // Checks if the element was found or not
    if (index !== -1) {
        array.splice(index, 1);  // This removes the element
        console.log(`${element} has been removed.`);
    } else {
        console.log(`${element} is not in the array.`);
    }
} 

removeFromArray(names, "Inger");  // Should remove "Inger" from the array
console.log(names);

removeFromArray(names, "Zelda");  // Should report that "Zelda" is not in the array


=======
>>>>>>> 5e2e6c844f2b4d6e940393b8c4043f60e32f2a85
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
<<<<<<< HEAD
// Array of boy names
const boyNames = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];

// Placeholder array of girl names
const girlNames = ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Charlotte", "Mia", "Amelia", "Harper", "Evelyn"];  // Example names

// Merging arrays
// Using the spread operator, which expands elements of an iterable, like an array
const mergedNames = [...boyNames, ...girlNames];

console.log(mergedNames);



=======
>>>>>>> 5e2e6c844f2b4d6e940393b8c4043f60e32f2a85
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
<<<<<<< HEAD

//
class TBook {
    constructor(title, author, isbn) {
        this._title = title;  // using underscore as a convention to indicate 'private' variables
        this._author = author;
        this._isbn = isbn;
    }

    toString() {
        return `${this._title}, written by ${this._author}, ISBN: ${this._isbn}`;
    }
}

const book1 = new TBook("1984", "George Orwell", "9780451524935");
const book2 = new TBook("To Kill a Mockingbird", "Harper Lee", "9780060935467");
const book3 = new TBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");

const books = [book1, book2, book3];

books.forEach(book => console.log(book.toString()));


=======
>>>>>>> 5e2e6c844f2b4d6e940393b8c4043f60e32f2a85
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
<<<<<<< HEAD

const EWeekDays = {
    WeekDay1: { value: 0x01, name: "Mandag" },
    WeekDay2: { value: 0x02, name: "Tirsdag" },
    WeekDay3: { value: 0x04, name: "Onsdag" },
    WeekDay4: { value: 0x08, name: "Torsdag" },
    WeekDay5: { value: 0x10, name: "Fredag" },
    WeekDay6: { value: 0x20, name: "Lørdag" },
    WeekDay7: { value: 0x40, name: "Søndag" },
    Workdays: { value: 0x1F, name: "Arbeidsdager" }, // Monday to Friday
    Weekends: { value: 0x60, name: "Helg" } // Saturday and Sunday
};

const keys = Object.keys(EWeekDays);
console.log(keys); // ['WeekDay1', 'WeekDay2', ..., 'Weekends']

keys.forEach(key => {
    console.log(`${key}: ${EWeekDays[key].name}`);
});



=======
>>>>>>> 5e2e6c844f2b4d6e940393b8c4043f60e32f2a85
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
<<<<<<< HEAD
const randomNumbers = Array.from({ length: 35 }, () => Math.floor(Math.random() * 20) + 1);
console.log(randomNumbers); // Unsorted array of random numbers

numbers.sort((a, b) => a - b); // Ascending order
console.log(randomNumbers); // Sorted array
=======
>>>>>>> 5e2e6c844f2b4d6e940393b8c4043f60e32f2a85
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
<<<<<<< HEAD

const frequency = {};

numbers.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
});

const sortedFrequency = Object.entries(frequency).sort((a, b) => {
    return b[1] - a[1] || Number(a[0]) - Number(b[0]);
});

sortedFrequency.forEach(([number, freq]) => {
    console.log(`Number ${number} appears ${freq} times`);
});


printOut("Replace this with you answer!");
printOut(newLine);



/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const rows = 5;
const cols = 9;
const grid = [];

for (let i = 0; i < rows; i++) {
    grid[i] = []; // Create a new row
    for (let j = 0; j < cols; j++) {
        grid[i][j] = `Row ${i + 1} Col ${j + 1}`;
    }
}

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        console.log(grid[i][j]);
    }
}


=======
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
>>>>>>> 5e2e6c844f2b4d6e940393b8c4043f60e32f2a85
printOut("Replace this with you answer!");
printOut(newLine);
