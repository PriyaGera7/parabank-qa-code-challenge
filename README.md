# Fabric QA Challenge - ParaBank Test Automation

A comprehensive test automation framework for ParaBank banking application using Playwright with TypeScript. This project demonstrates both UI and API testing capabilities with a Page Object Model (POM) design pattern.

## 🏦 About ParaBank

ParaBank is a demo banking application that provides various banking services including:
- User registration and authentication
- Account management
- Fund transfers
- Bill payments
- Transaction history

## 🚀 Features

- **UI Testing**: End-to-end testing of banking workflows
- **API Testing**: RESTful API validation and testing
- **Page Object Model**: Maintainable and scalable test structure
- **Cross-browser Support**: Chrome, Firefox, Safari, and Edge
- **Parallel Execution**: Fast test execution with parallel test runs
- **HTML Reports**: Detailed test reports with screenshots and traces
- **Random Data Generation**: Dynamic test data creation
- **TypeScript**: Type-safe test automation

## 📁 Project Structure

```
├── e2e/                    # End-to-end test examples
├── tests/
│   ├── api/               # API test specifications
│   └── ui/                # UI test specifications
├── pages/                 # Page Object Model classes
│   ├── accounts.page.ts
│   ├── billpay.page.ts
│   ├── home.page.ts
│   ├── login.page.ts
│   ├── register.page.ts
│   └── transfer.page.ts
├── utils/                 # Utility functions
│   ├── apiClient.ts       # API client configuration
│   ├── randomUtil.ts      # Random data generation
│   └── testData.ts        # Test data constants
├── playwright.config.ts   # Playwright configuration
└── package.json
```

## 🛠 Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Fabric_QA_challenge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

## 🧪 Running Tests

### UI Tests

```bash
# Run all UI tests
npx playwright test tests/ui/

# Run specific UI test file
npx playwright test tests/ui/parabank.e2e.spec.ts

# Run tests in headed mode (visible browser)
npx playwright test tests/ui/ --headed

# Run tests with debug mode
npx playwright test tests/ui/ --debug
```

### API Tests

```bash
# Run all API tests
npx playwright test tests/api/

# Run specific API test
npx playwright test tests/api/transactions.api.spec.ts

# Run API tests with detailed output
npx playwright test tests/api/ --reporter=line
```

### All Tests

```bash
# Run all tests (UI + API)
npx playwright test

# Run tests in parallel
npx playwright test --workers=4

# Generate HTML report
npx playwright test --reporter=html
```

## 📊 Test Reports

After running tests, view the HTML report:

```bash
npx playwright show-report
```

The report includes:
- Test execution summary
- Screenshots of failures
- Video recordings
- Network activity traces
- Performance metrics

## 🔧 Configuration

### Playwright Configuration (`playwright.config.ts`)

```typescript
export default defineConfig({
  use: {
    headless: false,
    baseURL: "https://parabank.parasoft.com/"
  },
  reporter: [["html"]]
});
```

### Key Configuration Options:
- **headless**: Set to `false` for visible browser testing
- **baseURL**: ParaBank application URL
- **reporter**: HTML report generation
- **timeout**: Test timeout settings
- **retries**: Test retry configuration

## 🎯 Test Scenarios

### UI Test Coverage
- ✅ User Registration
- ✅ User Login/Logout
- ✅ Account Creation (Savings)
- ✅ Fund Transfers
- ✅ Bill Payments
- ✅ Transaction History
- ✅ Error Handling

### API Test Coverage
- ✅ Transaction Validation
- ✅ Account Information Retrieval
- ✅ Customer Data Validation
- ✅ Error Response Handling

## 🏗 Page Objects

The framework uses Page Object Model for maintainable tests:

### Available Page Objects:
- `LoginPage`: Handle user authentication
- `RegisterPage`: User registration functionality  
- `AccountsPage`: Account management operations
- `TransferPage`: Fund transfer operations
- `BillPayPage`: Bill payment functionality
- `HomePage`: Main navigation and dashboard

### Example Usage:
```typescript
const loginPage = new LoginPage(page);
await loginPage.login(username, password);

const accountsPage = new AccountsPage(page);
const accountNumber = await accountsPage.openSavingsAccount();
```

## 🛠 Utilities

### Random Data Generation (`randomUtil.ts`)
```typescript
generateUsername() // Generates: user12345
```

### API Client (`apiClient.ts`)
- Pre-configured API context for ParaBank services
- Base URL management
- Request/Response handling

### Test Data (`testData.ts`)
- Centralized test data management
- User information constants
- Banking test scenarios

## 🚨 Common Issues & Solutions

### Issue: XML Response Instead of JSON
**Problem**: API returns XML but test expects JSON
**Solution**: Use `response.text()` for XML parsing or ensure correct endpoint usage

### Issue: Element Not Found
**Problem**: UI elements not loading in time
**Solution**: Add proper waits using `waitFor()` or `waitForLoadState()`

### Issue: Transfer Between Same Accounts
**Problem**: Cannot transfer from/to same account
**Solution**: Use different account indices in transfer operations

## 📈 Best Practices

1. **Use Page Object Model**: Keep tests maintainable and reusable
2. **Add Explicit Waits**: Ensure elements are ready before interaction
3. **Handle Dynamic Data**: Use random data generation for realistic testing
4. **Error Handling**: Implement proper error validation and recovery
5. **Parallel Execution**: Utilize Playwright's parallel capabilities
6. **Clean Test Data**: Ensure test isolation and data cleanup

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-test`)
3. Commit your changes (`git commit -am 'Add new test scenario'`)
4. Push to the branch (`git push origin feature/new-test`)
5. Create a Pull Request

## 📝 Test Results

Tests can be executed in different modes:
- **Headless**: Fast execution without browser UI
- **Headed**: Visual debugging with browser window
- **Debug**: Step-by-step test execution
- **Trace**: Detailed execution traces for analysis

## 🔗 Resources

- [Playwright Documentation](https://playwright.dev/)
- [ParaBank Demo Site](https://parabank.parasoft.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)

## 📄 License

This project is licensed under the ISC License.

---

**Happy Testing! 🎭**
