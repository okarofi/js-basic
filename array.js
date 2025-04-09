const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]);
console.log(fruits[2]);

fruits.push("Mango");

fruits.unshift("Grape");

fruits.pop();

fruits.shift();

console.log(fruits.length);

console.log(fruits.includes("Banana"));

console.log(fruits.indexOf("Orange"));

console.log(fruits.join(", "));