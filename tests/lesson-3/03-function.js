//ex1
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 4)); // 8

//ex2
function findMin(a, b, c) {
    let min = a;

    if (b < min) {
        min = b;
    }

    if (c < min) {
        min = c;
    }

    return min;
}
console.log("Giá trị nhỏ nhất là:", findMin(3, 7, 2));   // Kết quả: 2
console.log("Giá trị nhỏ nhất là:", findMin(10, 5, 8));  // Kết quả: 5

//ex3
function getTopStudents(student, threshold) {
    let result = [];
    for (let i = 0; i < student.length; i++) {
        if (student[i].score >= threshold) {
            result.push(student[i].name);
        }
    };
    console.log(result);
};
const student = [
    { "name": "Nga", score: 10 },
    { "name": "Nam", score: 8 },
    { "name": "Hoa", score: 5 },
    { "name": "Lan", score: 7 },
    { "name": "Hoa", score: 9 },
];
const threshold = 8;
getTopStudents(student, threshold);

//ex4
function calculateInterest(principal, rate, years) {
    let total = principal + (principal * rate * years) / 100;
    console.log(`Với số tiền gửi ban đầu là ${principal}, lãi suất ${rate}% thì tổng số tiền gốc và lãi sau ${years} năm là ${total}`);
};
principal = 1000;
rate = 5;
years = 2;
calculateInterest(principal, rate, years);