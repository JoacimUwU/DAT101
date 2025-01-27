"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
// Rectangle Calculation: Calculate perimeter and area
function cmbTask1CalculateClick() {
    // Get input values for width and height
    const width = parseFloat(document.getElementById("txtRectWidth").value);
    const height = parseFloat(document.getElementById("txtRectHeight").value);

    // Validate inputs to ensure they are numbers
    if (isNaN(width) || isNaN(height)) {
        alert("Please enter valid numbers for width and height.");
        return;
    }

    // Calculate perimeter and area
    const perimeter = 2 * (width + height);
    const area = width * height;

    // Output the results
    printOut(`Circumference: ${perimeter}, Area: ${area}`);
}
document.getElementById("cmbTask1Calculate").addEventListener("click", cmbTask1CalculateClick);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
// Word Collector: Add words to a list and display them
const task2Words = [];

function txtTask2WordKeyPress(event) {
    if (event.key === "Enter") {
        // Get the word from the input field
        const wordInput = document.getElementById("txtTask2Word");
        const word = wordInput.value.trim();

        // If the input is not empty, add it to the list
        if (word) {
            task2Words.push(word);

            // Display the updated list of words
            printOut(`Words (${task2Words.length}): ${task2Words.join(", ")}`);

            // Clear the input field
            wordInput.value = "";
        }
    }
}
document.getElementById("txtTask2Word").addEventListener("keypress", txtTask2WordKeyPress);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
// Checkbox Selection: Display selected checkboxes
function cmbTask3CheckClick() {
    // Get all selected checkboxes
    const checkboxes = document.querySelectorAll("input[name='chkTask3']:checked");
    const selectedValues = Array.from(checkboxes).map(cb => cb.value);

    // Display the selected checkboxes or a message if none are selected
    printOut(selectedValues.length > 0 ? `Selected: ${selectedValues.join(", ")}` : "No checkboxes selected.");
}
document.getElementById("cmbTask3CheckAnswer").addEventListener("click", cmbTask3CheckClick);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
// Car Selection: Populate radio buttons and display the selected car
const CarTypes = ["Sedan", "SUV", "Convertible", "Hatchback"];

function populateRadioButtons() {
    const divTask4Cars = document.getElementById("divTask4Cars");

    // Create radio buttons dynamically for each car type
    CarTypes.forEach(car => {
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "task4Car";
        radio.value = car;

        const label = document.createElement("label");
        label.innerText = car;

        divTask4Cars.appendChild(radio); // Add the radio button
        divTask4Cars.appendChild(label); // Add the label
        divTask4Cars.appendChild(document.createElement("br")); // Add a line break
    });
}

function cmbTask4CheckClick() {
    // Get the selected car from the radio buttons
    const selectedCar = document.querySelector("input[name='task4Car']:checked");

    // Display the selected car or a message if none is selected
    printOut(selectedCar ? `Selected Car: ${selectedCar.value}` : "No car selected.");
}
populateRadioButtons();
document.getElementById("cmbTask4CheckAnswer").addEventListener("click", cmbTask4CheckClick);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
// Animal Dropdown: Display selected animal
function selectTask5AnimalsChange() {
    // Get the selected animal from the dropdown
    const selectedAnimal = document.getElementById("selectTask5Animals").value;

    // Output the selected animal
    printOut(`Selected: ${selectedAnimal}`);
}
document.getElementById("selectTask5Animals").addEventListener("change", selectTask5AnimalsChange);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
// Name Dropdown: Populate dropdown with names and display the selected name
const GirlsNames = ["Anna", "Sophia", "Emma", "Olivia"];

function populateTask6Dropdown() {
    const dropdown = document.getElementById("selectTask6Girls");

    // Populate the dropdown with names
    GirlsNames.forEach(name => {
        const option = document.createElement("option");
        option.value = name;
        option.text = name;
        dropdown.add(option);
    });
}

function selectTask6GirlsChange() {
    // Get the selected name from the dropdown
    const selectedName = document.getElementById("selectTask6Girls").value;

    // Output the selected name
    printOut(`You selected: ${selectedName}`);
}
populateTask6Dropdown();
document.getElementById("selectTask6Girls").addEventListener("change", selectTask6GirlsChange);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
// Movie Table: Add movies to a table with details
const MovieGenre = ["Action", "Comedy", "Drama", "Sci-Fi"];

function populateMovieGenreDropdown() {
    const dropdown = document.getElementById("selectMovieGenre");

    // Populate the dropdown with genres
    MovieGenre.forEach(genre => {
        const option = document.createElement("option");
        option.value = genre;
        option.text = genre;
        dropdown.add(option);
    });
}

function cmbAddMovieClick() {
    // Get values from the input fields
    const title = document.getElementById("txtMovieTitle").value.trim();
    const genre = document.getElementById("selectMovieGenre").value;
    const director = document.getElementById("txtMovieDirector").value.trim();
    const rating = parseFloat(document.getElementById("txtMovieRate").value);

    // Validate inputs to ensure they are not empty or invalid
    if (!title || !director || isNaN(rating) || rating < 1 || rating > 10) {
        alert("Please fill in all fields correctly.");
        return;
    }

    // Add the movie details to the table
    const table = document.getElementById("tblMovies");
    const row = table.insertRow();

    [title, genre, director, rating.toFixed(1)].forEach(text => {
        const cell = row.insertCell();
        cell.innerText = text; // Add the text to the cell
    });
}

populateMovieGenreDropdown();
document.getElementById("cmbAddMovie").addEventListener("click", cmbAddMovieClick);
printOut(newLine);
