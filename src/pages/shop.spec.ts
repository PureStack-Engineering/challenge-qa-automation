import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('SauceDemo Purchase Flow', async ({ page }) => {
  // 🏗️ SETUP
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  // 🎭 ACT
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  
  // 🧨 Esta aserción fallará inicialmente porque no has implementado la lógica
  // El candidato debe hacer que esto pase.
  await expect(page).toHaveURL(/inventory.html/);

  await inventoryPage.addItemToCart('Sauce Labs Backpack');

  // 🔍 ASSERT
  // TODO: Validate cart content here
});
