# 🕷️ PureStack QA Automation Challenge: The Bug Hunter

**PureStack.es - Engineering Validation Protocol.**
> *"We don't accept flaky tests. We build robust Automation Ecosystems."*

---

### 📋 Context & Mission
Welcome to the PureStack Technical Validation Protocol for QA Engineers / SDET.
In modern engineering, QA is not about "record and playback". It's about building scalable, maintainable, and deterministic automation code.

**The Mission:** You need to automate a critical purchase flow on `https://www.saucedemo.com/`.
**The Standard:** We expect strict adherence to the **Page Object Model (POM)** pattern.

### 🚦 Certification Levels (Choose your Difficulty)
Your seniority is defined by the robustness and architecture of your suite. State your target level in your Pull Request.

#### 🥉 Level 3: Essential / Mid-Level
* **Focus:** POM & Resilience.
* **Requirement:** Automate the standard "Happy Path" using Page Objects.
* **Tasks:**
    1.  **Login:** User `standard_user` / `secret_sauce`.
    2.  **Add to Cart:** Add "Sauce Labs Backpack".
    3.  **Checkout Validation:** Navigate to cart and **Assert** that the item name is correct and price is `$29.99`.
    4.  **Resilience:** Use stable locators (e.g., `data-test` attributes, `getByRole`) instead of fragile XPaths or CSS selectors coupled to styles.
* **Deliverable:** A clean test that passes in Headless mode using POM classes.

#### 🥈 Level 2: Pro / Senior
* **Focus:** Data-Driven Testing & Debugging.
* **Requirement:** Everything in Level 3 + **Parametrization & Artifacts**.
* **Extra Tasks:**
    1.  **Data-Driven:** Refactor the test to run with **multiple items**. Create a data fixture (JSON or array) so the same test runs for "Sauce Labs Backpack" AND "Sauce Labs Bike Light" without code duplication.
    2.  **Failure Analysis:** Configure `playwright.config.ts` to capture **Screenshots** and **Video** *only* on test failure.
    3.  **Strict Typing:** Ensure all your Page Object methods use proper TypeScript types (no `any`).
* **Deliverable:** A scalable suite that handles multiple data inputs and provides debugging context.

#### 🥇 Level 1: Elite / Architect
* **Focus:** Efficiency, Optimization & Network Control.
* **Requirement:** Everything above + **Global Setup & Network Interception**.
* **Extra Tasks:**
    1.  **Authentication Reuse:** Implement **Global Setup** or `storageState`. The login should happen *once* (or be bypassed via cookie injection), saving the state so subsequent tests don't need to perform the UI login steps every time.
    2.  **Network Interception:** Use Playwright's `route` capability to block unnecessary resources (e.g., images or analytics) to speed up execution, OR mock a network response to simulate a specific state.
* **Deliverable:** An ultra-fast, optimized test architecture designed for high-concurrency CI/CD pipelines.

---

### 🛠️ Tech Stack Requirements
* **Framework:** Playwright.
* **Language:** TypeScript.
* **Pattern:** **Page Object Model (POM)** is MANDATORY. Do not dump all selectors in the test file (`shop.spec.ts`).
* **Reporting:** Standard HTML Report.

---

### 🚀 Execution Instructions

1.  **Use this template** (Fork the repo).
2.  Install dependencies: `npm ci && npx playwright install --with-deps`.
3.  Define your Page Objects in `src/pages/`.
4.  Write the test logic in `src/tests/shop.spec.ts`.
5.  Run locally: `npx playwright test`.
6.  Submit via **Pull Request** stating your target Level.

### 🧪 Evaluation Criteria (PureStack Audit)

| Criteria | Weight | Audit Focus |
| :--- | :--- | :--- |
| **Robustness** | 35% | Does the test pass consistently? Are locators resilient? |
| **Architecture (POM)** | 30% | Are pages cleanly separated from test logic? Is code reusable? |
| **TypeScript** | 20% | Proper usage of types, interfaces, and async/await. |
| **Configuration** | 15% | Correct setup of reporting, timeouts, and artifacts (Level 2/1). |

---

### 🚨 Project Structure (Standard)
To ensure our **Automated Auditor** works, keep this structure:

```text
/
├── .github/
│   └── workflows/
│       └── audit.yml            # CI Pipeline (Runs 'npx playwright test')
├── src/
│   ├── pages/
│   │   ├── LoginPage.ts         # Page Object: Encapsulates Login selectors & logic
│   │   └── InventoryPage.ts     # Page Object: Encapsulates Product list logic
│   └── tests/
│       └── shop.spec.ts         # The actual Test Scenario (Login -> Shop -> Checkout)
├── playwright.config.ts         # Playwright Configuration (BaseURL, Timeouts, Headless)
├── package.json                 # Dependencies (Playwright, TypeScript)
├── package-lock.json            # Exact versions lock file
└── README.md                    # Instructions
