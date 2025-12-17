import { type Page, type Locator } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async addItemToCart(itemName: string) {
        // TODO: Implement add to cart logic
    }
}
