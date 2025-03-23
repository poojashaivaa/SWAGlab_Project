import { Test } from "../utils/fixtures";
import { login } from "../utils/login";

Test('test', async ({ homePage }) => {
    await login({ page: homePage, authFile: 'playwright/.auth/login.json' });
    await homePage.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await homePage.locator('[data-test="shopping-cart-link"]').click();
    await homePage.locator('[data-test="checkout"]').click();
    await homePage.locator('[data-test="firstName"]').click();
    await homePage.locator('[data-test="firstName"]').fill('pooja');
    await homePage.locator('[data-test="lastName"]').click();
    await homePage.locator('[data-test="lastName"]').fill('N');
    await homePage.locator('[data-test="postalCode"]').click();
    await homePage.locator('[data-test="postalCode"]').fill('344389');
    await homePage.locator('[data-test="continue"]').click();
    await homePage.locator('[data-test="finish"]').click();
    await homePage.locator('[data-test="complete-header"]').click();
    await homePage.locator('[data-test="back-to-products"]').click();
});