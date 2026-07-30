import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test('Admin Console Accessible', async ({ page }) => {

  await page.goto(
    `${process.env.BASE_URL}/admin/master/console/`
  );

  await expect(page).toHaveTitle(/Keycloak/i);
});