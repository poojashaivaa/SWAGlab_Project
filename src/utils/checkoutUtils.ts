import { Page } from "@playwright/test";
import { CheckoutPage } from "../pageObjectModel/checkoutPage";


export async function completeCheckout(page: Page,
    firstName: string,
    lastName: string,
    postalCode: string) {
    const checkout = new CheckoutPage(page);

    await checkout.goToCart();
    await checkout.startCheckout();
    await checkout.fillDetails(firstName, lastName, postalCode);
    await checkout.completeOrder();

    // ✅ Validate confirmation message
    await checkout.orderConfirmation.waitFor(); // Ensures the confirmation message is displayed

    await checkout.returnToProducts();
}