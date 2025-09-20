// Generate a random number between 1 and 100 at the start of the game
let secretNumber = Math.floor(Math.random() * 100) + 1;
let minRange = 1;
let maxRange = 100;
let attempts = 0;

// Get references to all important DOM elements
const guessInput = document.getElementById("userGuess");
const guessBtn = document.getElementById("guessBtn");
const restartBtn = document.getElementById("restartBtn");
const message = document.getElementById("message");
const result = document.getElementById("result");
const attemptsDisplay = document.getElementById("attempts");

// Function to handle user's guess
guessBtn.addEventListener("click", function () {
  const userGuess = Number(guessInput.value);
  // Validate input
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    result.textContent = " Please enter a number between 1 and 100!";
    result.style.color = "red";
    return;
  }
  attempts++;
  attemptsDisplay.textContent = attempts;

  // Check the guess
  if (userGuess === secretNumber) {
    result.textContent = `Correct_You_guessed_the_number in ${attempts} attempts`;
    result.style.color = "green";
    guessInput.disabled = true;
    guessBtn.disabled = true;
  } else if (userGuess < secretNumber) {
    minRange = userGuess + 1;
    result.textContent = ` Too low! Try a higher number between ${userGuess + 1} and ${maxRange}`;
    result.style.color = "orange";
  } else if (userGuess > secretNumber) {
    maxRange = userGuess - 1;
    result.textContent = ` Too high! Try a lower number between ${minRange} and ${userGuess - 1}`;
    result.style.color = "orange";
  }
  guessInput.value = "";
});

// Function to reset the game
restartBtn.addEventListener("click", function () {
  // Generate a new number
  secretNumber = Math.floor(Math.random() * 100) + 1;
  minRange = 1;
  maxRange = 100;
  // Reset attempts
  attempts = 0;
  attemptsDisplay.textContent = attempts;

  // Reset messages and input
  message.textContent = "Guess a number between 1 and 100";
  result.textContent = "";
  guessInput.value = "";
  guessInput.disabled = false;
  guessBtn.disabled = false;
});


