const DATA = [
  { id: 1, title: "first" },
  { id: 2, title: "second" },
  { id: 3, title: "third" },
  { id: 4, title: "fourth" },
];

console.log("Menampilkan data");
console.log(DATA);

/**
 * .find()
 * .find() digunakan untuk mencari item didalam array berdasarkan kondisi yang telah ditentukan
 */
const item = DATA.find((value) => value.id === 2); // mencari item didalam array DATA yang memiliki id = 2
console.log("\nFungsi find()");
console.log(item);

/**
 * .findIndex()
 * .findIndex() digunakan untuk mencari index sebuah item yang ada didalam array berdasarkan kondisi yang telah ditentukan
 */
const itemIdx = DATA.findIndex((value) => value.id === 2);
console.log("\nFungsi findIndex()");
console.log(itemIdx);
