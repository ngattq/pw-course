const scores = [85, 90, 78]; 
const ages = [18, 21, 16, 25]; 
const words = ["apple", "banana", "cherry", "date"]; 
const numbers = [1, 2, 3, 4]; 
const expenses = [50, 100, 150];

const totalScores = scores.reduce((sum, s) => sum + s, 0);
console.log(`6.1 Tổng các giá trị trong scores: ${totalScores}`);

const productNumbers = numbers.reduce((prod, n) => prod * n, 1);
console.log(`6.2 Tích các giá trị trong numbers: ${productNumbers}`);

const totalExpenses = expenses.reduce((sum, e) => sum + e, 0);
console.log(`6.3 Tổng các giá trị trong expenses: ${totalExpenses}`);