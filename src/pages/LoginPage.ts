import { type Page, type Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        // TODO: Go to base url
    }

    async login(user: string, pass: string) {
        // TODO: Implement login logic
    }
}
