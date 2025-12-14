# 🕷️ PureStack QA Automation Challenge: The Bug Hunter

PureStack.es - Engineering. Validated by Code.

### Context
Welcome to the **PureStack Technical Validation Protocol** for QA Engineers / SDET.
We don't accept "flaky" tests. We expect robust, maintainable automation code using the **Page Object Model (POM)** pattern.

**⚠️ The Scenario:** You need to automate a purchase flow on the training site `https://www.saucedemo.com/`.

---

### 🎯 The Objective
Using **Playwright + TypeScript**, implement an automated test suite that covers this User Journey:

1.  **Login:**
    * User: `standard_user`
    * Pass: `secret_sauce`
2.  **Add to Cart:**
    * Add the product "Sauce Labs Backpack" to the cart.
3.  **Checkout Validation:**
    * Go to the cart.
    * **Assert** that the item name is correct.
    * **Assert** that the price is `$29.99`.

### 🛠️ Tech Stack Requirements
* **Framework:** Playwright.
* **Language:** TypeScript.
* **Pattern:** **Page Object Model (POM)** is MANDATORY. Do not dump all selectors in the test file.
* **Reporting:** Standard HTML Report.

## 🧪 Evaluation Criteria (How we audit you)

We will clone your repo and run `npm test`. We look for:

- **Green Lights:** The test must pass in **Headless** mode.
- **Architecture:** Did you use classes for your Pages (`src/pages/`)?
- **Selectors:** Are you using resilient locators (e.g., `data-test`) instead of fragile XPaths?

## 🚀 Getting Started

1. Use this template.
2. Install dependencies: `npm ci & npx playwright install --with-deps`.
3. Define your Page Objects in `src/pages/`.
4. Write the test logic in `src/tests/shop.spec.ts`.
5. Run locally: `npx playwright test`.

---

### 🚨 CRITICAL: Project Structure
To ensure our **Automated Auditor** works, keep this structure:

```text
/
├── .github/workflows/   # PureStack Audit System
├── src/
│   ├── pages/           # <--- PAGE OBJECTS GO HERE (LoginPage, InventoryPage...)
│   └── tests/
│       └── shop.spec.ts # <--- YOUR TESTS GO HERE
├── playwright.config.ts
├── package.json
└── README.md
