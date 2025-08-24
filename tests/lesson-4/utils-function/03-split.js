const name = "Nguyễn Văn A";
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com";
const date = "2024-05-19";

// split name
const nameParts = name.split(" ");
console.log(`1.1 Mảng các từ trong name: ${nameParts}`);

// split emails
const emailList = emails.split(",");
console.log(`2.1 Mảng các email: ${emailList}`);

// split date
const dateParts = date.split("-");
console.log(`3.1 Mảng ngày-tháng-năm: ${dateParts}`);