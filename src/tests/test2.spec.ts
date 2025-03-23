import { test } from '@playwright/test';
import { webkit, devices } from 'playwright';

const iPhone = devices['iPhone 6'];

test('test', async ({ browser }) => {
    const context = await browser.newContext({
        ...iPhone
    });
    const page = await context.newPage();
    await page.goto('https://app-staging.eximpe.com/payments');

    // other actions...

    await context.close();
});