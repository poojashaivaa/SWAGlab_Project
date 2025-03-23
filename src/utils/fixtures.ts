import { test as base, expect, Page } from '@playwright/test';
import { GLOBAL } from '../config';
import { login } from './login';

export const Test = base.extend<{ homePage: Page }>({
    homePage: async ({ browser }, use) => {
      const context = await browser.newContext({
        storageState: GLOBAL.auth_file
      })
      const homePage = await context.newPage()
      await homePage.goto(GLOBAL.app_url)
      await use(homePage)
      await context.close()
    }
  })
  Test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage()
    await login({ page, authFile: GLOBAL.auth_file })
    await page.close()
  })