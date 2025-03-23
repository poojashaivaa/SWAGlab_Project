import { LoginPage } from "../pageObjectModel/verifyLoginPage";
import test, { expect } from "@playwright/test";


const testData = [
  { username: '', password: '', expectedError: 'Epic sadface: Username is required' },
  { username: 'user2', password: '', expectedError: 'Epic sadface: Password is required' },
  { username: 'invalidUser', password: 'wrongPass', expectedError: 'Epic sadface: Username and password do not match any user in this service' },
  { username: '', password: 'pwd', expectedError: 'Epic sadface: Username is required' },
];

testData.forEach(({ username, password, expectedError }) => {
  test(`Validate error message for username: "${username || 'empty'}" and password: "${password || 'empty'}"`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.enterUsername(username);
    await loginPage.enterPassword(password);
    await loginPage.clickLoginButton();
    const errorMessage = await page.locator('[data-test="error"]').textContent()
    console.log(errorMessage)
    expect(errorMessage).toBe(expectedError);
  });
});

