import { CheckoutPage } from "../pageObjectModel/checkoutPage";
import { completeCheckout } from "../utils/checkoutUtils";
import { Test } from "../utils/fixtures";
import { login } from "../utils/login";

Test("add all the products to cart and checkout", async ({ homePage }) => {

    //Test case:
    // 1. login to the applicatiton
    // 2. add each product to the cart

    // Login to the application
    await login({ page: homePage, authFile: 'playwright/.auth/login.json' });

    // Locate all products
    const products = await homePage.locator(".inventory_item");
    const count = await products.count();

    // Add each product to the cart
    for (let i = 0; i < count; i++) {
        const product = products.nth(i);
        const addToCartButton = product.locator("button", { hasText: "Add to cart" });
        await addToCartButton.click();
    }
    // Proceed to checkout
    await completeCheckout(homePage, "Pooja", "N", "565678");

});