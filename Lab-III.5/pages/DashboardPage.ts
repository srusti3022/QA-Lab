import { Page, expect } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async verifyLoginSuccess() {
    await expect(this.page).toHaveURL(/account/);
  }

  async logout() {
    await this.page.getByRole('button', {
      name: 'Sign out'
    }).click();
  }

  async verifyLogout() {
    await expect(
      this.page.locator('#landingSignInButton')
    ).toBeVisible();
  }
}