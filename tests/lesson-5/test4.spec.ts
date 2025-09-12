import { test } from '@playwright/test';

test('Exercise 4: Personal notes', async ({ page }) => {
    // Thêm 10 note từ báo VNexpress
    const notes = [
        { title: "Apple Store Online tại Việt Nam 'đóng cửa' trước giờ bán iPhone 17", content: "Website của Apple tại Việt Nam ngừng cho người dùng truy cập vào các sản phẩm, vài tiếng trước khi loạt iPhone 17 và iPhone Air lên kệ." },
        { title: "Giá iPhone 17 tại Việt Nam xếp thứ bao nhiêu thế giới?", content: "Trong năm thứ ba Việt Nam có Apple Store Online và lần đầu thuộc nhóm thị trường bán đợt đầu, giá iPhone 17 trong nước không chênh lệch nhiều so với thế giới." },
        { title: "Nền tảng AI Việt hợp nhất các mô hình AI vào một ứng dụng", content: "Nền tảng AI hợp nhất OneAI tích hợp mô hình từ OpenAI, DeepSeek, Google vào một ứng dụng, cho phép phân quyền khi sử dụng chung." },
        { title: "Xi măng sống có thể lưu trữ và cung cấp điện", content: "Nhóm nghiên cứu Đan Mạch phát triển loại xi măng trộn lẫn với vi khuẩn có thể lưu trữ điện từ nguồn năng lượng tái tạo và phát điện khi cần" },
        { title: "Giải pháp máy chủ ảo cho chuyển đổi số của HostingViet", content: "Công ty Cổ phần công nghệ số Thiên Quang (HostingViet) cung cấp các dịch vụ VPS, Cloud Server, Hosting, thiết kế website, tên miền hỗ trợ doanh nghiệp chuyển đổi số." },
        { title: "iPhone 17 Pro Max màu cam 'cháy hàng' sau vài phút mở bán", content: "Bốn phút sau khi vào được website Apple, Đức Trung đặt mua iPhone 17 Pro Max màu cam nhưng thời gian giao hàng bị lùi thêm hai tuần so với lịch công bố." },
        { title: "Sản phẩm công nghệ chiến lược năm 2025 phải có tính cạnh tranh", content: "Phó thủ tướng Nguyễn Chí Dũng nhấn mạnh sản phẩm công nghệ chiến lược năm 2025 phải làm được ngay, tạo đột phá và có khả năng cạnh tranh trong nước, quốc tế." },
        { title: "7 mẫu máy lọc nước có công nghệ lọc ấn tượng 2025", content: "Số bình chọn thứ tư của Sản phẩm tôi yêu 2025 là cuộc đua của 7 mẫu máy lọc nước có công nghệ lọc ấn tượng, bán chính hãng với giá từ 10 triệu đến 32 triệu đồng." },
        { title: "30 startup Hàn Quốc đến Việt Nam tìm cơ hội", content: "30 startup Hàn Quốc trong lĩnh vực AI, công nghệ giáo dục, công nghệ tài chính, game, y tế, truyền thông cùng đến Hà Nội, chiều 10/9" },
        { title: "30 startup Hàn Quốc đến Việt Nam tìm cơ hội", content: "Đây là đoàn doanh nghiệp khởi nghiệp Hàn Quốc đến Việt Nam với mục tiêu tìm kiếm cơ hội phát triển thị trường, hợp tác, thử nghiệm giải pháp, khảo sát hành vi người dùng. Hoạt động này nằm trong khuôn khổ Triển lãm Vietnam Immersion Week Roadshow 2025" },
    ];

    // Truy cập page https://material.playwrightvn.com/
    await test.step('Truy cap page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    // Click Bài 4: Personal notes
    await test.step('Click Bai 4: Personal notes', async () => {
        await page.locator('//a[text() = "Bài học 4: Personal notes"]').click();
    })

    // thêm 10 notes
    await test.step('them 10 notes', async () => {
        for (const note of notes) {
            await page.locator('//input[@id="note-title"]').fill(note.title);
            await page.locator('//textarea[@id="note-content"]').fill(note.content);
            await page.locator('//button[@id="add-note"]').click();
        }
    })

    // search bất kỳ
    await test.step('search với text bất kỳ', async () => {
        await page.locator('//input[@id="search"]').fill("iphone");
    })

})