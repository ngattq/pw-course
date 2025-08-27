//bai 1
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K17";
let crew = ["Nga", "Hương", "Tuyết", "Yến", "Thịnh", "Tùng Anh"];
function launchShip(crew, mission) {
    console.log(`Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến
phiêu lưu ${mission}!.`)
};
launchShip(crew, mission);

// bai 2
function calculateDistance(speed, time) {
    let distance = speed * time;
    console.log(`Thoảng cách đến hành tinh bí ẩn là: ${distance} km`);
}
calculateDistance(1000, 24);

//bai 3
function convertTimeToHex(time) {
    let timetohex = time.toString(16);
    console.log(`Thời gian trên hành tinh theo hệ thập lục phân là: ${timetohex}`);
}
convertTimeToHex(120);

//bai 4
function decryptCode(code) {
    let matma = "";
    for (let i = 0; i < code.length; i++) {
        let catchuoi = code.substring(i, i + 1);
        if (catchuoi === catchuoi.toLowerCase()) {
            matma += catchuoi.toUpperCase();
        } else {
            matma += catchuoi.toLowerCase();
        };
        
    }
    console.log(`Mật mã tìm kho báu là: ${matma}`);
}
decryptCode("K17 Challenge");

//bai 5
function returnToEarth(){
console.log(`Chuẩn bị trở về ${departurePlanet}.`);
}
returnToEarth();