import { test, expect } from "@playwright/test";
import { RegisterPage } from "../../pages/register.page";
import { LoginPage } from "../../pages/login.page";
import { AccountsPage } from "../../pages/accounts.page";
import { TransferPage } from "../../pages/transfer.page";
import { BillPayPage } from "../../pages/billpay.page";
import { generateUsername } from "../../utils/randomUtil";
import { userData } from "../../utils/testData";
import { assert } from "node:console";

test("Parabank E2E flow", async ({ page }) => {
  const username = generateUsername();

  const headerPanel = page.locator("#headerPanel");
  const homeButton = headerPanel.locator('.home');
  const aboutUsButton = headerPanel.locator('.aboutus');
  const contactButton = headerPanel.locator('.contact');

  const register = new RegisterPage(page);
  const login = new LoginPage(page);
  const accounts = new AccountsPage(page);
  const transfer = new TransferPage(page);
  const billpay = new BillPayPage(page);

  await register.goto();
  await register.register(userData, username);

  await expect(headerPanel).toBeVisible();
  await expect(homeButton).toBeVisible();
  await expect(aboutUsButton).toBeVisible();
  await expect(contactButton).toBeVisible();

  const newAccount = await accounts.openSavingsAccount();
  await accounts.verifyBalanceVisible();

  await transfer.transfer('50',newAccount!, newAccount!);

  // Wait for success message 
  await expect(transfer.transferSuccessMessage).toContainText("Transfer Complete!");

  await billpay.payBill(newAccount!, "25");

  // Wait for success message
  await expect(billpay.paymentSuccessMessage).toContainText("Bill Payment Complete");
});
