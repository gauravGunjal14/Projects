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

// sort selector
const sortName = {
    insertion: "Insertion Sort",
    selection: "Selection Sort",
    bubble: "Bubble Sort",
    quick: "Quick Sort",
    merge: "Merge Sort",
    heap: "Heap Sort",
}

const sortDefination = {
    insertion: '<strong>Definition:</strong><ul><li class="defination1">Insertion sort is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list. It is like sorting playing cards in your hands. You split the cards into two groups: the sorted cards and the unsorted cards. Then, you pick a card from the unsorted group and put it in the right place in the sorted group.</ul></li>',

    selection: '<strong>Definition:</strong><ul><li class="defination1">Selection Sort is a comparison-based sorting algorithm. It sorts an array by repeatedly selecting the smallest (or largest) element from the unsorted portion and swapping it with the first unsorted element. This process continues until the entire array is sorted.</ul></li>',

    bubble: '<strong>Definition:</strong><ul><li class="defination1">Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity are quite high.</ul></li>',

    quick: '<strong>Definition:</strong><ul><li class="defination1">QuickSort is a sorting algorithm based on the Divide and Conquer that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.</ul></li>',

    merge: '<strong>Definition:</strong><ul><li class="defination1">Merge sort is a popular sorting algorithm known for its efficiency and stability. It follows the divide-and-conquer approach. It works by recursively dividing the input array into two halves, recursively sorting the two halves and finally merging them back together to obtain the sorted array.</ul></li>',

    heap: '<strong>Definition:</strong><ul><li class="defination1">Heap sort is a comparison-based sorting technique based on Binary Heap Data Structure. It can be seen as an optimization over selection sort where we first find the max (or min) element and swap it with the last (or first).</ul></li>',
}

const sortWorking = {
    insertion: `<strong>Working:</strong>
    <ul class="working1">
    <li>We start with the second element of the array as the first element is assumed to be sorted.</li>
    <li>Compare the second element with the first element if the second element is smaller then swap them.</li>
    <li>Move to the third element, compare it with the first two elements, and put it in its correct position.</li>
    <li>Repeat until the entire array is sorted.</li>
    </ul>`,

    selection: `<strong>Working:</strong>
    <ul class="working1">
    <li>First we find the smallest element and swap it with the first element. This way we get the smallest element at its correct position.</li>
    <li>Then we find the smallest among remaining elements (or second smallest) and swap it with the second element.</li>
    <li>We keep doing this until we get all elements moved to correct position.</li>
    </ul>`,

    bubble: `<strong>Working:</strong>
    <ul class="working1">
    <li>We sort the array using multiple passes. After the first pass, the maximum element goes to end (its correctposition). Same way, after second pass, the second largest element goes to second last position and so on.</li>
    <li>In every pass, we process only those elements that have already not moved to correct position. After k passes, the largest k elements must have been moved to the last k positions.</li>
    <li>In a pass, we consider remaining elements and compare all adjacent and swap if larger element is before a smaller element. If we keep doing this, we get the largest (among the remaining elements) at its correct position.</li>
    </ul>`,

    quick: `<strong>Working:</strong>
    <ul class="working1">
    <li>Choose a Pivot: Select an element from the array as the pivot. The choice of pivot can vary (e.g., first element, last element, random element, or median).</li>
    <li>Partition the Array: Re arrange the array around the pivot. After partitioning, all elements smaller than the pivot will be on its left, and all elements greater than the pivot will be on its right. The pivot is then in its correct position, and we obtain the index of the pivot.</li>
    <li>Recursively Call: Recursively apply the same process to the two partitioned sub-arrays (left and right of the pivot).</li>
    <li>Base Case: The recursion stops when there is only one element left in the sub-array, as a single element is already sorted.</li>
    </ul>`,

    merge: `<strong>Working:</strong>
    <ul class="working1">
    <li>Divide:  Divide the list or array recursively into two halves until it can no more be divided. </li>
    <li>Conquer:  Each subarray is sorted individually using the merge sort algorithm. </li>
    <li>Merge:  The sorted subarrays are merged back together in sorted order. The process continues until all elements from both subarrays have been merged. </li>
    </ul>`,

    heap: `<strong>Working:</strong>
    <ul class="working1">
    <li>Rearrange array elements so that they form a Max Heap.</li>
    <li>Repeat the following steps until the heap contains only one element:
    1)Swap the root element of the heap (which is the largest element in current heap) with the last element of the heap.
    2)Remove the last element of the heap (which is now in the correct position).We mainly reduce heap size and do not remove element from the actual array.
    3)Heapify the remaining elements of the heap.</li>
    <li>Finally we get sorted array.</li>
    </ul>`,
}

const sortTimeComplexity = {
    insertion: "<strong>Time Complexity:</strong> Best case: O(n), Average case: O(n²), Worst case: O(n²)",
    selection: "<strong>Time Complexity:</strong> Best case: O(n²), Average case: O(n²), Worst case: O(n²)",
    bubble: "<strong>Time Complexity:</strong> Best case: O(n), Average case: O(n²), Worst case: O(n²)",
    quick: "<strong>Time Complexity:</strong> Best Case: (Ω(n log n)), Average Case (θ(n log n)), Worst Case: (O(n²))",
    merge: "<strong>Time Complexity:</strong> Best Case: O(n log n), Average Case: O(n log n), Worst Case: O(n log n)",
    heap: "<strong>Time Complexity:</strong> Best Case: O(n log n), Average Case: O(n log n), Worst Case: O(n log n)",
}

const sortSpaceComplexity = {
    insertion: "<strong>Space Complexity:</strong> O(1)",
    selection: "<strong>Space Complexity:</strong> O(1)",
    bubble: "<strong>Space Complexity:</strong> O(1)",
    quick: "<strong>Space Complexity:</strong> O(log n) (due to recursion stack)",
    merge: "<strong>Space Complexity:</strong> O(n) (due to temporary arrays used for merging)",
    heap: "<strong>Space Complexity:</strong> O(1) (in-place sorting, no extra space needed)",
}

let activeSort = "bubble";
const bubbleSortBtn = document.querySelector("#bubble");
const sortButtons = document.querySelectorAll(".sort-selector button");

const sortDescName = document.querySelector("#sortDesc h2 strong");
const sortDescDefination = document.querySelector(".defination");
const sortDescWorking = document.querySelector(".working");
const sortTime = document.querySelector(".time-complexity");
const sortSpace = document.querySelector(".space-complexity");

sortButtons.forEach(sortButtons => {
    sortButtons.addEventListener("click", (event) => {
        const selectedSort = event.target.id;

        if (selectedSort !== activeSort) {
            document.querySelector(".sort-selector .active")?.classList.remove("active");
            event.target.classList.add("active");

            activeSort = selectedSort;
            sortDescName.innerHTML = sortName[activeSort];
            sortDescDefination.innerHTML = sortDefination[activeSort];
            sortDescWorking.innerHTML = sortWorking[activeSort];
            sortTime.innerHTML = sortTimeComplexity[activeSort];
            sortSpace.innerHTML = sortSpaceComplexity[activeSort];
        }
    })
})



// language button logic
let lang = "cpp";

// bydefault displayed when reloaded page
window.addEventListener("DOMContentLoaded", () => {
    //bubble code display
    document.querySelector(".code-display p").textContent = bubbleSortCodes[lang];

    // bubble sort
    bubbleSortBtn.classList.add("active");
    sortDescName.textContent = sortName[activeSort];
    sortDescDefination.innerHTML = sortDefination[activeSort];
    sortDescWorking.innerHTML = sortWorking[activeSort];
    sortTime.innerHTML = sortTimeComplexity[activeSort];
    sortSpace.innerHTML = sortSpaceComplexity[activeSort];
});

const bubbleSortCodes = {
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

const insertionSortCodes = {
    cpp: `#include <bits/stdc++.h>
using namespace std;

// Function to perform Insertion Sort
void insertionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

void printVector(const vector<int>& arr) {
    for (int num : arr)
        cout << num << " ";
    cout << endl;
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    insertionSort(arr);
    cout << "Sorted array:\\n";
    printVector(arr);
    return 0;
}`,

    c: `#include <stdio.h>

// Function to perform Insertion Sort
void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\\n");
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    insertionSort(arr, n);
    printf("Sorted array:\\n");
    printArray(arr, n);
    return 0;
}`,

    py: `# Insertion Sort in Python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

def print_array(arr):
    for i in arr:
        print(i, end=" ")
    print()

arr = [64, 34, 25, 12, 22, 11, 90]
insertion_sort(arr)
print("Sorted array:")
print_array(arr)`,

    java: `// Insertion Sort in Java
class GFG {
    static void insertionSort(int arr[]) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }

    static void printArray(int arr[]) {
        for (int num : arr)
            System.out.print(num + " ");
        System.out.println();
    }

    public static void main(String args[]) {
        int arr[] = {64, 34, 25, 12, 22, 11, 90};
        insertionSort(arr);
        System.out.println("Sorted array:");
        printArray(arr);
    }
}`,

    js: `// Insertion Sort in JavaScript
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

function printArray(arr) {
    console.log(arr.join(" "));
}

let arr = [64, 34, 25, 12, 22, 11, 90];
insertionSort(arr);
console.log("Sorted array:");
printArray(arr);`
};


const bubbleLanButtons = document.querySelectorAll(".sort-lan-selector button");
const codeDisplay = document.querySelector(".code-display p");

bubbleLanButtons.forEach(bubbleLanButtons => {
    bubbleLanButtons.addEventListener("click", (event) => {
        const selectedLang = event.target.id;

        if (selectedLang !== lang && activeSort === "bubble") {
            document.querySelector(".sort-lan-selector .active")?.classList.remove("active");
            event.target.classList.add("active");

            lang = selectedLang;
            codeDisplay.textContent = bubbleSortBtn[lang] || "// Code not found!";
        }
        else if (selectedLang !== lang && activeSort === "insertion") {
            document.querySelector(".sort-lan-selector .active")?.classList.remove("active");
            event.target.classList.add("active");

            lang = selectedLang;
            codeDisplay.textContent = insertionSortCodes[lang] || "// Code not found!";
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

function highlightBars(index1, index2, className) {
    const bars = document.querySelectorAll('.bar');
    bars[index1]?.classList.add(className);
    bars[index2]?.classList.add(className);
}

function removeHighlight(index1, index2, className) {
    const bars = document.querySelectorAll('.bar');
    bars[index1]?.classList.remove(className);
    bars[index2]?.classList.remove(className);
}

function setSortedBars() {
    document.querySelectorAll('.bar').forEach(bar => {
        bar.classList.remove('comparing', 'swapping');
        bar.classList.add('sorted');
    });
}

function highlightCodeLine(lineNumber) {
    const codeLines = document.querySelectorAll('#codeBox span');
    codeLines.forEach((line, idx) => {
        line.classList.toggle('active-line', idx === lineNumber);
    });
}

// Bubble Sort Step Recorder
function recordBubbleSortSteps(arr) {
    steps = []; // clear previous steps
    let temp = [...arr];

    for (let i = 0; i < temp.length - 1; i++) {
        for (let j = 0; j < temp.length - i - 1; j++) {
            const swapped = temp[j] > temp[j + 1];

            // Record comparison step
            steps.push({
                indices: [j, j + 1],
                arrSnapshot: [...temp],
                swapped: swapped,
                codeLine: swapped ? `swap` : `compare`,
                sortedIndices: [] // nothing marked sorted yet in this step
            });

            if (swapped) {
                [temp[j], temp[j + 1]] = [temp[j + 1], temp[j]];
            }
        }

        // After each outer loop, last i elements are sorted
        let sortedPart = [];
        for (let k = temp.length - i; k < temp.length; k++) {
            sortedPart.push(k);
        }

        // Push step to mark these bars sorted
        steps.push({
            indices: [],
            arrSnapshot: [...temp],
            swapped: false,
            codeLine: null,
            sortedIndices: sortedPart
        });
    }

    // Final pass: mark all sorted
    steps.push({
        indices: [],
        arrSnapshot: [...temp],
        swapped: false,
        codeLine: null,
        sortedIndices: [...Array(temp.length).keys()]
    });
}

function animateStep(index) {
    if (index < 0 || index >= steps.length) return;

    const step = steps[index];
    const [i, j] = step.indices || [];
    const maxVal = Math.max(...step.arrSnapshot);

    // 1. Reset all bars before applying this step
    bars.forEach((bar, idx) => {
        bar.classList.remove("sorted");
        bar.style.backgroundColor = '#61dafb'; // default blue
        const heightPercent = (step.arrSnapshot[idx] / maxVal) * 100;
        bar.style.height = `${heightPercent}%`;
        bar.textContent = step.arrSnapshot[idx];
    });

    // 2. Highlight current comparison
    if (step.indices && step.indices.length === 2) {
        bars[i].style.backgroundColor = '#f39c12'; // comparing
        bars[j].style.backgroundColor = '#e74c3c'; // swapping
    }

    // 3. Apply sorted class for this step
    if (step.sortedIndices && step.sortedIndices.length) {
        step.sortedIndices.forEach(idx => {
            bars[idx].classList.add("sorted");
        });
    }

    updateStepList();
}

function updateStepList() {
    const stepList = document.getElementById('stepList');
    stepList.innerHTML = '';

    for (let i = 0; i <= currentStep - 1; i++) {
        const step = steps[i];
        const li = document.createElement('li');
        let description = '';

        if (step.indices && step.indices.length === 2) {
            const [a, b] = step.indices;
            const arr = step.arrSnapshot;
            const valA = arr[a];
            const valB = arr[b];

            description = `Visited index ${a} (${valA}) and ${b} (${valB}) → `;
            if (step.swapped) {
                description += `${valA} > ${valB}, so swapped`;
            } else {
                description += `${valA} ≤ ${valB}, no swap`;
            }
        }
        else if (step.sortedIndices && step.sortedIndices.length) {
            description = `Marking sorted bars at indices [${step.sortedIndices.join(", ")}]`;
        }
        else {
            description = `No comparison (initialization/final sorted state)`;
        }

        li.textContent = `Step ${i + 1}: ${description}`;

        if (i === currentStep - 1) {
            li.classList.add('current');
            highlightCodeLine(step.codeLine);
        }

        stepList.appendChild(li);
    }

    const container = document.getElementById('stepInfo');
    container.scrollTop = container.scrollHeight;
}

// Highlight Code Line
function highlightCodeLine(lineId) {
    const allLines = document.querySelectorAll('#codeBox span');
    allLines.forEach(line => {
        line.style.backgroundColor = '';
    });

    if (!lineId) return;

    const lineToHighlight = document.getElementById(lineId);
    if (lineToHighlight) {
        lineToHighlight.style.backgroundColor = '#0f6df1';
    }
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
    recordBubbleSortSteps(arr); // <-- now only records steps
    currentStep = 0;
    animateStep(currentStep); // show first step
});

playBtn.addEventListener('click', play);

pauseBtn.addEventListener('click', pause);

nextBtn.addEventListener('click', () => {
    if (currentStep < steps.length) {
        animateStep(currentStep);
        currentStep++;
    }
});

prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        animateStep(currentStep);
    }
});

restartBtn.addEventListener('click', () => {
    pause();
    currentStep = 0;

    // Clear all highlights and sorted states
    bars.forEach(bar => {
        bar.classList.remove('sorted', 'comparing', 'swapping');
        bar.style.backgroundColor = '#61dafb';
    });

    // Show first step
    if (steps.length > 0) {
        animateStep(currentStep);
    }
});

function getActualSpeed() {
    const sliderValue = parseInt(speedSlider.value);
    return 2100 - sliderValue; // 100 => 2000ms, 2000 => 100ms
}