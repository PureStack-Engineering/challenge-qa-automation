# 🕷️ PureStack QA Automation Challenge: The Bug Hunter

**PureStack.es - Engineering Validation Protocol.**
> *"We don't accept flaky tests. We build robust Automation Ecosystems."*

> [!TIP]
> **HOW TO START THIS CHALLENGE**
> 1. Click the green **"Use this template"** button (top right) -> **"Create a new repository"**.
> 2. Select **"Private"** visibility (Crucial to prevent spoilers).
> 3. Clone your new private repository to your machine.
> 4. Once finished, invite user **[JLMoraCastilla](https://github.com/JLMoraCastilla)** as a collaborator to review.
>
> ⚠️ **DO NOT FORK** this repository directly, as it will force your solution to be public.

---

### 📋 Context & Mission
Welcome to the PureStack Technical Validation Protocol for QA Engineers / SDET.
In modern engineering, QA is not about "record and playback". It's about building scalable, maintainable, and deterministic automation code.

**The Mission:** You need to automate a critical purchase flow on `https://www.saucedemo.com/`.
**The Standard:** We expect strict adherence to the **Page Object Model (POM)** pattern. Spaghetti code in the spec file will be rejected.

### 🚦 Certification Levels (Choose your Difficulty)
Your seniority is defined by the robustness and architecture of your suite. State your target level in your Pull Request.

#### 🥉 Level 3: Essential / Mid-Level
* **Focus:** POM & Resilience.
* **Requirement:** Automate the standard "Happy Path" using Page Objects.
* **Tasks:**
    1.  **Page Objects:** Create `LoginPage.ts` and `InventoryPage.ts` classes in `src/pages/`.
    2.  **Login:** Use credentials `standard_user` / `secret_sauce`.
    3.  **Flow:** Add "Sauce Labs Backpack" to cart -> Go to Cart.
    4.  **Validation:** Assert that the item name is exact (`"Sauce Labs Backpack"`) and the price is exact (`"$29.99"`).
* **Deliverable:** A clean test `shop.spec.ts` that passes in Headless mode.

#### 🥈 Level 2: Pro / Senior
* **Focus:** Data-Driven Testing & Debugging.
* **Requirement:** Everything in Level 3 + **Parametrization**.
* **Extra Tasks:**
    1.  **Data-Driven:** Refactor the test to run with a **Data Provider** (JSON or Array). The test must run twice: once for "Backpack" and once for "Bike Light", without duplicating code.
    2.  **Artifacts:** Configure `playwright.config.ts` to capture **Screenshots** and **Video** *only* on failure (retain-on-failure).
    3.  **Strict Typing:** Ensure all Page Object methods return `Promise<void>` or `Promise<Locator>` and use proper TypeScript types (avoid `any`).
* **Deliverable:** A scalable suite that handles multiple data inputs.

#### 🥇 Level 1: Elite / Architect
* **Focus:** Efficiency, Optimization & Network Control.
* **Requirement:** Everything above + **Global Setup & Network Interception**.
* **Extra Tasks:**
    1.  **Bypass Login:** Implement **Global Setup** (`storageState`). The login must happen *once* globally. The tests should inject the cookies/storage state and land directly on the Inventory page, skipping the login UI form.
    2.  **Network Mocking:** Use `page.route()` to block unnecessary resources (images/css) OR mock the inventory API response to simulate a specific product state.
* **Deliverable:** An ultra-fast, optimized test architecture designed for high-concurrency CI/CD pipelines.

---

### 🛠️ Tech Stack Requirements
* **Framework:** Playwright (Latest).
* **Language:** TypeScript.
* **Pattern:** **Page Object Model (POM)** is MANDATORY.
* **Locators:** Use user-facing locators (`getByRole`, `getByText`, `data-test`) over fragile XPaths.

---

### 🚀 Execution Instructions

1.  **Use the Template:** Create your **Private Repository** using the instructions at the top of this file.
2.  Install dependencies:
    ```bash
    npm ci
    npx playwright install --with-deps
    ```
3.  **Architecture:**
    * Define Page Objects in: `src/pages/`
    * Write Test Logic in: `src/tests/shop.spec.ts`
4.  Run tests locally:
    ```bash
    npx playwright test
    ```
5.  **Submit:** Push your changes to your private repo and invite the reviewer.

> **Note:** The `playwright.config.ts` is pre-configured to look for tests in `src/tests`. Do not move the folder structure.

---

### 📝 Audit & Validation Rules (Strict)

> **⚠️ The "No-Flakiness" Policy**
>
> Our automated auditor (`audit.yml`) enforces strict quality rules. Your PR will be automatically rejected if:
>
> 1.  **Structure Violation:** You do not follow the folder structure `src/pages/` and `src/tests/`.
> 2.  **Hard Waits:** The use of `page.waitForTimeout()` is **strictly forbidden**. You must use smart assertions (e.g., `expect(locator).toBeVisible()`).
> 3.  **Debug Leftovers:** Remove any `test.only`, `page.pause()`, or `console.log` before pushing.
> 4.  **Execution:** Tests must pass in Headless mode on GitHub Actions.

---

### 🧪 Evaluation Criteria (PureStack Audit)

| Criteria | Weight | Audit Focus |
| :--- | :--- | :--- |
| **Resilience** | 35% | Do you use `getByRole` vs `xpath`? Are waits explicit or implicit? |
| **Architecture (POM)** | 30% | Are pages cleanly separated from test logic? Is logic reusable? |
| **Code Quality** | 20% | TypeScript usage, descriptive naming, no hardcoded sleeps. |
| **Reporting** | 15% | Standard HTML Report configuration. |

---

### 🚨 Project Structure (Strict)
To ensure our **Automated Auditor** works, keep this structure:

```text
/
├── .github/workflows/   # PureStack Audit System
├── src/
│   ├── pages/           # <--- PUT PAGE OBJECTS HERE
│   │   ├── LoginPage.ts
│   │   └── InventoryPage.ts
│   └── tests/           # <--- PUT SPECS HERE
│       └── shop.spec.ts
├── playwright.config.ts # Configured with testDir: './src/tests'
├── package.json
└── README.md

```
---
## ⚖️ License & Legal Notice

**© 2025 PureStack.es. All Rights Reserved.**

This repository is "Source Available" for **evaluation purposes only**.

* **Public viewing:** Allowed.
* **Commercial use:** ❌ Strictly Prohibited.
* **Redistribution:** ❌ Strictly Prohibited.

By accessing this material, you agree to the terms in `LICENSE.md`.

> **🚫 Publishing solutions to public repositories is a violation of these terms.**
