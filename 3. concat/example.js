const arr1 = [1, 2, 3, 4];
const arr2 = [10, 20, 30, 40];
const arr3 = [100, 200, 300, 400];

console.log("Menampilkan array");
console.log(arr1);
console.log(arr2);
console.log(arr3);

/**
 * .concat()
 * .concat() digunakan untuk menggabungkan 2 atau lebih array
 */

const mergedArr = arr1.concat(arr2, arr3);
console.log("\nFungsi concat()");
console.log(mergedArr);
