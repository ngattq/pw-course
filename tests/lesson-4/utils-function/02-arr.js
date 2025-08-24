const numbers = [1, 2, 3];
const names = ["Alice", "Bob", "Charlie"];

// push
numbers.push(4);
console.log(`1.1 Sau khi push 4 vào cuối numbers: ${numbers}`);

names.push("David");
console.log(`1.2 Sau khi push "David" vào cuối names: ${names}`);

// pop
const popped = numbers.pop();
console.log(`2.1 Giá trị bị pop ra khỏi numbers: ${popped}`);
console.log(`2.2 numbers sau khi pop: ${numbers}`);

// unshift
numbers.unshift(0);
console.log(`3.1 Sau khi unshift 0 vào đầu numbers: ${numbers}`);

names.unshift("David");
console.log(`3.2 Sau khi unshift "David" vào đầu names: ${names}`);

// shift
const numbersForShift = [1, 2, 3, 4];
const shifted = numbersForShift.shift();
console.log(`4.1 Giá trị bị shift ra khỏi numbers: ${shifted}`);
console.log(`4.2 numbers sau khi shift: ${numbersForShift}`);