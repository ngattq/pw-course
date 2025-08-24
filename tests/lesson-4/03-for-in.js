const student = { "name": "Alex", "age": 10, "salary": 20 };
let sum = 0;
const keys = [];

for (const key in student) {
    //3.1 In tên và giá trị mỗi thuộc tính
    console.log(key, ":", student[key]);
    //3.2 Tổng các giá trị số
    if (typeof student[key] === "number") {
        sum += student[key];
    };
    //3.3 Mảng tên thuộc tính
    keys.push(key);
}
console.log(`Tổng các giá trị số: ${sum}`);
console.log(`Mảng tên thuộc tính: ${keys}`);
