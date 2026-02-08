import { Page, expect, Locator } from "@playwright/test";

export class RegisterPage {
 readonly page: Page;
    readonly rightPanel: Locator;
    readonly form: Locator;
     readonly firstName: Locator;
     readonly lastName: Locator;
     readonly addressStreet: Locator;
     readonly addressCity: Locator;
     readonly addressState: Locator;
     readonly addressZipCode: Locator;
     readonly phone: Locator;
     readonly ssn: Locator;
     readonly username: Locator;
     readonly password: Locator
     readonly confirmPassword: Locator;
   
     constructor(page: Page) {
       this.page = page;

       this.rightPanel = page.locator("#rightPanel");
       this.form = this.rightPanel.locator("#customerForm");
   
       this.firstName = this.form.locator('input[name="customer.firstName"]');
       this.lastName = this.form.locator('input[name="customer.lastName"]');
       this.addressStreet = this.form.locator('input[name="customer.address.street"]');
       this.addressCity = this.form.locator('input[name="customer.address.city"]');
       this.addressState = this.form.locator('input[name="customer.address.state"]');
       this.addressZipCode = this.form.locator('input[name="customer.address.zipCode"]');
       this.phone = this.form.locator('input[name="customer.phoneNumber"]');
       this.ssn = this.form.locator('input[name="customer.ssn"]');
       this.username = this.form.locator('input[name="customer.username"]');
       this.password = this.form.locator('input[name="customer.password"]');
       this.confirmPassword = this.form.locator('input[name="repeatedPassword"]');
     }

  async goto() {
    await this.page.goto("https://parabank.parasoft.com/");
    await this.page.click("text=Register");
  }

  async register(user: any, username: string) {
    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.addressStreet.fill(user.address);
    await this.addressCity.fill(user.city);
    await this.addressState.fill(user.state);
    await this.addressZipCode.fill(user.zip);
    await this.phone.fill(user.phone);
    await this.ssn.fill(user.ssn);

    await this.username.fill(username);
    await this.password.fill(user.password);
    await this.confirmPassword.fill(user.password);

    await this.page.click('input[value="Register"]');

    await expect(this.page.locator("text=Your account was created successfully. You are now logged in.")).toBeVisible();
  }
}
