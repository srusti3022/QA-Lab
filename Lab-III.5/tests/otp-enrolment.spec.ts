import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

import { loginWithOTP } from '../utils/loginHelper';

dotenv.config();

test('OTP Validation Test', async ({ page }) => {

  await loginWithOTP(page);

  await expect(page).toHaveURL(/account/);
});