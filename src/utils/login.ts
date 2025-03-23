import { test, expect, Page } from '@playwright/test';
import { GLOBAL } from '../config';

export const login = async ({ page }:{ page: Page, authFile?: string }): Promise<void>  => {
  const authFile=GLOBAL.auth_file
  await page.goto(GLOBAL.app_url);
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(GLOBAL.username);
  await page.locator('[data-test="login-password"]').click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(GLOBAL.password);
  await page.locator('[data-test="login-button"]').click();
  await page.context().storageState({ path: authFile })
}