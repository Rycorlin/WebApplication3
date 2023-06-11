const { test, expect } = require('@playwright/test');
const v8toIstanbul = require('v8-to-istanbul');

test('My Playwright Test', async ({ page }) => {
    // Your Playwright test code here

    await page.coverage.startJSCoverage();

    await page.goto('https://localhost:44348/');
    const pageTitle = await page.title();
    expect(pageTitle).toBe('Home Page - WebApplication3');

    const coverage = await page.coverage.stopJSCoverage();
    for (const entry of coverage) {
        const converter = v8toIstanbul('', 0, { source: entry.source });
        await converter.load();
        converter.applyCoverage(entry.functions);
        console.log(JSON.stringify(converter.toIstanbul()));
    }

    await browser.close();
});