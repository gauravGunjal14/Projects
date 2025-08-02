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
