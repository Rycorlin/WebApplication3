const { test, expect } = require('@playwright/test');
import { attachCoverageReport } from 'monocart-reporter';

//const v8toIstanbul = require('v8-to-istanbul');

test.describe.configure({
    mode: 'serial'
});

test('My Playwright Test', async ({ page }) => {
    // Your Playwright test code here

    await page.coverage.startJSCoverage();

    await page.goto('https://localhost:44348/');
    const pageTitle = await page.title();
    expect(pageTitle).toBe('Home Page - WebApplication3');

    const coverage = await page.coverage.stopJSCoverage();

    // v8-to-stanbul attempt
    //for (const entry of coverage) {
    //    const converter = v8toIstanbul('', 0, { source: entry.source });
    //    await converter.load();
    //    converter.applyCoverage(entry.functions);
    //    console.log(JSON.stringify(converter.toIstanbul()));
    //}

    const coverageData = await page.evaluate(() => window.__coverage__);

    const report = await attachCoverageReport(coverageData, test.info(), {
        lcov: true
    });
    //console.log(report.summary);

});