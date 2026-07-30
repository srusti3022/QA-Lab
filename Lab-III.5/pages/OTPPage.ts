import { Page } from '@playwright/test';

export class OTPPage {
  constructor(private page: Page) {}

  async enterOTP(code: string) {
    await this.page.locator('#otp').fill(code);

    await this.page.locator('#kc-login').click();
  }
}