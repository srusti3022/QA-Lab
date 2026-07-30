import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { OTPPage } from '../pages/OTPPage';
import { generateOTP } from './otp';

export async function loginWithOTP(page: Page) {
  const loginPage = new LoginPage(page);
  const otpPage = new OTPPage(page);

  await loginPage.goto();

  await loginPage.openLoginForm();

  await loginPage.login(
    process.env.keycloak_username!,
    process.env.keycloak_password!
  );

  const otp = generateOTP(
    process.env.OTP_SECRET!
  );

  console.log('Generated OTP:', otp);

  await otpPage.enterOTP(otp);

  await page.waitForURL(/account/);
}