// TC02 - Verified that ‘Login / Register’ button works.

import { test, expect } from '@playwright/test';   // Importing necessary modules from Playwright for test execution

// Defining a test named 'VerifyLoginRegisterOverlayOfWileyOnlineLibrary'
test('VerifyLoginRegisterOverlayOfWileyOnlineLibrary', async ({ page }) => {

    // Step 1: Opening the browser and verifying the page's elements
    await test.step("Open the browser", async () => {
        await page.goto('https://onlinelibrary.wiley.com/');
        await expect(page.getByText('Today\'s research, tomorrow\'s')).toBeVisible();
        await expect(page.getByText('Accelerating research')).toBeVisible();
        await expect(page.getByRole('link', { name: 'Wiley Online Library' })).toBeVisible();
        await expect(page.getByLabel('Log in or Register')).toBeVisible();   // Verifying that the 'Log in or Register' label is visible on the page
      });

    // Step 2: Clicking on the 'Login / Register' button to open the overlay
    await test.step("Click on the Login / Register button", async () => {

        // Clicking on the 'Login / Register' button (identified by the 'sign-in-label' class)
        await page.locator("//span[@class='sign-in-label']").click();
      });
    
    // Step 3: Verifying the visibility of options in the login/register overlay
    await test.step("Verify overlay options visibility", async () => {
        await expect(page.getByRole('link', { name: 'Individual login' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Institutional login' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'REGISTER', exact: true })).toBeVisible();
      });  
});