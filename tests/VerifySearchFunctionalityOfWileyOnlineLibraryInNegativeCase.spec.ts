// TC 01(Negative) - Verify the Search Functionality does not giving any result of ‘Wiley online library’ with invalid key words and credentials. 

import { test, expect } from '@playwright/test';   // Importing necessary modules from Playwright for test execution

// Defining the test case for verifying the negative scenario of the search functionality
test('VerifySearchFunctionalityOfWileyOnlineLibraryInNegativeCase', async ({ page }) => {

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

  // Step 3: Entering an invalid keyword or credentials (which is not expected to return results)
  await test.step("Click on the seach filed and enter some ISBN value", async () => {
    await page.locator("//input[@type='search']").pressSequentially("dge453523r';%", {delay: 100});
  }); 

  // Step 4: Pressing the Enter key to trigger the search with an invalid value
  await test.step('click enter key', async () => {

    await page.keyboard.press('Enter');
    await page.goto('https://onlinelibrary.wiley.com/action/doSearch?AllField=dge453523r%27%3B%25');

    // Verifying that the result count is 0 (i.e., no results found), also remove below comment and run this using HTML locators as well
    await expect(page.locator("//span[@class='result__current' and text()='0']")).toBeVisible();
    //await page.getByText('0', { exact: true });

    await expect(page.locator("//*[@class='search-result__no-result']")).toHaveText('Your search did not return any results.');
    //await page.getByText('Your search did not return any results.');
  });

});

