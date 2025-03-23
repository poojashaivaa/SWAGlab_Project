import { Test } from "../utils/fixtures";
import { login } from "../utils/login";


Test("lowest product", async ({ homePage }) => {
    await login({ page: homePage, authFile: 'playwright/.auth/login.json' })
    const products = await homePage.locator(".inventory_item")
    const count = await products.count();
    let min = products.nth(0)
    for (let i = 1; i < count; i++) {
        const product = products.nth(i)
        const productPrice = await products.locator(".inventory_item_price").textContent();

        if (productPrice < min) {
            min = product.nth(i)
        }
        const highestProduct = products


    })

const { chromium, firefox, webkit } = require('playwright');

(async () => {
    const browser = await chromium.launch();  // Or 'firefox' or 'webkit'.
    const page = await browser.newPage();
    await page.goto('http://example.com');
    // other actions...
    await browser.close();
})();