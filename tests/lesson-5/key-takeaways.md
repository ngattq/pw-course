# Function advance
1. **<span style="color:#66CCFF">Lambda function (arrow function)</span>**
- Sử dụng dấu => thay vì từ khoá function
- Cú pháp: 
                (parameters) => {
                // Code here
                }
2. **<span style="color:#66CCFF">Anonymous function</span>**
- Hàm không có tên
- Thường được sử dụng 1 lần hoặc làm đối số truyền vào các hàm khác
- Cú pháp:
            Function (parameters) {
            // Code here
}
    
# DOM (Document Object Model)
![Element](./../images/element.png)
1. **<span style="color:#66CCFF">Các thẻ html thường gặp</span>**
![Thẻ](./../images/tag.png)
2. Cây DOM
- Khi trình duyệt tải một trang web (HTML), nó sẽ biến nội dung HTML đó thành một cấu trúc dạng cây gọi là cây DOM (DOM tree).
- Mỗi phần tử HTML, mỗi thuộc tính, mỗi đoạn text sẽ trở thành một nút (node) trong cây DOM.
- Ví dụ: 

        <html>
        <body>
            <h1>Hello</h1>
            <p>World</p>
        </body>
        </html>
    - Cấu trúc DOM tree sẽ như sau:

        - html
            - body
                - h1 → "Hello"
                - p → "World"

# Selector
1. **<span style="color:#66CCFF">Xpath selector</span>**
- Tuyệt đối: đi dọc theo cây DOM bắt đầu bởi 1 /
- Tương đối: tìm dựa vào đặc tính
    - bắt đầu bởi 2 //
    - //tenthe[@thuoctinh=”giatri”]

- Nên dùng Xpath tương đối để dễ maintain
2. **<span style="color:#66CCFF">CSS selector</span>**
3. **<span style="color:#66CCFF">Playwright selector</span>**

# Playwright basic syntax
1. **<span style="color:#66CCFF">test</span>**
- Đơn vị cơ bản để khai báo một test
- Cú pháp:

        import { test } from '@playwright/test';

        test('<tên test>', async ({ page }) => {
        // Code của test
        });

2. **<span style="color:#66CCFF">step</span>**
- Đơn vị nhỏ hơn test, để khai báo từng step của test case
- Cú pháp:

        await test.step('Tên step', async () => {
        // Code here
        });

        ------------------------------------------
        test('<tên test>', async ({ page }) => {
        await test.step('Tên step', async () => {
        // Code here
        });
        });
3. **<span style="color:#66CCFF">Basic action</span>**
- Navigate:

        await page.goto('https://pw-practice.playwrightvn.com/');
- Click
    - Single click

            await page.locator("//button").click();
    - Double click

            await page.locator("//button").dblclick();
    - Click chuột phải

            page.locator("//button").click({
            button: 'right'
            })
    - Click chuột kèm bấm phím khác

           page.locator("").click({
            modifiers: ['Shift'],
            }) 
- Input
    - Fill

            page.locator("//input").fill('Playwright Viet Nam');
    - pressSequentially

            page.locator("//input").pressSequentially('Playwright
            Viet Nam', {
            delay: 100,
            });
- Radio/checkbox
    - Lấy giá trị hiện tại đang là check hay không:

            const isChecked =
            page.locator("//input").isChecked();
    - Check/ uncheck:

            page.locator("//input").check();
            page.locator("//input").setChecked(false);
- Select option

            await page.selectOption("<Xpath>", "<value>");

- Set Input file

            await page.setInputFiles("<Xpath>", "<relative path>");





