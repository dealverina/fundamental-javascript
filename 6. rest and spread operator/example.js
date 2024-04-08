/**
 * Spread syntax digunakan untuk memisahkan semua item pada iterable object seperti array menjadi item tersendiri
 *
 * src: devsaurus.com
 */

console.log("SPREAD SYNTAX");

// Spread syntax untuk clone array atau object
const ghibliCharacters = ["Totoro", "Chihiro", "Kiki", "Ponyo", "Haku"];
const cloneGhibliCharacters = [...ghibliCharacters]; // spread syntax
console.log("\nClone array");
console.log("ghibliCharacters:ß", ghibliCharacters);
console.log("cloneGhibliCharacters:ß", cloneGhibliCharacters);

// Spread syntax untuk merge array atau object
const ghibliCharacters1 = ["Totoro", "Chihiro", "Kiki"];
const ghibliCharacters2 = ["Ponyo", "Haku"];
const mergeGhibliCharacters = [...ghibliCharacters1, ...ghibliCharacters2]; // spread syntax
console.log("\nMerge array");
console.log("ghibliCharacters1:ß", ghibliCharacters1);
console.log("ghibliCharacters2:ß", ghibliCharacters2);
console.log("mergeGhibliCharacters ", mergeGhibliCharacters);

// Spread syntax untuk menambahkan item baru ke array atau object
const ghibliCharacters_1 = ["Totoro", "Chihiro", "Kiki", "Ponyo", "Haku"];
const ghibliCharacters_2 = [...ghibliCharacters_1, "Arietty"]; // spread syntax
console.log("\nMenambahkan item baru ke array");
console.log("ghibliCharacters_1:ß", ghibliCharacters_1);
console.log("new item: Arietty:ß", ghibliCharacters_2);

/**
 * Rest parameter adalah parameter yang akan mengumpulkan item-item yang terpisah menjadi satu
 *
 * src: devsaurus.com
 */

console.log("\nREST PARAMETER");

const getSize = (...args) => {
  // rest parameter
  return args.length;
};
console.log("getSize(1, 3, 5, 7, 9, 11):", getSize(1, 3, 5, 7, 9, 11));
console.log("getSize(100, 200, 300):", getSize(100, 200, 300));
