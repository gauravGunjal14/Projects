// Dark Mode and Light Mode
const toggelBtn = document.getElementById("toggelBtn");
const themeIcon = document.getElementById("themeIcon")
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
    }
    else {
        themeIcon.src = "../icons/light-mode.png";
        localStorage.setItem("theme", "dark");
    }
});

// menuIcon logic
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const navLinks = document.querySelector(".nav-links");

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

const allLinks = document.querySelectorAll(".nav-links a");
allLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks.classList.contains("show")) {
            navLinks.classList.remove("show");
            closeIcon.style.display = "none";
            menuIcon.style.display = "block";
        }
    });
});

// language button logic
let lang = "cpp";

// bydefault cpp code will be displayed
window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".code-display p").textContent = sortCodes[lang];
});

const sortCodes = {
    cpp: `#include <bits/stdc++.h>
using namespace std;

// An optimized version of Bubble Sort 
void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    bool swapped;

    for (int i = 0; i < n - 1; i++) {
        swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        if (!swapped)
            break;
    }
}

void printVector(const vector<int>& arr) {
    for (int num : arr)
        cout << " " << num;
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    bubbleSort(arr);
    cout << "Sorted array: \\n";
    printVector(arr);
    return 0;
}`,

    c: `#include <stdbool.h>
#include <stdio.h>

void swap(int* xp, int* yp){
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}

void bubbleSort(int arr[], int n){
    int i, j;
    bool swapped;
    for (i = 0; i < n - 1; i++) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(&arr[j], &arr[j + 1]);
                swapped = true;
            }
        }
        if (!swapped)
            break;
    }
}

void printArray(int arr[], int size){
    for (int i = 0; i < size; i++)
        printf("%d ", arr[i]);
}

int main(){
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    bubbleSort(arr, n);
    printf("Sorted array: \\n");
    printArray(arr, n);
    return 0;
}`,

    py: `# Optimized implementation of Bubble Sort in Python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break

def print_array(arr):
    for i in arr:
        print(i, end=" ")

arr = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(arr)
print("Sorted array:")
print_array(arr)`,

    java: `// Optimized Bubble Sort in Java
class GFG {
    static void bubbleSort(int arr[], int n){
        int i, j, temp;
        boolean swapped;
        for (i = 0; i < n - 1; i++) {
            swapped = false;
            for (j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped)
                break;
        }
    }

    static void printArray(int arr[], int size){
        for (int i = 0; i < size; i++)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    public static void main(String args[]){
        int arr[] = {64, 34, 25, 12, 22, 11, 90};
        int n = arr.length;
        bubbleSort(arr, n);
        System.out.println("Sorted array:");
        printArray(arr, n);
    }
}`,

    js: `// Optimized Bubble Sort in JavaScript
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}

function printArray(arr) {
    console.log(arr.join(" "));
}

let arr = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(arr);
console.log("Sorted array:");
printArray(arr);`
};

const buttons = document.querySelectorAll(".sort-lan-selector button");
const codeDisplay = document.querySelector(".code-display p");

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const selectedLang = event.target.id;

        if (selectedLang !== lang) {
            document.querySelector(".sort-lan-selector .active")?.classList.remove("active");
            event.target.classList.add("active");

            lang = selectedLang;
            codeDisplay.textContent = sortCodes[lang] || "// Code not found!";
        }
    });
});

// copy btn logic
document.getElementById("copy-btn").addEventListener("click", () => {
    const code = document.querySelector(".code-display p").textContent;
    navigator.clipboard.writeText(code)
        .then(() => {
            alert("Code copied to clipboard!");
        })
        .catch(err => {
            alert("Failed to copy code. Please try again.");
        });
});

// main sorting logic
const inputBox = document.getElementById('customInput');
const generateBtn = document.getElementById('generateBtn');
const barContainer = document.getElementById('barContainer');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restart')
const stepInfo = document.getElementById('stepInfo');
const speedSlider = document.getElementById('speedRange');

let bars = [];
let steps = [];
let currentStep = 0;
let interval = null;
let speed = 500;

// Bar Generator
function generateBars(arr) {
    barContainer.innerHTML = '';
    document.getElementById('barIndexContainer').innerHTML = '';
    bars = [];

    const maxVal = Math.max(...arr); // 🔥 Find the max to scale everything

    arr.forEach((num, idx) => {
        // Normalize height relative to max value
        const heightPercent = (num / maxVal) * 100;

        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${heightPercent}%`;
        bar.style.width = `30px`;
        bar.style.margin = '0 5px';
        bar.style.backgroundColor = '#61dafb';
        bar.style.display = 'flex';
        bar.style.alignItems = 'flex-end';
        bar.style.justifyContent = 'center';
        bar.textContent = num;
        bars.push(bar);
        barContainer.appendChild(bar);

        const indexLabel = document.createElement('div');
        indexLabel.classList.add('bar-index');
        indexLabel.textContent = idx;
        document.getElementById('barIndexContainer').appendChild(indexLabel);
    });
}

// Bubble Sort Step Recorder
function recordBubbleSortSteps(arr) {
    steps = [];
    let temp = [...arr];

    for (let i = 0; i < temp.length - 1; i++) {
        for (let j = 0; j < temp.length - i - 1; j++) {
            const step = {
                indices: [j, j + 1],
                swapped: false,
                arrSnapshot: [...temp]
            };

            if (temp[j] > temp[j + 1]) {
                [temp[j], temp[j + 1]] = [temp[j + 1], temp[j]];
                step.swapped = true;
            }

            step.arrSnapshot = [...temp];
            steps.push(step);
        }
    }
}

// Animate a Step
function animateStep(index) {
    if (index < 0 || index >= steps.length) return;

    const step = steps[index];
    const [i, j] = step.indices;

    // Update bars
    step.arrSnapshot.forEach((val, idx) => {
        bars[idx].style.height = `${val * 3}px`;
        bars[idx].textContent = val;
        bars[idx].style.backgroundColor = '#61dafb';
    });

    bars[i].style.backgroundColor = '#f39c12';
    bars[j].style.backgroundColor = '#e74c3c';

    // Update step info single-line display (optional)
    // document.getElementById('stepInfo').textContent = `Comparing index ${i} and ${j}. ${step.swapped ? "Swapped" : "No Swap"}`;

    // Update full step list below
    updateStepList();
}

function updateStepList() {
    const stepList = document.getElementById('stepList');
    stepList.innerHTML = '';

    for (let i = 0; i <= currentStep - 1; i++) {
        const step = steps[i];
        const [a, b] = step.indices;
        const arr = step.arrSnapshot;
        const valA = arr[a];
        const valB = arr[b];

        const li = document.createElement('li');

        let description = `Visited index ${a} (${valA}) and ${b} (${valB}) → `;
        if (valA > valB) {
            description += `${valA} is greater than ${valB}, so swapped`;
        } else {
            description += `${valA} is less than or equal to ${valB}, no swap needed`;
        }

        li.textContent = `Step ${i + 1}: ${description}`;

        if (i === currentStep - 1) {
            li.classList.add('current');
        }

        stepList.appendChild(li);
    }

    const container = document.getElementById('stepInfo');
    container.scrollTop = container.scrollHeight;
}

// Play
function play() {
    if (interval) return;

    interval = setInterval(() => {
        if (currentStep >= steps.length) {
            clearInterval(interval);
            interval = null;
            return;
        }
        animateStep(currentStep++);
    }, getActualSpeed());
}

// Pause
function pause() {
    clearInterval(interval);
    interval = null;
}

// Events
generateBtn.addEventListener('click', () => {
    const input = inputBox.value.trim();
    if (!input) return;

    const arr = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
    if (arr.length === 0) return;

    generateBars(arr);
    recordBubbleSortSteps(arr);
    currentStep = 0;
    animateStep(currentStep);
});

playBtn.addEventListener('click', play);

pauseBtn.addEventListener('click', pause);

nextBtn.addEventListener('click', () => {
    if (currentStep < steps.length) {
        animateStep(currentStep++);
    }
});

prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--; // go back first
        animateStep(currentStep);
    }
});

restartBtn.addEventListener('click', () => {
    pause();
    currentStep = 0;
    animateStep(currentStep);
});

function getActualSpeed() {
    const sliderValue = parseInt(speedSlider.value);
    return 2100 - sliderValue; // 100 => 2000ms, 2000 => 100ms
}