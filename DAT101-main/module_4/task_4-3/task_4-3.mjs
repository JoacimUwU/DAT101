"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

function cmbTask1CalculateClick() {
  const length = parseFloat(document.getElementById("txtTask1Length").value);
  const width = parseFloat(document.getElementById("txtTask1Width").value);

  if (isNaN(length) || isNaN(width)) {
      alert("Please enter valid numbers for length and width.");
      return;
  }

  const perimeter = 2 * (length + width);
  const area = length * width;

  document.getElementById("txtTask1Output").innerText = `Perimeter: ${perimeter}, Area: ${area}`;
}

//--- Part 2 ----------------------------------------------------------------------------------------------
const task2Words = [];

function txtTask2WordKeyPress(event) {
    if (event.key === "Enter") {
        const wordInput = document.getElementById("txtTask2Word");
        const word = wordInput.value.trim();
        if (word) {
            task2Words.push(word);
            document.getElementById("txtTask2Output").innerText =
                `Words (${task2Words.length}): ${task2Words.join(", ")}`;
            wordInput.value = ""; // Clear the input field
        }
    }
}
document.getElementById("txtTask2Word").addEventListener("keypress", txtTask2WordKeyPress);


//--- Part 3 ----------------------------------------------------------------------------------------------
function cmbTask3CheckClick() {
  const checkboxes = document.querySelectorAll("input[name='task3Checkbox']:checked");
  const selectedValues = Array.from(checkboxes).map(cb => cb.value);
  document.getElementById("txtTask3Output").innerText =
      selectedValues.length > 0 ? `Selected: ${selectedValues.join(", ")}` : "No checkboxes selected.";
}


//--- Part 4 ----------------------------------------------------------------------------------------------
const CarTypes = ["Sedan", "SUV", "Convertible", "Hatchback"];

function populateRadioButtons() {
    const divTask4Cars = document.getElementById("divTask4Cars");
    CarTypes.forEach(car => {
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "task4Car";
        radio.value = car;

        const label = document.createElement("label");
        label.innerText = car;

        divTask4Cars.appendChild(radio);
        divTask4Cars.appendChild(label);
        divTask4Cars.appendChild(document.createElement("br"));
    });
}

function cmbTask4CheckClick() {
    const selectedCar = document.querySelector("input[name='task4Car']:checked");
    document.getElementById("txtTask4Output").innerText =
        selectedCar ? `Selected Car: ${selectedCar.value}` : "No car selected.";
}
populateRadioButtons();


//--- Part 5 ----------------------------------------------------------------------------------------------
function selectTask5AnimalsChange() {
  const selectedAnimal = document.getElementById("selectTask5Animals").value;
  document.getElementById("txtTask5Output").innerText = `Selected: ${selectedAnimal}`;
}
document.getElementById("selectTask5Animals").addEventListener("change", selectTask5AnimalsChange);


//--- Part 6 ----------------------------------------------------------------------------------------------
const GirlsNames = ["Anna", "Sophia", "Emma", "Olivia"];

function populateTask6Dropdown() {
    const dropdown = document.getElementById("selectTask6Girls");
    GirlsNames.forEach(name => {
        const option = document.createElement("option");
        option.value = name;
        option.text = name;
        dropdown.add(option);
    });
}

function selectTask6GirlsChange() {
    const selectedName = document.getElementById("selectTask6Girls").value;
    document.getElementById("txtTask6Output").innerText = `Selected: ${selectedName}`;
}
populateTask6Dropdown();
document.getElementById("selectTask6Girls").addEventListener("change", selectTask6GirlsChange);


//--- Part 7 ----------------------------------------------------------------------------------------------
const MovieGenre = ["Action", "Comedy", "Drama", "Sci-Fi"];

function populateMovieGenreDropdown() {
    const dropdown = document.getElementById("selectMovieGenre");
    MovieGenre.forEach(genre => {
        const option = document.createElement("option");
        option.value = genre;
        option.text = genre;
        dropdown.add(option);
    });
}

function cmbAddMovieClick() {
    const title = document.getElementById("filmtittel").value;
    const genre = document.getElementById("selectMovieGenre").value;
    const director = document.getElementById("filmregissør").value;
    const rating = document.getElementById("filmrate").value;

    const table = document.getElementById("movieTable");
    const row = table.insertRow();

    [title, genre, director, rating].forEach(text => {
        const cell = row.insertCell();
        cell.innerText = text;
    });
}

populateMovieGenreDropdown();
document.getElementById("cmbAddMovie").addEventListener("click", cmbAddMovieClick);

