const charactersArr = ["Totoro", "Chihiro", "Kiki", "Ponyo", "Haku"];

console.log("Menampilkan data");
console.log(charactersArr);

/**
 * .splice()
 * .splice() digunakan untuk menambahkan, menghapus, atau mengganti item dari atau ke sebuah array
 */

console.log("\nFungsi splice() untuk menghapus item");
const copyArr1 = [...charactersArr];
copyArr1.splice(0, 2); // menghapus 2 item dimulai dari index 0
console.log(copyArr1);

console.log("\nFungsi splice() untuk mengganti item");
const copyArr2 = [...charactersArr];
copyArr2.splice(0, 2, "Arietty"); // menghapus 2 item dimulai dari index 0 dan menambahkan 'Arietty' di index 0
console.log(copyArr2);

console.log("\nFungsi splice() untuk menambahkan item");
const copyArr3 = [...charactersArr];
copyArr3.splice(copyArr3.length, 0, "Arietty"); // menambahkan 1 item di index terakhir
console.log(copyArr3);

/**
 * .slice()
 * .slice() digunakan untuk memilih item dari sebuah array
 */

console.log("\nFungsi slice()");
const copyArr4 = charactersArr.slice(0, 3); // memilih item dari index 0 sebanyak 3 item
console.log(copyArr4);
