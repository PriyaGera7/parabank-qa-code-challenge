import { Page, Locator } from "@playwright/test";

export class BillPayPage {

   readonly page: Page;
        readonly billPayLink: Locator;
        readonly payeeNameInput: Locator;
        readonly payeeAddressInput: Locator;
        readonly payeeCityInput: Locator;
        readonly payeeStateInput: Locator;  
        readonly payeeZipCodeInput: Locator;
        readonly payeePhoneInput: Locator
        readonly payeeAccountInput: Locator;
        readonly verifyAccountInput: Locator
        readonly amountInput: Locator;  
        readonly fromAccountSelect: Locator;
        readonly sendPaymentButton: Locator;
        readonly paymentSuccessMessage: Locator;
    
        constructor(page: Page) {
         this.page = page;
  
         this.billPayLink = page.locator("text=Bill Pay");
          this.payeeNameInput = page.locator('input[name="payee.name"]');
          this.payeeAddressInput = page.locator('input[name="payee.address.street"]');
          this.payeeCityInput = page.locator('input[name="payee.address.city"]');
          this.payeeStateInput = page.locator('input[name="payee.address.state"]');
          this.payeeZipCodeInput = page.locator('input[name="payee.address.zipCode"]');
          this.payeePhoneInput = page.locator('input[name="payee.phoneNumber"]');
          this.payeeAccountInput = page.locator('input[name="payee.accountNumber"]');
          this.verifyAccountInput = page.locator('input[name="verifyAccount"]');
          this.amountInput = page.locator('input[name="amount"]');
          this.fromAccountSelect = page.locator('select[name="fromAccountId"]');
          this.sendPaymentButton = page.locator('input[value="Send Payment"]');
          this.paymentSuccessMessage = page.locator("#billpayResult");
    }

  async payBill(account: string, amount: string) {
    await this.billPayLink.click();

    await this.payeeNameInput.fill("John Doe");
    await this.payeeAddressInput.fill("123 Main St");
    await this.payeeCityInput.fill("Anytown");
    await this.payeeStateInput.fill("CA");
    await this.payeeZipCodeInput.fill("12345");
    await this.payeePhoneInput.fill("555-123-4567");
    await this.payeeAccountInput.fill("987654321");
    await this.verifyAccountInput.fill("987654321");
    await this.amountInput.fill(amount);
    await this.fromAccountSelect.selectOption(account);

    await this.sendPaymentButton.click();
  }
}
