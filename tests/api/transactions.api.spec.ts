import { test, expect } from "@playwright/test";
import { RegisterPage } from "../../pages/register.page";
import { LoginPage } from "../../pages/login.page";
import { AccountsPage } from "../../pages/accounts.page";
import { BillPayPage } from "../../pages/billpay.page";
import { generateUsername } from "../../utils/randomUtil";
import { userData } from "../../utils/testData";

test("Validate payment transactions via API", async ({ page }) => {

     const username = generateUsername();

     const BaseURL = "https://parabank.parasoft.com/parabank";

const register = new RegisterPage(page);
const accounts = new AccountsPage(page);

  const billpay = new BillPayPage(page);

    await register.goto();
    await register.register(userData, username);

     const accountNumber = await accounts.openSavingsAccount();

     await billpay.payBill(accountNumber, "25");

    const transactionResponse = await page.request.get(`${BaseURL}/services_proxy/bank/accounts/${accountNumber}/transactions`);

    console.log("API Response Status:", transactionResponse.status());
    
    const transactionData = await transactionResponse.json();
    console.log("Transactions API Response:", transactionData);
    
    // Extract transaction fields if transactions exist
    if (transactionData && transactionData.length > 0) {
        const transaction = transactionData[0];
        console.log(`ID: ${transaction.id}`);
        console.log(`Account ID: ${transaction.accountId}`);
        console.log(`Type: ${transaction.type}`);
        console.log(`Date: ${transaction.date}`);
        console.log(`Amount: ${transaction.amount}`);
        console.log(`Description: ${transaction.description}`);
        
        // // Validate transaction structure
        expect(transaction).toHaveProperty('id');
        expect(transaction).toHaveProperty('accountId');
        expect(transaction).toHaveProperty('type');
        expect(transaction).toHaveProperty('date');
        expect(transaction).toHaveProperty('amount');
        expect(transaction).toHaveProperty('description');
    } else {
        console.log("No transactions found");
    }

});