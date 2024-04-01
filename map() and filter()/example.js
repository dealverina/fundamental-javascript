const DATA = [
  { id: 1, title: "first" },
  { id: 2, title: "second" },
  { id: 3, title: "third" },
  { id: 4, title: "fourth" },
];

console.log("Menampilkan data dalam bentuk tabel");
console.table(DATA);

/**
 * .map()
 * .map() menciptakan array dengan memanggil fungsi spesifik pada setiap item di array induk.
 * .map() adalah metode nonmutasi yang menciptakan array baru
 *
 * src: digitalocean.com
 */
const upperData = DATA.map((value) => value.title.toUpperCase());
console.log(
  "\nMenampilkan hasil dari fungsi map() yang dimana value diubah menjadi huruf kapital"
);
console.table(upperData); // akan menampilkan value title dalam huruf kapital

/**
 * .filter()
 * .filter() digunakan untuk menyaring value berdasarkan kondisi yang diberikan
 */
const moduloData = DATA.filter((value) => value.id % 2 === 0);
console.log(
  "\nMenampilkan hasil dari fungsi filter() yang dimana hasil dari id dibagi 2 adalah 0"
);
console.table(moduloData);
