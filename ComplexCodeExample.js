/*
  Filename: ComplexCodeExample.js
  Content: A complex and elaborate JavaScript code example showcasing multiple concepts and techniques.
*/

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Function to capitalize a string
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Create an array of person objects
const people = [
  new Person("John Doe", 25),
  new Person("Jane Smith", 30),
  new Person("Michael Johnson", 45)
];

// Function to calculate the average age
function calculateAverageAge(people) {
  let totalAge = 0;

  for (let person of people) {
    totalAge += person.age;
  }

  return totalAge / people.length;
}

// Print the average age
console.log(`The average age is: ${calculateAverageAge(people)}`);

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random number between 1 and 10
const randomNumber = generateRandomNumber(1, 10);
console.log(`Random number: ${randomNumber}`);

// Function to check if a number is prime
function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Check if the random number is prime
console.log(`Is the random number prime? ${isPrimeNumber(randomNumber)}`);

// Object representing a circle
const circle = {
  radius: 5,
  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
};

console.log(`Area of the circle: ${circle.calculateArea()}`);

// Array of strings
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Filter fruits starting with letter "b"
const filteredFruits = fruits.filter((fruit) => fruit.startsWith("b"));

console.log("Filtered fruits starting with letter 'b':");
console.log(filteredFruits);

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Reverse each string in the fruits array
const reversedFruits = fruits.map((fruit) => reverseString(fruit));

console.log("Fruits array with reversed strings:");
console.log(reversedFruits);

// Object with nested properties
const personData = {
  name: "John Doe",
  age: 25,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA"
  }
};

console.log(`Person name: ${personData.name}`);
console.log(`Address: ${personData.address.street}, ${personData.address.city}, ${personData.address.country}`);

// Function to calculate factorial recursively
function calculateFactorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * calculateFactorial(n - 1);
}

// Calculate factorial of a random number
const factorial = calculateFactorial(randomNumber);
console.log(`Factorial of ${randomNumber}: ${factorial}`);

// Import an external library
const moment = require("moment");

// Get the current date and time using the moment library
const currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(`Current time: ${currentTime}`);

// A complex code example showcasing different concepts and techniques.
// ... More code ...
// ... More code ...
// ... More code ...
// ... More code ...
// ... More code ...