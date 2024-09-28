import { test, expect } from '@playwright/test';

test.describe('Google Homepage Load', () => {
  test('should load google.com successfully', async ({ page }) => {
    await page.goto('/');
    const title = await page.title();
    expect(title).toContain('Google');
  });
});