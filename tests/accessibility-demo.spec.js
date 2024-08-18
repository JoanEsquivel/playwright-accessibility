// @ts-check
// 1- npm install playwright
const { test, expect } = require('@playwright/test');
// 2- npm install @axe-core/playwright
// 3- Import the library
const AxeBuilder = require('@axe-core/playwright').default;

test.describe('Accessibility testing demo using Playwright', ()=>{

  test('should pass a general accessibility scan', async ({page}, testInfo)=> {
    await page.goto('https://playwright.dev/'); 

    // 4- Full page review
    const accessibilityScanResults = await new AxeBuilder({ page })
    // .disableRules(['empty-heading', 'heading-order'])
    .analyze();

    //5- Attach log
    await testInfo.attach('accessibility-scan-results', {
      body: JSON.stringify(accessibilityScanResults, null, 2),
      contentType: 'application/json'
    });

    // 6- Assertion

    expect(accessibilityScanResults.violations).toEqual([]);

  })

})
