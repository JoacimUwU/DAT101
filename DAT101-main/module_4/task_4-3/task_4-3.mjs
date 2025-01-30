
// Utility Functions

/**
 * Safely attaches event listeners to DOM elements
 * - Prevents errors if element doesn't exist
 * - Standardizes event listener setup
 * @param {string} elementId - ID of target HTML element
 * @param {string} eventType - DOM event type ('click', 'change', etc)
 * @param {Function} callback - Function to execute on event
 * @example initEventListener('btnSubmit', 'click', handleSubmit)
 */
function initEventListener(elementId, eventType, callback) {
    const element = document.getElementById(elementId);
    if (element) {
        element.addEventListener(eventType, callback);
    }
    // Silent failure if element not found (intentional design decision)
}
  

  // Task Implementations
  
  // Task 1: Rectangle Calculations
  function handleRectangleCalculation() {
    // Get input values and convert to numbers
    const width = parseFloat(document.getElementById('txtRectWidth').value);
    const height = parseFloat(document.getElementById('txtRectHeight').value);
  
    // Validate inputs
    if (isNaN(width) || isNaN(height) || width < 0 || height < 0) {
      alert('Please enter valid positive numbers');
      return;
    }
  
    // Perform calculations
    const circumference = 2 * (width + height);
    const area = width * height;
  
    // Update output display
    document.getElementById('txtTask1Output').textContent = 
      `Circumference = ${circumference}, Area = ${area}`;
  }
  
  // Task 2: Word Counter 
  function handleWordInput(event) {
    if (event.key === 'Enter') {
      const inputField = document.getElementById('txtTask2Word');
      const word = inputField.value.trim();
      
      if (word) {
        // Update word count display
        const countElement = document.getElementById('txtTask2Output');
        const currentCount = parseInt(countElement.textContent.match(/\d+/)[0]);
        countElement.textContent = `Number of words = ${currentCount + 1}`;
        inputField.value = ''; // Clear input
      }
    }
  }
  
  // Task 3: Checkbox Handler
  function handleCheckboxSelection() {
    // Get all checked checkboxes
    const checkedItems = Array.from(document.querySelectorAll('input[name="chkTask3"]:checked'))
      .map(checkbox => checkbox.value);
  
    // Update status display
    const outputText = checkedItems.length > 0 
      ? `Selected options: ${checkedItems.join(', ')}` 
      : 'No options selected';
    document.getElementById('txtTask3Output').textContent = outputText;
  }
  
  // Task 4: Car Selection
  function initializeCarSelection() {
    const carTypes = ["Sedan", "SUV", "Convertible", "Hatchback"];
    const container = document.getElementById('divTask4Cars');
  
    // Generate radio buttons dynamically
    carTypes.forEach(car => {
      container.innerHTML += `
        <label>
          <input type="radio" name="carType" value="${car}"> ${car}
        </label><br>`;
    });
  
    // Handle selection button click
    initEventListener('cmbTask4CheckAnswer', 'click', () => {
      const selected = document.querySelector('input[name="carType"]:checked');
      document.getElementById('txtTask4Output').textContent = 
        selected ? `Selected: ${selected.value}` : 'No selection';
    });
  }
  
  // Task 5: Animal Selection
  function handleAnimalSelection(event) {
    const selectedText = event.target.options[event.target.selectedIndex].text;
    document.getElementById('txtTask5Output').textContent = 
      `Selected: ${selectedText}`;
  }
  
  // Task 6: Name Selection
  function initializeNameSelection() {
    const names = ["Anna", "Sophia", "Emma", "Olivia"];
    const dropdown = document.getElementById('selectTask6Girls');
  
    // Populate dropdown options
    names.forEach(name => {
      const option = new Option(name, name);
      dropdown.add(option);
    });
  
    // Handle selection change
    dropdown.addEventListener('change', (e) => {
      document.getElementById('txtTask6Output').textContent = 
        `You selected: ${e.target.value}`;
    });
  }
  
  // Task 7: Movie Database
  function initializeMovieSystem() {
    const genres = ["Action", "Comedy", "Drama", "Sci-Fi"];
    const genreDropdown = document.getElementById('selectMovieGenre');
  
    // Populate genre dropdown
    genres.forEach(genre => {
      genreDropdown.add(new Option(genre, genre));
    });
  
    // Handle movie addition
    initEventListener('cmbAddMovie', 'click', () => {
      const title = document.getElementById('txtMovieTitle').value.trim();
      const genre = genreDropdown.value;
      const director = document.getElementById('txtMovieDirector').value.trim();
      const rating = document.getElementById('txtMovieRate').value;
  
      // Validate required fields
      if (!title || !director) {
        alert('Please fill in all required fields');
        return;
      }
  
      // Add to movie table
      const table = document.getElementById('tblMovies');
      const newRow = table.insertRow();
      newRow.innerHTML = `
        <td>${table.rows.length}</td>
        <td>${title}</td>
        <td>${genre}</td>
        <td>${director}</td>
        <td>${rating}</td>
      `;
  
      // Clear input fields
      document.getElementById('txtMovieTitle').value = '';
      document.getElementById('txtMovieDirector').value = '';
    });
  }
  
  
  // Initialization
  
  function initializeApp() {
    // Task 1
    initEventListener('cmbTask1Calculate', 'click', handleRectangleCalculation);
  
    // Task 2
    initEventListener('txtTask2Word', 'keypress', handleWordInput);
  
    // Task 3
    initEventListener('cmbTask3CheckAnswer', 'click', handleCheckboxSelection);
  
    // Task 4
    initializeCarSelection();
  
    // Task 5
    initEventListener('selectTask5Animals', 'change', handleAnimalSelection);
  
    // Task 6
    initializeNameSelection();
  
    // Task 7
    initializeMovieSystem();
  }
  
  // Start application when DOM is ready
  document.addEventListener('DOMContentLoaded', initializeApp);