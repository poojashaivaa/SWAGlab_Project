import { Page } from '@playwright/test';
import { GLOBAL } from '../config';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(GLOBAL.app_url);
  }

  async enterUsername(username: string) {
    await this.page.locator('[data-test="username"]').click();
    await this.page.locator('[data-test="username"]').fill(username);
  }

  async enterPassword(password: string) {
    await this.page.locator('[data-test="password"]').click();
    await this.page.locator('[data-test="password"]').fill(password);
  }

  async clickLoginButton() {
    await this.page.locator('[data-test="login-button"]').click();
  }
}
