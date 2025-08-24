const scores = [85, 90, 78]; 
const ages = [18, 21, 16, 25]; 
const words = ["apple", "banana", "cherry", "date"]; 
const numbers = [1, 2, 3, 4]; 
const expenses = [50, 100, 150];

const scoresMoreThan70 = scores.every(s => s > 70)
console.log(`1.1 Các giá trị trong score có > 70 không: ${scoresMoreThan70}`);  

const agesMoreThan15 = ages.every(a => a > 15);
console.log(`1.2 Tất cả giá trị trong ages > 15 không: ${agesMoreThan15}`);

const wordsLenMoreThan3 = words.every(w => w.length > 3);
console.log(`1.3 Tất cả từ trong words có độ dài > 3 không: ${wordsLenMoreThan3}`);