import { completeCheckout } from "../utils/checkoutUtils";
import { Test } from "../utils/fixtures";
import { login } from "../utils/login";

Test("add all the products to cart and checkout", async ({ homePage }) => {
    await login({ page: homePage, authFile: 'playwright/.auth/login.json' });

    // Locate all products
    const products = await homePage.locator(".inventory_item");
    const count = await products.count();

    let lowestPrice = Number.MAX_VALUE;
    let lowestProductIndex = -1;

    // Loop through products to find the lowest-priced one
    for (let i = 0; i < count; i++) {
        const product = products.nth(i);
        const priceText = await product.locator(".inventory_item_price").textContent();

        if (priceText) {
            const price = parseFloat(priceText.replace("$", "")); // Convert price text to number
            if (price < lowestPrice) {
                lowestPrice = price;
                lowestProductIndex = i;
            }
        }
    }

    // Add only the lowest-priced product to the cart
    if (lowestProductIndex !== -1) {
        const lowestProduct = products.nth(lowestProductIndex);
        const addToCartButton = lowestProduct.locator("button", { hasText: "Add to cart" });
        await addToCartButton.click();

        console.log(`Added lowest-priced product ($${lowestPrice}) to the cart.`);
    } else {
        console.log("No products found.");
    }

    //checkout
    await completeCheckout(homePage, "Pooja", "N", "565678");

})