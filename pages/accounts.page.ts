import { expect, Page, Locator } from "@playwright/test";

export class AccountsPage {

  readonly page: Page;
      readonly openNewAccountLink: Locator;
      readonly accountTypeSelect: Locator;
      readonly openNewAccountButton: Locator;
      readonly newAccountId: Locator;
      readonly accountsOverview: Locator;
      readonly accountTable: Locator;
  
      constructor(page: Page) {
       this.page = page;

       this.openNewAccountLink = page.locator("text=Open New Account");
       this.accountTypeSelect = page.locator("#type");
       this.openNewAccountButton = page.locator('input[value="Open New Account"]');
       this.newAccountId = page.locator("#newAccountId");
       this.accountsOverview = page.locator("text=Accounts Overview");
       this.accountTable = page.locator("#accountTable");
  }
  async openSavingsAccount() {
    await this.openNewAccountLink.click();
    await this.accountTypeSelect.waitFor({ state: 'visible' });
    await this.accountTypeSelect.selectOption("1"); // savings
    await this.page.waitForTimeout(3000); // adding delay to ensure stability
    await this.openNewAccountButton.click();

    await this.newAccountId.waitFor({ state: 'visible' });
    const accountNumber = await this.newAccountId.textContent();
    console.log("New Savings Account Number:", accountNumber);
    return (await this.newAccountId.textContent())!.trim();
  }

  async verifyBalanceVisible() {

    await this.accountsOverview.click();
    await expect(this.accountTable).toBeVisible();
  
  }
}
