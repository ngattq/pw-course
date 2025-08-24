const scores = [85, 90, 78]; 
const ages = [18, 21, 16, 25]; 
const words = ["apple", "banana", "cherry", "date"]; 
const numbers = [1, 2, 3, 4]; 
const expenses = [50, 100, 150];

const scoresGreater80 = scores.filter(s => s > 80);
console.log(`2.1 Các giá trị trong scores > 80: ${scoresGreater80}`);

const agesAtLeast18 = ages.filter(a => a >= 18);
console.log(`2.2 Các giá trị trong ages ≥ 18: ${agesAtLeast18}`);

const wordsLenGreater5 = words.filter(w => w.length > 5);
console.log(`2.3 Các từ trong words có độ dài > 5: ${wordsLenGreater5}`);
