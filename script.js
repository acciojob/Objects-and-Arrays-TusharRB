const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

const players = ["John", "Mike", "Sarah"];
const person = { name: "Alice", age: 25 };

// Create a reference to the players array
const team = players;

// Create a copy of the players array
const team1 = [...players];

// Create a copy of the person object
const cap1 = { ...person };

// Testing the variables
console.log(team);   // Output: ["John", "Mike", "Sarah"]
console.log(team1);  // Output: ["John", "Mike", "Sarah"]
console.log(cap1);   // Output: { name: "Alice", age: 25 }

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
