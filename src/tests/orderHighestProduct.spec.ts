import { completeCheckout } from "../utils/checkoutUtils";
import { Test } from "../utils/fixtures";
import { login } from "../utils/login";

Test("add the highest-priced product to cart and checkout", async ({ homePage }) => {
    await login({ page: homePage, authFile: 'playwright/.auth/login.json' });

    // Locate all products
    const products = await homePage.locator(".inventory_item");
    const count = await products.count();

    let highestPrice = 0;
    let highestProductIndex = -1;

    // Loop through products to find the highest-priced one
    for (let i = 0; i < count; i++) {
        const product = products.nth(i);
        const priceText = await product.locator(".inventory_item_price").textContent();

        if (priceText) {
            const price = parseFloat(priceText.replace("$", "")); // Convert price text to number
            if (price > highestPrice) {
                highestPrice = price;
                highestProductIndex = i;
            }
        }
    }

    // Add only the highest-priced product to the cart
    if (highestProductIndex !== -1) {
        const highestProduct = products.nth(highestProductIndex);
        const addToCartButton = highestProduct.locator("button", { hasText: "Add to cart" });
        await addToCartButton.click();

        console.log(`Added highest-priced product ($${highestPrice}) to the cart.`);
    } else {
        console.log("No products found.");
    }

    // Checkout
    await completeCheckout(homePage, "Pooja", "N", "565678");
});
