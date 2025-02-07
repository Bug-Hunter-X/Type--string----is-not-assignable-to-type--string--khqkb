function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(' ');
}

let user = ["Jane", "Doe"];
console.log(greeterArray(user)); // Correct: Hello, Jane Doe

let userSingle = "Jane Doe";
console.log(greeter(userSingle)); //Correct: Hello, Jane Doe