let thueTNCN = 0; // gán giá trị mặc định
// thuNhap < 50tr: 10%
// thuNhat > 50tr: 20%
const thuNhap = 60;

if (thuNhap < 50){
thueTNCN = "10%";
}

if (thuNhap > 50) {
    thueTNCN = "20%";
}

console.log(thueTNCN);