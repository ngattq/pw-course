const scores = [85, 90, 78]; 
const ages = [18, 21, 16, 25]; 
const words = ["apple", "banana", "cherry", "date"]; 
const numbers = [1, 2, 3]; 
const expenses = [50, 100, 150];

const adjustedScores = scores.map(score => {
    if (score < 90) {
        return score * 1.1;
    } else {
        return score * 0.95;
    }
});
console.log(`4.1 Mảng scores sau khi điều chỉnh (tăng 10% nếu < 90, giảm 5% nếu ≥ 90): ${adjustedScores}`);

const numbersAsStrings = numbers.map(n => `${n}`);
console.log(`4.2 numbers = [1,2,3] chuyển thành mảng chuỗi: ${numbersAsStrings}`);

const numbersDoubled = numbers.map(n => n * 2);
console.log(`4.3 numbers = [1,2,3] nhân đôi mỗi giá trị: ${numbersDoubled}`);

