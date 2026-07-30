import { authenticator } from 'otplib';

authenticator.options = {
  digits: 6,
  step: 30,
};

export function generateOTP(secret: string): string {
  return authenticator.generate(secret);
}