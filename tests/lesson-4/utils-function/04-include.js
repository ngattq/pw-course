const name = "Nguyễn Văn A";
const email = "example@gmail.com";
const productName = "MacBook Pro";
const description = "Khóa học JavaScript cơ bản";

// 1.1 Kiểm tra "Nguyễn" trong name
const hasNguyen = name.includes("Nguyễn");
console.log(`1.1 Có "Nguyễn" trong name không: ${hasNguyen}`);

// 1.2 Kiểm tra "@" trong email
const hasAt = email.includes("@");
console.log(`1.2 Có "@" trong email không: ${hasAt}`);

// 1.3 Kiểm tra "Pro" trong productName
const hasPro = productName.includes("Pro");
console.log(`1.3 Có "Pro" trong productName không: ${hasPro}`);