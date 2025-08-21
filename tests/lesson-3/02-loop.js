//ex1 - tổng từ 1 đến 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(`Tổng từ 1 đến 100 là ${sum}`);

//ex2 - In bảng cửu chương từ 2 dến 9
for (let a = 2; a <= 9; a++) {
    console.log(`Bảng cửu chương của ${a}`);
    for (let b = 1; b <= 10; b++) {
        console.log(`${a} * ${b} = ${a * b}`);
    }
}

//ex3 - tạo mảng chứa số lẻ từ 1 đến 99
let oddNumbers = [];
for (let i = 1; i < 100; i += 2) {
    oddNumbers.push(i);
};
console.log(oddNumbers);

//ex4 - In ra 10 email dựa trên tên người dùng và số thứ tự
const username = "user";
const domain = "@example.com";
for (let i = 1; i <= 10; i++) {
    const email = `${username}${i}${domain}`;
    console.log(email);
};

//ex5 - Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu.
let tongdoanhthu = 0;
let doanhthu = [
    { "month": 1, "total": 100 },
    { "month": 2, "total": 100 },
    { "month": 3, "total": 100 },
    { "month": 4, "total": 100 },
    { "month": 5, "total": 100 },
    { "month": 6, "total": 100 },
    { "month": 7, "total": 100 },
    { "month": 8, "total": 100 },
    { "month": 9, "total": 100 },
    { "month": 10, "total": 100 },
    { "month": 11, "total": 100 },
    { "month": 12, "total": 100 },
];
for (let i = 0; i < doanhthu.length; i++) {
    tongdoanhthu += doanhthu[i].total;
};
console.log(`doanh thu cả năm là ${tongdoanhthu}`);
