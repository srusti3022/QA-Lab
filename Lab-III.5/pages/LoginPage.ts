import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(
      `${process.env.BASE_URL}/realms/instasafe-lab/account`
    );
  }

  async openLoginForm() {
    const signInButton = this.page.locator('#landingSignInButton');

    await signInButton.waitFor({ state: 'visible' });
    await signInButton.click();

    await this.page.locator('input[name="username"]').waitFor({
      state: 'visible'
    });
  }

  async login(username: string, password: string) {

    await this.page.locator('input[name="username"]').fill(username);

    await this.page.locator('input[name="password"]').fill(password);

    await this.page.locator('#kc-login').click();
  }
}