import { test } from '@playwright/test';
import dotenv from 'dotenv';

import { LoginPage } from '../pages/LoginPage';
import { OTPPage } from '../pages/OTPPage';
import { DashboardPage } from '../pages/DashboardPage';
import { generateOTP } from '../utils/otp';

dotenv.config();

test('Keycloak Login With OTP', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const otpPage = new OTPPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goto();

  await loginPage.openLoginForm();

  await loginPage.login(
    process.env.keycloak_username!,
    process.env.keycloak_password!
  );

  const otp = generateOTP(
    process.env.OTP_SECRET!
  );

  await otpPage.enterOTP(otp);

  await page.waitForURL(/account/);

  await dashboardPage.verifyLoginSuccess();
});