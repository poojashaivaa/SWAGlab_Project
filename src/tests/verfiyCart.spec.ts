import { test } from "@playwright/test";
import { completeCheckout } from "../utils/checkoutUtils"; // Ensure this file exists
import { login } from "../utils/login";

test("User should be able to complete checkout", async ({ page }) => {
   // Log in the user
   await login({ page, authFile: "playwright/.auth/login.json" });

   // Add product to cart
   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

   // Complete checkout process
   await completeCheckout(page, "Pooja", "N", "565678");
});