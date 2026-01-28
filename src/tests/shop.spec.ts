import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Sanity Check: Swag Labs loads correctly', async ({ page }) => {
  
    const login = new LoginPage(page);
    await login.goto();
    
    await expect(page).toHaveTitle(/Swag Labs/);
});
