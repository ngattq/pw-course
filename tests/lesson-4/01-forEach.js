const numbers = [1, 2, 3];

let tonggiatri = 0;
let min = numbers[0];
let max = numbers[0];

let newnumbers = [];

numbers.forEach((value) => {
    //1.1 In lần lượt từng phần tử của numbers.
    console.log(value);
    //1.2 Tính tổng,
    tonggiatri += value;
    //1.2 giá trị nhỏ nhất và lớn nhất
    if (value < min) {
        min = value;
    }
    if (value > max) {
        max = value;

    }
    newnumbers.push(value * 2);
});
console.log(`tổng giá trị mảng là ${tonggiatri}`);
console.log(`giá trị nhỏ nhất của mảng là ${min}`);
console.log(`giá trị lớn nhất của mảng là ${max}`);
console.log(`giá trị mảng mới là: ${newnumbers}`);


