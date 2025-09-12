

import { test } from '@playwright/test';

const date = "2024-08-06";
const username = "ngatran";
const email = "ngatran@gmail.com";
const description = "My name is Nga";
const country = "usa";

test('Bai hoc 1: Register Page', async ({ page }) => {
    // Truy cập page https://material.playwrightvn.com/
    await test.step('Truy cap page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    // Click Bài 1: Register
    await test.step('Click Bai 1: Register', async () => {
        await page.locator("//a[text() = 'Bài học 1: Register Page (có đủ các element)']").click();
    })

    // Fill information for all fields
    await test.step('Fill information for all fields', async () => {
        await page.locator('//input[@id="username"]').fill(username);
        await page.locator('//input[@id="email"]').fill(email);
        await page.locator('//input[@id="male"]').check();
        await page.locator('//input[@id="traveling"]').check();
        await page.locator('//select[@id="country"]').selectOption(country);
        await page.locator('//input[@id="dob"]').fill(date);
        await page.locator('//input[@id="profile"]').setInputFiles(`tests/lesson-5/testdata.txt`);
        await page.locator('//textarea[@id="bio"]').fill(description);
        await page.locator('//input[@id="rating"]').fill("10");
        await page.locator('//input[@id="favcolor"]').fill("#18f231");
        await page.locator('//div[@class="tooltip"]').hover();
        await page.locator('//input[@id="newsletter"]').check();
        await page.click('//span[@class="slider round"]');
    })

    // Click Register button
    await test.step('Click Register button', async () => {
        await page.locator("//button[text() = 'Register']").click();
    })
});