import { test } from '@playwright/test';

test('Exercise 3: Todo page', async ({ page }) => {
    // Truy cập page https://material.playwrightvn.com/
    await test.step('Truy cap page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    // Click Bài 3: To do page
    await test.step('Click Bai 3: To do page', async () => {
        await page.locator('//a[text() = "Bài học 3: Todo page"]').click();
    })

    // add 100 to do items
    await test.step('add 100 to do items', async () => {
        for (let i = 1; i <= 100; i++) {

            await page.locator('//input[@id = "new-task"]').fill(`todo ${i}`);
            await page.locator('//button[@id = "add-task"]').click();
        }
    })

    // xoá to do item số lẻ
    await test.step('xoá to do item số lẻ', async () => {
        page.on('dialog', async dialog => {
            await dialog.accept();
        })
        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                await page.locator(`//button[@id = "todo-${i}-delete"]`).click();

            }
        }
    })
})