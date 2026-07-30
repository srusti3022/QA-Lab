import { test } from '@playwright/test';
import dotenv from 'dotenv';

import { loginWithOTP } from '../utils/loginHelper';
import { DashboardPage } from '../pages/DashboardPage';

dotenv.config();

test('Logout Test', async ({ page }) => {

  const dashboardPage = new DashboardPage(page);

  await loginWithOTP(page);

  await dashboardPage.verifyLoginSuccess();

  await dashboardPage.logout();

  await dashboardPage.verifyLogout();
});