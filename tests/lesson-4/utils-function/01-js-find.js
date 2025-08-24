const scores = [85, 90, 78]; 
const ages = [18, 21, 16, 25]; 
const words = ["apple", "banana", "cherry", "date"]; 
const numbers = [1, 2, 3, 4]; 
const expenses = [50, 100, 150];

const firstScoreGreater80 = scores.find(s => s > 80);
console.log(`3.1 Giá trị đầu tiên trong scores > 80: ${firstScoreGreater80}`);

const firstAgeGreater20 = ages.find(a => a > 20);
console.log(`3.2 Giá trị đầu tiên trong ages > 20: ${firstAgeGreater20}`);

const firstWordLenGreater5 = words.find(w => w.length > 5);
console.log(`3.3 Từ đầu tiên trong words có độ dài > 5: ${firstWordLenGreater5}`);
