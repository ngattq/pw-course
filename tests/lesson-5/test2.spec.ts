import { test } from '@playwright/test';

test('Exercise 2: Product Page', async ({ page }) => {
    // Truy cập page https://material.playwrightvn.com/
    await test.step('Truy cap page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    // Click Bài 2: Product Page
    await test.step('Click Bai 2: Product Page', async () => {
        await page.locator('//a[text() = "Bài học 2: Product page"]').click();
    })

    // add product 1: số lượng 2
    await test.step('add product 1 - số lượng 2', async () => {
        await page.locator('//button[@data-product-id = "1"]').dblclick();

    })

    // Add product 2
    await test.step('add product 2 - số lượng 3', async () => {
        await page.locator('//button[@data-product-id = "2"]').click({clickCount: 3});
    })

    // Add product 3
    await test.step('add product 3 - số lượng 1', async () => {
        await page.locator('//button[@data-product-id = "3"]').click();
    })

    
});