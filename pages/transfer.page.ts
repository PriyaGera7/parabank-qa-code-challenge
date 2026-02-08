import { Page, Locator } from '@playwright/test';

export class TransferPage {

  readonly page: Page;
  readonly transferFunds: Locator;
  readonly error : Locator;
  readonly amountInput: Locator;
  readonly fromAccountSelect: Locator;
  readonly toAccountSelect: Locator;
  readonly transferButton: Locator;
  readonly transferSuccessMessage: Locator;
  readonly transferSuccessTitle: Locator;

  
  constructor(page: Page) {
    this.page = page;

    this.transferFunds = page.locator("text=Transfer Funds");
    this.error = page.locator(".error");
    this.amountInput = page.locator("#amount");
    this.fromAccountSelect = page.locator("#fromAccountId");
    this.toAccountSelect = page.locator("#toAccountId");
    this.transferButton = page.locator('input[value="Transfer"]');
    this.transferSuccessMessage = page.locator("#showResult");
    this.transferSuccessTitle = page.locator("#title");
  }

  async transfer(amount: string, fromAccount, toAccount) {
    await this.page.waitForTimeout(3000); // slight delay to ensure stability
    await this.transferFunds.click();
    
    // Wait for page to load and check for errors
    try {
      await this.page.waitForLoadState('networkidle', { timeout: 5000 });
  
      await this.amountInput.fill(amount);
      await this.fromAccountSelect.selectOption(fromAccount);
      await this.toAccountSelect.selectOption(toAccount);
      
      await this.transferButton.click();
    } catch (error) {
      console.error("Transfer operation failed:", error);
      throw error;
    }
  }
}
