// =========================
// PART 1: Variables & Conditionals
// =========================
let age = 20;
let name = "Egrah";

if (age >= 18) {
  console.log(`${name} is an adult.`);
} else {
  console.log(`${name} is a minor.`);
}

// =========================
// PART 2: Functions
// =========================
function greetUser(userName) {
  return `Hello, ${userName}! Welcome.`;
}

function calculateSum(a, b) {
  return a + b;
}

console.log(greetUser("Egrah"));
console.log("Sum:", calculateSum(10, 15));

// =========================
// PART 3: Loops
// =========================
// For loop example
for (let i = 1; i <= 5; i++) {
  console.log("For Loop Count:", i);
}

// While loop example
let count = 1;
while (count <= 3) {
  console.log("While Loop Count:", count);
  count++;
}

// =========================
// PART 4: DOM Interactions
// =========================

// Change text of a paragraph
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("message").innerText = "The text has been changed!";
});

// Show alert message
document.getElementById("showMessageBtn").addEventListener("click", () => {
  alert("Button clicked! Hello from JavaScript.");
});

// Toggle dark mode
document.getElementById("toggleColorBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
