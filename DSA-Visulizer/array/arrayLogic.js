// --- Dark Mode and Light Mode ---
const toggelBtn = document.getElementById("toggelBtn");
const themeIcon = document.getElementById("themeIcon");
const body = document.querySelector("body");

if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeIcon.src = "../icons/dark-mode.png";
}

toggelBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
        themeIcon.src = "../icons/dark-mode.png";
        localStorage.setItem("theme", "light");
    } else {
        themeIcon.src = "../icons/light-mode.png";
        localStorage.setItem("theme", "dark");
    }
});

// --- Menu Icon Logic ---
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const navLinks = document.querySelector(".nav-links");
const allLinks = document.querySelectorAll(".nav-links a");

menuIcon.addEventListener("click", () => {
    navLinks.classList.add("show");
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
    navLinks.classList.remove("show");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
});

allLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks.classList.contains("show")) {
            navLinks.classList.remove("show");
            closeIcon.style.display = "none";
            menuIcon.style.display = "block";
        }
    });
});

// --- Array Visualizer Logic ---
const valueInput = document.getElementById('valueInput');
const indexInput = document.getElementById('indexInput');
const insertBtn = document.getElementById('insertBtn');
const deleteBtn = document.getElementById('deleteBtn');
const searchBtn = document.getElementById('searchBtn');
const sortBtn = document.getElementById('sortBtn');
const resetBtn = document.getElementById('resetBtn');
const generateBtn = document.getElementById('generateBtn');
const customInput = document.getElementById('customInput');
const barContainer = document.getElementById('barContainer');
const barIndexContainer = document.getElementById('barIndexContainer');
const codeSnippet = document.getElementById('codeSnippet');
const stepList = document.getElementById('stepList');
const sortLanButtons = document.querySelectorAll(".sort-lan-selector button");
const codeDisplay = document.querySelector(".code-display p");

let currentArray = [];
let isAnimating = false;
let currentLang = "cpp"; // Changed from 'const' to 'let'

const jsCodes = {
    insert: `// Insertion adds an element at a specific index.
function insert(arr, index, value) {
    if (index < 0 || index > arr.length) {
        console.error("Invalid index.");
        return;
    }
    // Shift elements to make space
    for (let i = arr.length; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    // Insert the new value
    arr[index] = value;
}`,
    delete: `// Deletion removes an element from a specific index.
function remove(arr, index) {
    if (index < 0 || index >= arr.length) {
        console.error("Invalid index.");
        return;
    }
    // Shift elements to fill the gap
    for (let i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length--; // Reduce array size
}`,
    search: `// Searching finds an element and returns its index.
function search(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i; // Found!
        }
    }
    return -1; // Not found
}`,
    sort: `// A simple Bubble Sort algorithm.
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}`
};

const arraySyntax = {
    js: `let arr = [1, 2, 3, 4, 5];`,
    py: `arr = [1, 2, 3, 4, 5]`,
    java: `int[] arr = {1, 2, 3, 4, 5};`,
    cpp: `int arr[] = {1, 2, 3, 4, 5};`,
    c: `int arr[] = {1, 2, 3, 4, 5};`
};

document.addEventListener("DOMContentLoaded", () => {
    const defaultArray = [45, 18, 10, 72, 33];
    currentArray = [...defaultArray];
    generateBars(currentArray);
    updateCodeDisplay("insert");

    // Set initial active button and display C++ code
    document.getElementById(currentLang).classList.add("active");
    codeDisplay.textContent = arraySyntax.cpp;
});

async function generateBars(arr) {
    barContainer.innerHTML = '';
    barIndexContainer.innerHTML = '';
    stepList.innerHTML = '';
    if (arr.length === 0) {
        barContainer.innerHTML = '<p style="color: #fff; text-align: center; margin-top: 20px;">Array is empty.</p>';
        return;
    }

    arr.forEach((num, idx) => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.textContent = num;
        barContainer.appendChild(bar);

        const indexLabel = document.createElement('div');
        indexLabel.classList.add('bar-index');
        indexLabel.textContent = idx;
        barIndexContainer.appendChild(indexLabel);
    });
    updateStepList("Array generated.");
}

function updateCodeDisplay(operation) {
    codeSnippet.textContent = jsCodes[operation] || "Select an operation to see the code.";
}

function updateStepList(message) {
    const li = document.createElement('li');
    li.textContent = message;
    stepList.appendChild(li);
    stepList.scrollTop = stepList.scrollHeight;
}

// --- Operations Functions ---

async function insertElement() {
    if (isAnimating) return;
    isAnimating = true;
    updateCodeDisplay("insert");
    resetVisualizer(false);

    const value = parseInt(valueInput.value);
    const index = parseInt(indexInput.value);

    if (isNaN(value) || isNaN(index) || index < 0 || index > currentArray.length) {
        alert("Please enter a valid number for value and a valid index (0 to " + currentArray.length + ").");
        isAnimating = false;
        return;
    }
    
    updateStepList(`Preparing to insert value ${value} at index ${index}...`);
    const tempArray = [...currentArray];
    const bars = document.querySelectorAll('.bar');

    for (let i = tempArray.length - 1; i >= index; i--) {
        if(bars[i]) {
            bars[i].classList.add('highlight');
        }
        updateStepList(`Shifting element ${tempArray[i]} from index ${i} to ${i+1}.`);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if(bars[i]) {
            bars[i].classList.remove('highlight');
        }
    }
    
    tempArray.splice(index, 0, value);
    updateStepList(`Inserting value ${value} at index ${index}.`);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    currentArray = tempArray;
    generateBars(currentArray);
    isAnimating = false;
}

async function deleteElement() {
    if (isAnimating) return;
    isAnimating = true;
    updateCodeDisplay("delete");
    resetVisualizer(false);

    const index = parseInt(indexInput.value);
    if (isNaN(index) || index < 0 || index >= currentArray.length) {
        alert("Please enter a valid index to delete (0 to " + (currentArray.length - 1) + ").");
        isAnimating = false;
        return;
    }
    
    updateStepList(`Preparing to delete element at index ${index}...`);
    const bars = document.querySelectorAll('.bar');
    const value = currentArray[index];
    
    bars[index].classList.add('remove');
    updateStepList(`Removing value ${value} from index ${index}.`);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const tempArray = [...currentArray];
    tempArray.splice(index, 1);
    currentArray = tempArray;
    generateBars(currentArray);

    for (let i = index; i < currentArray.length; i++) {
        const updatedBars = document.querySelectorAll('.bar');
        updatedBars[i].classList.add('highlight');
        updateStepList(`Shifting element ${currentArray[i]} from index ${i+1} to ${i}.`);
        await new Promise(resolve => setTimeout(resolve, 500));
        updatedBars[i].classList.remove('highlight');
    }
    
    isAnimating = false;
}

async function searchElement() {
    if (isAnimating) return;
    isAnimating = true;
    updateCodeDisplay("search");
    resetVisualizer(false);

    const value = parseInt(valueInput.value);
    if (isNaN(value)) {
        alert("Please enter a valid number to search for.");
        isAnimating = false;
        return;
    }
    
    updateStepList(`Searching for value ${value}...`);
    const bars = document.querySelectorAll('.bar');
    let found = false;

    for (let i = 0; i < bars.length; i++) {
        bars[i].classList.add('highlight');
        updateStepList(`Checking element at index ${i}: Is it ${value}?`);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (parseInt(bars[i].textContent) === value) {
            bars[i].classList.remove('highlight');
            bars[i].classList.add('found');
            updateStepList(`Found value ${value} at index ${i}!`);
            found = true;
            break;
        }
        bars[i].classList.remove('highlight');
    }

    if (!found) {
        updateStepList(`Value ${value} not found in the array.`);
    }
    isAnimating = false;
}

async function sortArray() {
    if (isAnimating) return;
    isAnimating = true;
    updateCodeDisplay("sort");
    resetVisualizer(false);
    
    updateStepList("Starting Bubble Sort...");
    let n = currentArray.length;
    const bars = document.querySelectorAll('.bar');

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            bars[j].classList.add('highlight');
            bars[j + 1].classList.add('highlight');
            updateStepList(`Comparing ${currentArray[j]} and ${currentArray[j+1]} (indices ${j} and ${j+1}).`);
            await new Promise(resolve => setTimeout(resolve, 500));

            if (currentArray[j] > currentArray[j + 1]) {
                updateStepList(`Swapping ${currentArray[j]} and ${currentArray[j+1]}.`);
                [currentArray[j], currentArray[j + 1]] = [currentArray[j + 1], currentArray[j]];
                [bars[j].textContent, bars[j + 1].textContent] = [bars[j + 1].textContent, bars[j].textContent];
            }

            bars[j].classList.remove('highlight');
            bars[j + 1].classList.remove('highlight');
        }
        bars[n - 1 - i].classList.add('sorted');
        updateStepList(`Element at index ${n - 1 - i} is now sorted.`);
    }
    bars[0].classList.add('sorted');
    updateStepList("Sorting complete. The array is now sorted.");
    isAnimating = false;
}

function resetVisualizer(clearInput = true) {
    if (isAnimating) return;
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.classList.remove('highlight', 'remove', 'found', 'sorted');
    });
    if (clearInput) {
        valueInput.value = '';
        indexInput.value = '';
        generateBars(currentArray);
    }
    stepList.innerHTML = '';
}

// --- Event Listeners for array operations ---
insertBtn.addEventListener('click', insertElement);
deleteBtn.addEventListener('click', deleteElement);
searchBtn.addEventListener('click', searchElement);
sortBtn.addEventListener('click', sortArray);
resetBtn.addEventListener('click', () => {
    const defaultArray = [45, 18, 10, 72, 33];
    currentArray = [...defaultArray];
    generateBars(currentArray);
});

// Event Listener for initial array generation
generateBtn.addEventListener('click', () => {
    const input = customInput.value.trim();
    const arr = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
    if (arr.length === 0) {
        alert("Please enter a comma-separated list of numbers.");
        return;
    }
    currentArray = arr;
    generateBars(currentArray);
});

// Copy button logic
document.getElementById("copy-btn").addEventListener("click", () => {
    const code = document.getElementById("codeLang").textContent;
    navigator.clipboard.writeText(code)
        .then(() => {
            alert("Code copied to clipboard!");
        })
        .catch(err => {
            alert("Failed to copy code. Please try again.");
        });
});

// Language selection logic
sortLanButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const selectedLang = event.target.id;

        if (selectedLang !== currentLang) {
            document.querySelector(".sort-lan-selector .active")?.classList.remove("active");
            event.target.classList.add("active");

            currentLang = selectedLang;
            codeDisplay.textContent = arraySyntax[currentLang] || "// Code not found!";
        }
    });
});