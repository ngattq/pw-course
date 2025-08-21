//ex1
let car = {
    "make": "Toyota",
    "model": "Corolla",
    year: 2021
};
console.log(`year is ${car.year}`);

//ex2
let person = {
    "name": "Nga",
    "address": {
        "street": "Tran Duy Hung",
        "city": "HN",
        "country": "VN"
    }
};
console.log(`Address is ${person.address.street}`);

//ex3 - truy cập đến 1 phần tử sd ngoặc vuông []
let student = {
    "name": "Nga",
    "grades": {
        math: 8,
        english: 10
    }
};
console.log("Math = ", student["grades"]["math"]);

//ex4 - gán lại thuộc tính
let settings = {
    "volume": "max",
    "brightness": "min"
};
settings.volume = "medium";
console.log(`${settings.volume}`);

//ex5 - thêm thuộc tính
let bike = {
    "make": "Toyota",
    "model": "Corolla",
    year: 2021
};
bike.color = "red";
console.log(bike);

//ex6 - xoá thuộc tính
let employee = {
    "name": "Nga",
    age: 18
};
delete employee.age;
console.log(employee);

//ex7
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
};
console.log(school);
