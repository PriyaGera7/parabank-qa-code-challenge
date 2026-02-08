import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
    readonly leftPanel: Locator;
    readonly usernameField: Locator;
    readonly password: Locator;
    readonly logInButton: Locator;
  
    
    constructor(page: Page) {
      this.page = page;

      this.leftPanel = page.locator("#leftPanel");
  
      this.usernameField = this.leftPanel.locator('input[name="username"]');
      this.password = this.leftPanel.locator('input[name="password"]');
      this.logInButton = this.leftPanel.locator('input[value="Log In"]');
    }

  async login(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.password.fill(password);
    await this.logInButton.click();
  }
}