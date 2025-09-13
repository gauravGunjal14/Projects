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

// --- Stack Visualizer Logic ---
const valueInput = document.getElementById('valueInput');
const pushBtn = document.getElementById('pushBtn');
const popBtn = document.getElementById('popBtn');
const peekBtn = document.getElementById('peekBtn');
const resetBtn = document.getElementById('resetBtn');
const generateBtn = document.getElementById('generateBtn');
const customInput = document.getElementById('customInput');
const stackContainer = document.getElementById('stackContainer');
const topPointer = document.getElementById('topPointer');
const codeSnippet = document.getElementById('codeSnippet');
const stepList = document.getElementById('stepList');
const sortLanButtons = document.querySelectorAll(".sort-lan-selector button");
const codeDisplay = document.querySelector(".code-display p");

let currentStack = [];
let isAnimating = false;
let currentLang = "cpp";

const jsCodes = {
    push: `// Push adds an element to the top of the stack.
function push(stack, value) {
    stack.push(value);
}`,
    pop: `// Pop removes the top element from the stack.
function pop(stack) {
    if (stack.length > 0) {
        return stack.pop();
    } else {
        console.error("Stack is empty.");
        return null;
    }
}`,
    peek: `// Peek returns the top element without removing it.
function peek(stack) {
    if (stack.length > 0) {
        return stack[stack.length - 1];
    } else {
        console.error("Stack is empty.");
        return null;
    }
}`,
};

const stackSyntax = {
    js: `let stack = [10, 20, 30];`,
    py: `stack = [10, 20, 30]`,
    java: `Stack<Integer> stack = new Stack<>();
stack.push(10);`,
    cpp: `std::stack<int> s;
s.push(10);`,
    c: `// C does not have a built-in stack.
// It is implemented using arrays or linked lists.`,
};

document.addEventListener("DOMContentLoaded", () => {
    const defaultStack = [10, 20, 30];
    currentStack = [...defaultStack];
    generateStack(currentStack);
    updateCodeDisplay("push");

    document.getElementById(currentLang).classList.add("active");
    codeDisplay.textContent = stackSyntax.cpp;
});

async function generateStack(arr) {
    if (isAnimating) return;
    resetVisualizer();
    stackContainer.innerHTML = '';

    if (arr.length === 0) {
        stackContainer.innerHTML = '<p style="color: #fff; text-align: center; margin-top: 20px;">Stack is empty.</p>';
        topPointer.style.display = 'none';
        updateStepList("Stack is empty.");
        return;
    }

    arr.forEach(num => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.textContent = num;
        stackContainer.appendChild(bar);
    });

    topPointer.style.display = 'block';
    updateStepList("Stack generated successfully.");
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

async function pushElement() {
    if (isAnimating) return;
    isAnimating = true;
    updateCodeDisplay("push");
    resetVisualizer(false);

    const value = parseInt(valueInput.value);

    if (isNaN(value)) {
        alert("Please enter a valid number to push.");
        isAnimating = false;
        return;
    }

    updateStepList(`Step 1: Pushing value ${value} onto the stack.`);
    const newBar = document.createElement('div');
    newBar.classList.add('bar');
    newBar.textContent = value;
    stackContainer.appendChild(newBar);
    
    // Animate the bar sliding in
    await new Promise(resolve => setTimeout(resolve, 50));
    newBar.style.transform = `translateY(0)`;
    newBar.style.opacity = '1';
    
    updateStepList("Step 2: New element added to the top.");
    
    await new Promise(resolve => setTimeout(resolve, 500));
    newBar.classList.add('highlight');
    topPointer.style.display = 'block';

    updateStepList(`Step 3: Top pointer is updated to point to the new element.`);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    newBar.classList.remove('highlight');
    isAnimating = false;
}

async function popElement() {
    if (isAnimating) return;
    if (currentStack.length === 0) {
        alert("Stack is empty. Cannot pop.");
        return;
    }
    isAnimating = true;
    updateCodeDisplay("pop");
    resetVisualizer(false);
    
    const bars = document.querySelectorAll('.bar');
    const topBar = bars[bars.length - 1];
    const value = topBar.textContent;

    updateStepList(`Step 1: Preparing to pop the top element (${value}).`);
    topBar.classList.add('highlight');
    await new Promise(resolve => setTimeout(resolve, 500));

    updateStepList(`Step 2: Removing the top element.`);
    topBar.classList.remove('highlight');
    topBar.classList.add('remove');

    await new Promise(resolve => setTimeout(resolve, 500));
    stackContainer.removeChild(topBar);
    currentStack.pop();

    updateStepList(`Step 3: Element ${value} removed. Stack size is now ${currentStack.length}.`);

    if (currentStack.length > 0) {
        const newTop = document.querySelectorAll('.bar');
        newTop[newTop.length - 1].classList.add('highlight');
        updateStepList(`Step 4: The new top element is ${newTop[newTop.length - 1].textContent}.`);
        await new Promise(resolve => setTimeout(resolve, 500));
        newTop[newTop.length - 1].classList.remove('highlight');
    } else {
        stackContainer.innerHTML = '<p style="color: #fff; text-align: center; margin-top: 20px;">Stack is empty.</p>';
        updateStepList(`Step 4: The stack is now empty.`)
        topPointer.style.display = 'none';
    }

    isAnimating = false;
}

async function peekElement() {
    if (isAnimating) return;
    if (currentStack.length === 0) {
        alert("Stack is empty. Cannot peek.");
        return;
    }
    isAnimating = true;
    updateCodeDisplay("peek");
    resetVisualizer(false);

    const bars = document.querySelectorAll('.bar');
    const topBar = bars[bars.length - 1];
    const value = topBar.textContent;

    updateStepList(`Step 1: Checking the top element...`);
    topBar.classList.add('highlight');

    updateStepList(`Step 2: The top element is ${value}.`);
    await new Promise(resolve => setTimeout(resolve, 1500));

    topBar.classList.remove('highlight');
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
    }
    stepList.innerHTML = '';
}

// --- Event Listeners for stack operations ---
pushBtn.addEventListener('click', () => {
    pushElement();
    currentStack.push(parseInt(valueInput.value));
});
popBtn.addEventListener('click', () => {
    popElement();
    currentStack.pop();
});
peekBtn.addEventListener('click', () => {
    peekElement();
});
resetBtn.addEventListener('click', () => {
    const defaultStack = [10, 20, 30];
    currentStack = [...defaultStack];
    generateStack(currentStack);
});

// Event Listener for initial stack generation
generateBtn.addEventListener('click', () => {
    const input = customInput.value.trim();
    const arr = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
    if (arr.length === 0) {
        alert("Please enter a comma-separated list of numbers.");
        return;
    }
    currentStack = arr;
    generateStack(currentStack);
});

// Copy button logic
document.getElementById("copy-btn").addEventListener("click", () => {
    const code = codeSnippet.textContent;
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
            codeDisplay.textContent = stackSyntax[currentLang] || "// Code not found!";
        }
    });
});