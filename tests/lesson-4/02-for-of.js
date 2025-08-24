const str = "Playwright";
const arr = [1, 2, 3, 4, 3, 55, 23];
const reversedArray = [];
const dupArr = [1, 2, 3, 1, 2, 4, 5];
const uniqueNumber = [];
let firstIndex = -1;
let lastIndex = -1;
let index = 0;
//2.1 in lần lượt các ký tự của str
for (let character of str) {
    console.log(character);
    //2.2 tạo mảng đảo ngược
    reversedArray.unshift(character);
};
console.log(reversedArray);
//2.3 Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr 
for (let value of arr) {
    if (value == 3) {
        if (firstIndex == -1) {
            firstIndex = index;
        }
        lastIndex = index;
    }
    index++;
};
console.log(`Vị trí đầu tiên của 3: ${firstIndex}`);
console.log(`Vị trí đầu tiên của 3: ${lastIndex}`);
//Lọc các phần tử xuất hiện 1 lần trong dupArr 
for (const value of dupArr) {
    let count = 0;
    for (const num of dupArr) {
        if (num === value) count++;
    }
    if (count === 1) {
        uniqueNumber.push(value);
    }
}
console.log(uniqueNumber);

