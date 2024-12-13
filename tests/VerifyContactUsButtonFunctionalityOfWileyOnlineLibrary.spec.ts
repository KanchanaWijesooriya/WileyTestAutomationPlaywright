// TC 09 – Verified that works ‘Contact Us’ button under the ‘HELP & SUPPORT’ in footer section.

import { test, expect } from '@playwright/test';  // Importing necessary modules from Playwright for test execution

// Defining a test named 'VerifyContactUsButtonFunctionalityOfWileyOnlineLibrary'
test('VerifyContactUsButtonFunctionalityOfWileyOnlineLibrary', async ({ page }) => {

    // Step 1: This block opening the browser and verifying the page's elements
    await test.step("Open the browser", async () => {
        await page.goto('https://onlinelibrary.wiley.com/');  

        await expect(page.getByText('Today\'s research, tomorrow\'s')).toBeVisible();

        // Verifying that the text 'Accelerating research' is visible on the page
        await expect(page.getByText('Accelerating research')).toBeVisible(); 

        await expect(page.getByRole('link', { name: 'Wiley Online Library' })).toBeVisible();

        await expect(page.getByLabel('Log in or Register')).toBeVisible();
      });


    //Step 2: Clicking on the 'Contact Us' button  
    await test.step("Click on the 'Contact Us' button", async () => {

        await page.getByRole('link', { name: 'Contact Us' }).click();

        // Waiting for the URL to change to the contact support page
        await page.waitForURL('https://wolsupport.wiley.com/s/');  

      });

    // Step 3: Verifying the elements on the Contact Us support page
    await test.step("Click on the 'Contact Us' button", async () => {

        // Verifying that the 'Featured Help Topics' title is visible on the page
        await expect(page.locator("//span[@class='title' and text()='Featured Help Topics']")).toBeVisible();
        await expect(page.locator("//div[@class='topicLabel' and text()='Account Administration']")).toBeVisible();
        await expect(page.locator("//div[@class='topicLabel' and text()='PPV (Pay-Per-View)']")).toBeVisible();
        await expect(page.locator("//button[@class='communityBtn slds-button selfServiceContactSupport']")).toBeVisible();
      });
      
    //Optional Step: Clicking on the 'CONTACT SUPPORT' button to ensure page functionality works
    await test.step("Click on the 'CONTACT SUPPORT", async () => {
        await page.locator("//button[@class='communityBtn slds-button selfServiceContactSupport']").click();
        await page.waitForURL('https://wolsupport.wiley.com/s/contactsupport');
      });
    // Step 4: Verifying the elements on the 'Submit a Case' page
    await test.step("Click on the 'Contact Us' button", async () => {

        // Verifying that the 'Submit a Case' title is visible on the page
        await expect(page.locator("//span[@class='title' and text()='Submit a Case']")).toBeVisible();

        await expect(page.locator("//span[@class='paragraphText' and text()='• Wiley Online Library']")).toBeVisible();
      });

});