import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Sanity Check: Swag Labs loads correctly', async ({ page }) => {
    // This test ensures the environment is ready.
    const login = new LoginPage(page);
    await login.goto();
    
    // Check if the title is correct
    await expect(page).toHaveTitle(/Swag Labs/);
});
