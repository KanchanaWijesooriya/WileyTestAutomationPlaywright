// TC01 - Verify the Search Functionality of ‘Wiley online library’ with Valid Keywords

import { test, expect } from '@playwright/test';   // Importing necessary modules from Playwright for test execution
import AxeBuilder from '@axe-core/playwright';    // Importing AxeBuilder from '@axe-core/playwright' for running accessibility tests

test('VerifySearchFunctionalityOfWileyOnlineLibrary', async ({ page }) => {

  // Step 1: Opening the browser and verifying the page's elements
  await test.step("Open the browser", async () => {
    await page.goto('https://onlinelibrary.wiley.com/');
    await expect(page.getByText('Today\'s research, tomorrow\'s')).toBeVisible();
    await expect(page.getByText('Accelerating research')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Wiley Online Library' })).toBeVisible();
  });

  // Step 2: Clicking on the search button
  await test.step("Click on the search button", async () => {
    await page.locator("//input[@type='search']").click();
  });

  // Step 3: Entering an ISBN value into the search field
  await test.step("Click on the seach filed and enter some ISBN value", async () => {

    // Entering an ISBN value into the search input field sequentially with a delay of 100ms between each key press
    await page.locator("//input[@type='search']").pressSequentially("9781119789758", {delay: 100});
  }); 

  // Step 4: Pressing the Enter key to trigger the search
  await test.step('click enter key', async () => {
    await page.keyboard.press('Enter');

    //await page.goto('https://onlinelibrary.wiley.com/action/doSearch?AllField=9781119789758');

    // Verifying that the search result count is 1
    await expect(page.locator("//span[@class='result__count' and text()='1']")).toBeVisible();
    
    // Verifying that the book title 'Climate Change and Agriculture: Perspectives, Sustainability and Resilience' is visible in the results and link
    await expect(page.locator("//a[@class='meta__serial meta__book']")).toHaveText('Climate Change and Agriculture: Perspectives, Sustainability and Resilience');
    await expect(page.locator("//a[@class='meta__serial meta__book']")).toBeVisible();
  });

  // Optional 
  /*await test.step('Run accessibility test', async () => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });*/

});

/* Note: 
 Accessibility Test: The test uses 'AxeBuilder' from the '@axe-core/playwright' library to perform an accessibility check. 
 The violations array should be empty, meaning the page passes the accessibility test if no violations are found.
 Also you need to admin access to verify your browser to proceed the after press 'enter'.

*/
