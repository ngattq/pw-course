let chieuCao = 170;
let soLeChieuCao;
let canNangLyTuong;
let canNangToiDa;
let canNangToiThieu;

soLeChieuCao = chieuCao % 100;
canNangLyTuong = (soLeChieuCao * 9) / 10;
canNangToiDa = soLeChieuCao;
canNangToiThieu = (soLeChieuCao * 8) / 10;

console.log(soLeChieuCao);
console.log("Cân nặng lý tưởng của bạn là", canNangLyTuong, "Cân nặng tối đa là", canNangToiDa, "Cân nặng tối thiếu là", canNangToiThieu);
