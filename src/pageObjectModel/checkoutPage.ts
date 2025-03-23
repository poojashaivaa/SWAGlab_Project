import { Page, Locator } from "@playwright/test";

export class CheckoutPage {
    page: Page;
    cartLink: Locator;
    checkoutButton: Locator;
    firstNameInput: Locator;
    lastNameInput: Locator;
    postalCodeInput: Locator;
    continueButton: Locator;
    finishButton: Locator;
    orderConfirmation: Locator;
    backToProductsButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.orderConfirmation = page.locator('[data-test="complete-header"]');
        this.backToProductsButton = page.locator('[data-test="back-to-products"]');
    }

    async goToCart(): Promise<void> {
        await this.cartLink.click();
    }

    async startCheckout(): Promise<void> {
        await this.checkoutButton.click();
    }

    async fillDetails(firstName: string, lastName: string, postalCode: string): Promise<void> {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
        await this.continueButton.click();
    }

    async completeOrder(): Promise<void> {
        await this.finishButton.click();
        await this.orderConfirmation.waitFor();
    }

    async returnToProducts(): Promise<void> {
        await this.backToProductsButton.click();
    }
}
