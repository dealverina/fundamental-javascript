/**
 * Destructuring adalah javascript expression yang digunakan untuk menyimpang value dari suatu array
 * atau object ke dalam variable yang berbeda.
 *
 * src: devsaurus.com
 */

// Array Destructuring
const name = ["Luke", "Skywalker"];
const [firstName, lastName] = name; // array destructuring
console.log("Array Destructuring");
console.log(name);
console.log(firstName, lastName);

// Object Destructuring
const jedi = {
  id: 1,
  name: "Luke Skywalker",
  lightSaber: true,
  species: "Human",
};

const { name: jediName, species, ...rest } = jedi; // object destructuring
console.log("\nObject Destructuring");
console.log(jedi);
console.log(jediName);
console.log(species);
console.log(rest);
